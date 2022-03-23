import {
  HomeIcon,
  ChatIcon,
  StarIcon,
  CogIcon,
  ViewGridAddIcon,
} from "@heroicons/react/outline";

import { TheNavItem } from "./TheNavItem";

const navItems = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    link: "/",
  },
  {
    icon: <ViewGridAddIcon className="h-6 w-6" />,
    link: "games",
  },
  {
    icon: <ChatIcon className="h-6 w-6" />,
    link: "chat",
  },
  {
    icon: <StarIcon className="h-6 w-6" />,
    link: "favorites",
  },
  {
    icon: <CogIcon className="h-6 w-6" />,
    link: "settings",
  },
];

export const TheNav = () => {
  return (
    <nav className="flex flex-col space-y-[30px]">
      {navItems.map((navItem, index) => (
        <TheNavItem key={index} {...navItem} />
      ))}
    </nav>
  );
};
