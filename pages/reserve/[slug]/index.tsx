import ReservedHeader from "../../../components/reserve/ReservedHeader";
import ReservedForm from "../../../components/reserve/ReservedForm";
import ReservedHead from "../../../components/reserve/ReservedHead";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSidePropsContext } from "next";
import { ChangeEvent, FormEvent, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import useReservation from "../../../hook/useReservation";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      name: true,
      main_image: true,
    },
  });

  if (!restaurant) {
    throw notFound();
  }

  return restaurant;
};

export default function Reserve({
  restaurant,
  date,
  partySize,
  slug,
}: {
  restaurant: {
    name: string;
    main_image: string;
  };
  slug: string;
  date: string;
  partySize: string;
}) {
  const { user } = useUser();
  const { error, loading, createReservation } = useReservation();
  const day = date.split("T")[0];
  const time = date.split("T")[1];
  const [inputs, setInputs] = useState({
    bookerFirstName: (user?.given_name as string) ?? "",
    bookerLastName: (user?.family_name as string) ?? "",
    bookerPhone: "",
    bookerEmail: (user?.email as string) ?? "",
    bookerOccasion: "",
    bookerRequest: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const booking = await createReservation({
      slug,
      partySize,
      day,
      time,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerPhone: inputs.bookerPhone,
      bookerEmail: inputs.bookerEmail,
      bookerOccasion: inputs.bookerOccasion,
      bookerRequest: inputs.bookerRequest,
    });
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <ReservedHead name={restaurant.name} />
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <ReservedHeader
            name={restaurant.name}
            img={restaurant.main_image}
            date={day}
            time={time}
            partySize={partySize}
          />
          <ReservedForm
            loading={loading}
            inputs={inputs}
            handleChangeInput={handleChangeInput}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context: GetServerSidePropsContext) {
    const { slug, date, partySize } = context.query;

    const restaurant = await fetchRestaurantBySlug(slug as string);

    return {
      props: {
        restaurant,
        date: date || null,
        partySize: partySize || null,
        slug: slug || null,
      },
    };
  },
});
