import { ReactNode } from "react";
import RestaurantHeader from "./RestaurantHeader";

export default function ({
  children,
  slug,
}: {
  children: ReactNode;
  slug: string;
}) {
  return (
    <>
      <RestaurantHeader slug={slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
}
