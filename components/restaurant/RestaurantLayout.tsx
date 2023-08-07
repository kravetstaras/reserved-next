import { ReactNode } from "react";
import RestaurantHeader from "./RestaurantHeader";

export default function ({ children }: { children: ReactNode }) {
  return (
    <>
      <RestaurantHeader />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
}
