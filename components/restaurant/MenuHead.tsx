import Head from "next/head";
import { renderTitle } from "../../utils/renderTitle";

export default function MenuHead({ name }: { name: string }) {
  return (
    <Head>
      <title>{renderTitle(name)} | Menu</title>
    </Head>
  );
}
