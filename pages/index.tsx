import { Fragment } from "react";
import RestaurantCard from "../components/home/RestaurantCard";
import HomeHeader from "../components/home/HomeHeader";
import { PrismaClient, PRICE } from "@prisma/client";

const prisma = new PrismaClient();
interface IReview {
  id: number;
  first_name: string;
  last_name: string;
  text: string;
  rating: number;
  restaurant_id: number;
  user_id: number;
}

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: string;
  location: string;
  price: PRICE;
  slug: string;
  reviews: IReview[];
}

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: {
        select: {
          name: true,
        },
      },
      slug: true,
      location: {
        select: {
          name: true,
        },
      },
      price: true,
      reviews: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          text: true,
          rating: true,
          restaurant_id: true,
          user_id: true,
        },
      },
    },
  });

  const formattedRestaurants = restaurants?.map((restaurant) => ({
    ...restaurant,
    cuisine: restaurant.cuisine.name,
    location: restaurant.location.name,
  }));

  return formattedRestaurants;
};

export default function Home({
  restaurants,
}: {
  restaurants: RestaurantCardType[];
}) {
  return (
    <main>
      <HomeHeader />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.length > 0 &&
          restaurants.map((item) => (
            <Fragment key={item.id}>
              <RestaurantCard {...item} />
            </Fragment>
          ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const restaurants = await fetchRestaurants();
  return {
    props: { restaurants },
  };
}
