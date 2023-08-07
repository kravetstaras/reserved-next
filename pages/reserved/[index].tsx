import ReservedHeader from "../../components/reserved/ReservedHeader";
import ReservedForm from "../../components/reserved/ReservedForm";
import ReservedHead from "../../components/reserved/ReservedHead";

export default function Reserve() {
  return (
    <>
      <ReservedHead />
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <ReservedHeader />
          <ReservedForm />
        </div>
      </div>
    </>
  );
}
