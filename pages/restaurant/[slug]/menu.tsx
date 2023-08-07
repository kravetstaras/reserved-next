import RestaurantNavbar from "../../../components/restaurant/RestaurantNavbar";
import RestaurantMenu from "../../../components/restaurant/RestaurantMenu";
import RestaurantLayout from "../../../components/restaurant/RestaurantLayout";
import MenuHead from "../../../components/restaurant/MenuHead";

export default function Menu() {
  return (
    <>
      <MenuHead />
      <RestaurantLayout>
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavbar />
          <RestaurantMenu />
        </div>
      </RestaurantLayout>
    </>
  );
}
