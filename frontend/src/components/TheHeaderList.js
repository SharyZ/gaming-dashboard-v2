import { TheHeaderListItem } from "./TheHeaderListItem";

export const TheHeaderList = ({ listItems }) => {
  return (
    <ul className="flex items-center space-x-[38px]">
      {listItems.map((listItem, index) => (
        <TheHeaderListItem key={index} {...listItem} />
      ))}
    </ul>
  );
};
