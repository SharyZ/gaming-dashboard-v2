import { Banner, Layout, PopularGames, ReleasedGames } from "../components";

export const Home = () => {
  return (
    <Layout>
      <Banner />
      <PopularGames />
      <ReleasedGames />
    </Layout>
  );
};
