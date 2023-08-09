import { PRICE } from "@prisma/client";
import Link from "next/link";
import Price from "../common/Price";

export default function SearchRestaurantCard({
  main_image,
  cuisine,
  location,
  price,
  slug,
  name,
}: {
  main_image: string;
  cuisine: string;
  location: string;
  price: PRICE;
  slug: string;
  id: number;
  name: string;
}) {
  return (
    <div className="border-b flex pb-5 ml-4">
      <img src={main_image} alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
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
