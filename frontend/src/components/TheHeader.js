import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { TheHeaderList } from "./TheHeaderList";

const HEADER_LIST_ITEM_CLASSES =
  "text-[17px] font-medium leading-[22px] text-[#a0a8b1] dark:text-white duration-300 hover:text-primary";

const headerListItems = [
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Game",
  },
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Live Score",
  },
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Statistics",
  },
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Analytics",
  },
  {
    classes: HEADER_LIST_ITEM_CLASSES,
    label: "Forecasts",
  },
];

export const TheHeader = () => {
  const { username } = useSelector((state) => state.login.user);

  return (
    <header className="hidden pb-[25px] md:flex md:items-center md:justify-between">
      <TheHeaderList listItems={headerListItems} />
      <div className="flex items-center justify-between">
        <Link to="/" className="inline-flex items-center space-x-[14px]">
          <img
            src="https://fakeimg.pl/40/162440?font=bebas"
            alt=""
            className="rounded-full"
          />
          <h4>{username}</h4>
        </Link>
      </div>
    </header>
  );
};
