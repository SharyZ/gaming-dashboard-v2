import { Link } from "react-router-dom";

export const TheHeaderListItem = ({ classes, label }) => {
  return (
    <li>
      <Link className={classes} to="/">
        {label}
      </Link>
    </li>
  );
};
