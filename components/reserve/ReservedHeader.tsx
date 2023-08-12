import React from "react";
import { convertToDisplayTime } from "../../utils/convertToDisplayTime";
import { format } from "date-fns";

export default function ReservedHeader({
  name,
  img,
  date,
  time,
  partySize,
}: {
  name: string;
  img: string;
  date: string;
  time: string;
  partySize: string;
}) {
  return (
    <div>
      <h3 className="font-bold">You're almost done!</h3>
      <div className="mt-5 flex">
        <img src={img} alt="" className="w-32 h-18 rounded" />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="flex mt-3">
            <p className="mr-6">{format(new Date(date), "ccc, LLL d")}</p>
            <p className="mr-6">{convertToDisplayTime(time)}</p>
            <p className="mr-6">
              {partySize} {parseInt(partySize) !== 1 ? "people" : "person"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
