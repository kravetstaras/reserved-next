import RestaurantNavbar from "../../../components/restaurant/RestaurantNavbar";
import RestaurantTitle from "../../../components/restaurant/RestaurantTitle";
import RestaurantRating from "../../../components/restaurant/RestaurantRating";
import RestaurantDescription from "../../../components/restaurant/RestaurantDescription";
import RestaurantImages from "../../../components/restaurant/RestaurantImages";
import RestaurantReviews from "../../../components/restaurant/RestaurantReviews";
import RestaurantReservationCard from "../../../components/restaurant/RestaurantReservationCard";
import RestaurantLayout from "../../../components/restaurant/RestaurantLayout";
import RestaurantHead from "../../../components/restaurant/RestaurantHead";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
interface IRestaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurant = async (slug: string): Promise<IRestaurant | null> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    },
  });

  return restaurant ? restaurant : null;
};

export default function Restaurant({
  restaurant,
}: {
  restaurant: IRestaurant;
}) {
  return (
    <>
      <RestaurantHead />
      <RestaurantLayout slug={restaurant.slug}>
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavbar slug={restaurant.slug} />
          <RestaurantTitle title={restaurant.name} />
          <RestaurantRating reviews={restaurant.reviews} />
          <RestaurantDescription description={restaurant.description} />
          <RestaurantImages images={restaurant.images} />
          <RestaurantReviews reviews={restaurant.reviews} />
        </div>
        <div className="w-[27%] relative text-reg">
          <RestaurantReservationCard />
        </div>
      </RestaurantLayout>
    </>
  );
}

export async function getServerSideProps(context: { query: { slug: any } }) {
  const { slug } = context.query;
  const restaurant = await fetchRestaurant(slug);

  if (!restaurant) {
    notFound();
  }

  return {
    props: { restaurant },
  };
}
