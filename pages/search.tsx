import SearchHeader from "../components/search/SearchHeader";
import SearchSidebar from "../components/search/SearchSidebar";
import SearchRestaurantCard from "../components/search/SearchResaurantCar";
import SearchHead from "../components/search/SearchHead";

export default function Search() {
  return (
    <>
    <SearchHead/>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6">
          <SearchRestaurantCard />
        </div>
      </div>
    </>
  );
}
