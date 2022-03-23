import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";

import { Layout } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "../store/actions/game";

export const GamesDetail = () => {
  let { gameId } = useParams();

  const game = useSelector((state) => state.games.game);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(gameId));
  }, [dispatch, gameId]);

  return (
    <Layout>
      <main className="flex min-h-screen flex-1 flex-col justify-between">
        <div
          className="mb-[30px] h-[400px] w-full rounded-[14px] px-[30px] py-[60px] shadow-gray dark:shadow-none"
          style={{
            backgroundImage: `url(${game.cover_big})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="max-w-[768px]">
          <div className="mb-[12px] flex flex-col space-y-[8px]">
            <h1 className="text-white">{game.title}</h1>
            <div className="flex items-center space-x-[5px] font-medium">
              <p className="text-[18px] text-white">{game.category_name}</p>
              <p className="flex items-center text-white">
                <StarIcon className="w-4 text-primary" />
                <StarIcon className="w-4 text-primary" />
                <StarIcon className="w-4 text-primary" />
                <StarIcon className="w-4 text-primary" />
                <StarIcon className="w-4 text-primary" />
                <span className="ml-[5px]">5</span>
              </p>
            </div>
          </div>
          <p className="mb-[30px] font-normal text-[#9DA1B4]">
            {game.description}
          </p>
          <a
            href="/"
            className="inline-block rounded-[8px] bg-primary px-[30px] py-[15px] text-center text-[17px] font-medium leading-[15px] text-white shadow-gray dark:shadow-none"
          >
            Download Now
          </a>
        </div>
      </main>
    </Layout>
  );
};
