import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export const ReleasedGamesListItem = ({
  id,
  cover,
  title,
  rating,
  category,
}) => {
  return (
    <Link
      to={`/games/${id}`}
      className="flex items-center space-x-[10px] rounded-[10px] p-1 shadow-gray dark:bg-[#191B1F] dark:shadow-none"
    >
      <img src={cover} alt="" className="rounded-[10px]" />
      <div className="text-[#22283C]">
        <h4 className="mb-[6px] line-clamp-1">{title}</h4>
        <p className="mb-[8px] text-[12px] font-medium leading-[10px] text-[#9DA1B4]">
          {category}
        </p>
        <p className="flex items-center text-[12px] leading-[14px]">
          <span className="mr-[5px] text-[12px] leading-[14px] dark:text-white">
            {rating}
          </span>
          <StarIcon className="w-4 text-primary" />
          <StarIcon className="w-4 text-primary" />
          <StarIcon className="w-4 text-primary" />
          <StarIcon className="w-4 text-primary" />
          <StarIcon className="w-4 text-primary" />
        </p>
      </div>
    </Link>
  );
};
