import { MenuAlt2Icon } from "@heroicons/react/outline";

import { TheNav } from "./TheNav";
import { TheFooter } from "./TheFooter";

export const TheLeftSidebar = () => {
  return (
    <aside className="sticky top-0 left-0 hidden h-screen w-[130px] flex-col justify-between bg-white p-[40px] dark:bg-[#191b1f] md:flex">
      <button className="inline-block rounded p-[10px] focus:ring-2 dark:text-gray">
        <MenuAlt2Icon className="h-6 w-6" />
      </button>
      <TheNav />
      <TheFooter />
    </aside>
  );
};
