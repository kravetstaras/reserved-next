import Link from "next/link";
import Navbar from "../../../components/common/Navbar";
import RestaurantHeader from "../../../components/restaurant/RestaurantHeader";
import RestaurantNavbar from "../../../components/restaurant/RestaurantNavbar";
import RestaurantTitle from "../../../components/restaurant/RestaurantTitle";
import RestaurantRating from "../../../components/restaurant/RestaurantRating";
import RestaurantDescription from "../../../components/restaurant/RestaurantDescription";
import RestaurantImages from "../../../components/restaurant/RestaurantImages";
import RestaurantReviews from "../../../components/restaurant/RestaurantReviews";
import RestaurantReservationCard from "../../../components/restaurant/RestaurantReservationCard";

export default function Restaurant() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <RestaurantHeader/>
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavbar/>
            <RestaurantTitle />
            <RestaurantRating />
            <RestaurantDescription />
            <RestaurantImages />
            <RestaurantReviews />
          </div>
          <div className="w-[27%] relative text-reg">
          <RestaurantReservationCard/>
          </div>
        </div>
      </main>
    </main>
  );
}
