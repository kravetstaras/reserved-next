import Head from "next/head";

export default function ReservedHead({ name }: { name: string }) {
  return (
    <Head>
      <title>Reserve at {name} | OpenTable</title>
    </Head>
  );
}
