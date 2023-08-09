import Link from "next/link";
import { RestaurantCardType } from "../../pages/index";
import Price from "../common/Price";
import Stars from "../common/Stars";

export default function RestaurantCard({
  name,
  main_image,
  cuisine,
  location,
  price,
  slug,
  reviews,
}: RestaurantCardType) {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${slug}`}>
        <img src={main_image} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{name}</h3>
          <div className="flex items-start">
            <Stars reviews={reviews} />
            <p className="ml-2">
              {reviews.length} review{reviews.length === 1 ? "" : "s"}
            </p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{cuisine}</p>
            <Price price={price} />
            <p>{location}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
