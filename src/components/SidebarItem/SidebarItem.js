import "./SidebarItem.css";
import React from "react";
import { NavLink } from "react-router-dom";

export function SidebarItem({ title, path, icon }) {
  return (
    <li>
      <NavLink to={path} activeclassname="active">
        {icon}
        {title}
      </NavLink>
    </li>
  );
}
