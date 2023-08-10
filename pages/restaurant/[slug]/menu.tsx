import RestaurantNavbar from "../../../components/restaurant/RestaurantNavbar";
import RestaurantMenu from "../../../components/restaurant/RestaurantMenu";
import RestaurantLayout from "../../../components/restaurant/RestaurantLayout";
import MenuHead from "../../../components/restaurant/MenuHead";
import Layout from "../../../components/common/Layout";
import { Item, PrismaClient } from "@prisma/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSidePropsContext } from "next";

const prisma = new PrismaClient();

const fetchMenu = async (slug: string): Promise<Item[] | null> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    return null;
  }

  const { items } = restaurant;

  return items ? items : null;
};

export default function Menu({
  formattedMenu,
  slug,
}: {
  formattedMenu: Item[];
  slug: string;
}) {
  return (
    <Layout>
      <MenuHead name={slug} />
      <RestaurantLayout slug={slug}>
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavbar slug={slug} />
          <RestaurantMenu menu={formattedMenu} />
        </div>
      </RestaurantLayout>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context: GetServerSidePropsContext) {
    const { slug } = context.query;
    const menu = await fetchMenu(slug as string);

    if (!menu) {
      return {
        notFound: true,
      };
    }

    const formattedMenu = menu.map((item) => ({
      ...item,
      created_at: item.created_at.toISOString(),
      updated_at: item.updated_at.toISOString(),
    }));

    return {
      props: { formattedMenu, slug },
    };
  },
});