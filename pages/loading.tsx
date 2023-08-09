import React from "react";
import HomeHeader from "../components/home/HomeHeader";

export default function Loading() {
  return (
    <main>
      <HomeHeader />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            className="animate-pulse bg-slate-200 w-64 h-72 m-3 rounded outline-hidden border cursor-pointer"
            key={num}
          ></div>
        ))}
      </div>
    </main>
  );
}
