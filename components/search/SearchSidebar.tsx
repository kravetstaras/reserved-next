import React from "react";
import Link from "next/link";
import { ICuisine, ILocation, ISearchParams } from "../../pages/search";
import { PRICE } from "@prisma/client";

const priceControls = [
  { id: 1, label: "$", price: PRICE.CHEAP },
  { id: 2, label: "$$", price: PRICE.REGULAR },
  { id: 3, label: "$$$", price: PRICE.EXPENSIVE },
];

export default function SearchSidebar({
  locations,
  cuisines,
  searchParams,
}: {
  searchParams: ISearchParams;
  locations: ILocation[];
  cuisines: ICuisine[];
}) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.length > 0 &&
          locations.map((location) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  city: location.name,
                },
              }}
              className="block font-light text-reg capitalize"
              key={location.id}
            >
              {location.name}
            </Link>
          ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.length > 0 &&
          cuisines.map((cuisine) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  cuisine: cuisine.name,
                },
              }}
              className="block font-light text-reg capitalize"
              key={cuisine.id}
            >
              {cuisine.name}
            </Link>
          ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {priceControls.map((el) => (
            <Link
              key={el.id}
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price: el.price,
                },
              }}
              className="border w-full text-reg font-light rounded-l p-2"
            >
              {el.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
