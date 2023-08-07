import Link from "next/link";
import Navbar from "../../../components/common/Navbar";
import RestaurantHeader from "../../../components/restaurant/RestaurantHeader";
import RestaurantNavbar from "../../../components/restaurant/RestaurantNavbar";
import RestaurantTitle from "../../../components/restaurant/RestaurantTitle";
import RestaurantMenu from "../../../components/restaurant/RestaurantMenu";

export default function Menu() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <RestaurantHeader/>
        <RestaurantTitle />{/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavbar/>
          <RestaurantMenu />
          </div>
        </div>
      </main>
    </main>
  );
}
