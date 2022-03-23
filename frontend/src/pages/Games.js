import { GamesList, Layout, Section } from "../components";

const games = [
  {
    id: 0,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "Sniper 2",
    rating: 4.5,
    category: "FPS Shooter",
  },
  {
    id: 1,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "Motor Race",
    rating: 4,
    category: "Race",
  },
  {
    id: 2,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "Witcher Hunt",
    rating: 5,
    category: "Action RPG",
  },
  {
    id: 3,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "PUBG War",
    rating: 4.5,
    category: "Battle Royale",
  },
  {
    id: 4,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "Sniper",
    rating: 5,
    category: "FSP Shooter",
  },
  {
    id: 5,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "Sniper 2",
    rating: 4.5,
    category: "FPS Shooter",
  },
  {
    id: 6,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "Motor Race",
    rating: 4,
    category: "Race",
  },
  {
    id: 7,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "Witcher Hunt",
    rating: 5,
    category: "Action RPG",
  },
  {
    id: 8,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "PUBG War",
    rating: 4.5,
    category: "Battle Royale",
  },
  {
    id: 9,
    cover: "https://fakeimg.pl/200x250/162440?font=bebas",
    title: "Sniper",
    rating: 5,
    category: "FSP Shooter",
  },
];

export const Games = () => {
  return (
    <Layout>
      <Section title="Games">
        <GamesList games={games} />
      </Section>
    </Layout>
  );
};
