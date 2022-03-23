import { ReleasedGamesListItem } from "./ReleasedGamesListItem";

export const ReleasedGamesList = ({ releasedGames }) => {
  return (
    <div className="grid grid-cols-released-games gap-[20px]">
      {releasedGames.length ? (
        releasedGames.map((releasedGame) => (
          <ReleasedGamesListItem key={releasedGame.id} {...releasedGame} />
        ))
      ) : (
        <p>Games not found.</p>
      )}
    </div>
  );
};
