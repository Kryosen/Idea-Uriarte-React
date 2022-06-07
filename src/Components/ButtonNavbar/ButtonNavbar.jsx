import React from "react";
import { NavLink } from "react-router-dom";

//Function that creates the buttons with the parameters provided in the NavBar
export default function ButtonNavbar({
  toLocation,
  categoryIdParams,
  buttonCategory,
  buttonName,
}) {
  return (
    <li className="navBarItem">
      <NavLink to={toLocation} className="navBarLink">
        <button
          className={
            categoryIdParams === buttonCategory
              ? "activeNav custom-btnNav btnCustom"
              : "custom-btnNav btnCustom"
          }
        >
          {buttonName}
        </button>
      </NavLink>
    </li>
  );
}
