import { GamesListItem } from "./GamesListItem";

export const GamesList = ({ games }) => {
  return (
    <div className="grid grid-cols-popular-games items-stretch gap-[20px]">
      {games.length ? (
        games.map((game) => <GamesListItem key={game.id} {...game} />)
      ) : (
        <p>Games not found.</p>
      )}
    </div>
  );
};
