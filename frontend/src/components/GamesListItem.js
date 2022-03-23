import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export const GamesListItem = ({ id, cover, title, rating, category }) => {
  return (
    <Link
      to={`/games/${id}`}
      className="inline-flex h-[250px] flex-col justify-end rounded-[14px] px-[15px] py-[20px] text-white shadow-gray dark:shadow-none"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-white line-clamp-2">{title}</h3>
      <p className="flex items-center">
        <StarIcon className="w-4 text-primary" />
        <span className="ml-[5px] line-clamp-1">
          {rating} / 5 {category}
        </span>
      </p>
    </Link>
  );
};
