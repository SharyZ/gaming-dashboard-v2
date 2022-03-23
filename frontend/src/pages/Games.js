import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesList, Layout, Section } from "../components";
import { getGames } from "../store/actions/game";

export const Games = () => {
  const games = useSelector((state) => state.games.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <Layout>
      <Section title="Games">
        <GamesList games={games} />
      </Section>
    </Layout>
  );
};
