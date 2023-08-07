import { Inter } from "@next/font/google";
import RestaurantCard from "../components/home/RestaurantCard";
import HomeHeader from "../components/home/HomeHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
        <main>
          <HomeHeader />
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
        </main>
  );
}
