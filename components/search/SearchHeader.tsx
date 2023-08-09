import React, { useState } from "react";
import { useRouter } from "next/router";

export default function SearchHeader() {
  const router = useRouter();
  const [location, setLocation] = useState<string>("");

  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <div className="text-left text-lg py-3 m-auto flex justify-center">
        <input
          className="rounded  mr-3 p-2 w-[450px]"
          type="text"
          placeholder="State, city or town"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={() => {
            if (location === "") return;
            router.push(`/search?city=${location}`);
            setLocation("");
          }}
          className="rounded bg-red-600 px-9 py-2 text-white"
        >
          Let's go
        </button>
      </div>
    </div>
  );
}
