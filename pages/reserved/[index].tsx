import Navbar from "../../components/common/Navbar";
import ReservedHeader from "../../components/reserved/ReservedHeader";
import ReservedForm from "../../components/reserved/ReservedForm";

export default function Reserve() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ReservedHeader />
            <ReservedForm />
          </div>
        </div>
      </main>
    </main>
  );
}
