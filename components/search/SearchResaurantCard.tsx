import { PRICE, Review } from "@prisma/client";
import Link from "next/link";
import Price from "../common/Price";
import { calculateReviewRating } from "../../utils/calculateReviewRating";
import Stars from "../common/Stars";

export default function SearchRestaurantCard({
  main_image,
  cuisine,
  location,
  price,
  slug,
  name,
  reviews,
}: {
  main_image: string;
  cuisine: string;
  location: string;
  price: PRICE;
  slug: string;
  id: number;
  name: string;
  reviews: Review[];
}) {
  const renderRatingText = () => {
    const rating = calculateReviewRating(reviews);

    switch (true) {
      case rating > 4:
        return "Awesome";
      case rating <= 4 && rating > 3:
        return "Good";
      case rating <= 3 && rating > 0:
        return "Average";
      default:
        return "";
    }
  };

  return (
    <div className="border-b flex pb-5 ml-4">
      <img src={main_image} alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={price} />
            <p className="mr-4 capitalize">{cuisine}</p>
            <p className="mr-4 capitalize">{location}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
}
