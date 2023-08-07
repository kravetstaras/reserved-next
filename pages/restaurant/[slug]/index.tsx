import RestaurantNavbar from "../../../components/restaurant/RestaurantNavbar";
import RestaurantTitle from "../../../components/restaurant/RestaurantTitle";
import RestaurantRating from "../../../components/restaurant/RestaurantRating";
import RestaurantDescription from "../../../components/restaurant/RestaurantDescription";
import RestaurantImages from "../../../components/restaurant/RestaurantImages";
import RestaurantReviews from "../../../components/restaurant/RestaurantReviews";
import RestaurantReservationCard from "../../../components/restaurant/RestaurantReservationCard";
import RestaurantLayout from "../../../components/restaurant/RestaurantLayout";
import RestaurantHead from "../../../components/restaurant/RestaurantHead";

export default function Restaurant() {
  return (
    <>
    <RestaurantHead/>
    <RestaurantLayout>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar />
        <RestaurantTitle />
        <RestaurantRating />
        <RestaurantDescription />
        <RestaurantImages />
        <RestaurantReviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <RestaurantReservationCard />
      </div>
    </RestaurantLayout></>
  );
}
