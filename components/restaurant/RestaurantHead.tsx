import Head from "next/head";

export default function RestaurantHead({ name }: { name: string }) {
  return (
    <Head>
      <title>{name} | OpenTable</title>
    </Head>
  );
}
