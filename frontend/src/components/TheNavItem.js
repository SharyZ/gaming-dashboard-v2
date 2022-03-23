import { NavLink } from "react-router-dom";

export const TheNavItem = ({ icon, link }) => {
  return (
    <NavLink className="nav-item" to={link}>
      {icon}
    </NavLink>
  );
};
