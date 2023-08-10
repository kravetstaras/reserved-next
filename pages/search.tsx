import SearchHeader from "../components/search/SearchHeader";
import SearchSidebar from "../components/search/SearchSidebar";
import SearchRestaurantCard from "../components/search/SearchResaurantCard";
import SearchHead from "../components/search/SearchHead";
import Layout from "../components/common/Layout";
import { PRICE, PrismaClient, Review } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
interface ISearchItem {
  name: string;
  main_image: string;
  cuisine: string;
  location: string;
  price: PRICE;
  slug: string;
  id: number;
  reviews: Review[];
}

export interface ISearchParams {
  city: string | null;
  cuisine: string | null;
  price: string | null;
}
export interface ILocation {
  id: number;
  name: string;
}

export interface ICuisine {
  id: number;
  name: string;
}
interface QueryParameters extends ParsedUrlQuery {
  param: string | undefined;
}

const prisma = new PrismaClient();

const fetchRestaurantByParams = async (searchParams: ISearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        //@ts-ignore
        equals: searchParams?.city.toLocaleLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        //@ts-ignore
        equals: searchParams?.cuisine.toLocaleLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams?.price,
    };
    where.price = price;
  }

  const restaurants = await prisma.restaurant.findMany({
    where,
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      slug: true,
      cuisine: {
        select: {
          name: true,
        },
      },
      location: {
        select: {
          name: true,
        },
      },
      reviews: true,
    },
  });

  const formattedRestaurants = restaurants?.map((restaurant) => ({
    ...restaurant,
    cuisine: restaurant.cuisine.name,
    location: restaurant.location.name,
  }));

  return formattedRestaurants;
};

const fetchLocations = async () => {
  return prisma.location.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

export default function Search({
  restaurants,
  locations,
  cuisines,
  searchParams,
}: {
  restaurants: ISearchItem[];
  locations: ILocation[];
  cuisines: ICuisine[];
  searchParams: ISearchParams;
}) {
  return (
    <Layout>
      <SearchHead />
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants?.length > 0 ? (
            <>
              {restaurants.map((restaurant) => (
                <SearchRestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </>
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;

    const searchParams: ISearchParams = {
      city: query?.city ? query.city.toString() : null,
      cuisine: query?.cuisine ? query.cuisine.toString() : null,
      price: query?.price ? query.price.toString() : null,
    };

    try {
      const [restaurants, locations, cuisines] = await Promise.all([
        fetchRestaurantByParams(searchParams),
        fetchLocations(),
        fetchCuisines(),
      ]);

      return {
        props: {
          restaurants,
          locations,
          cuisines,
          searchParams,
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        notFound: true,
      };
    }
  },
});
