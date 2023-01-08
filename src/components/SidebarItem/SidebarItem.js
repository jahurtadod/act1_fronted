import "./SidebarItem.css";
import React from "react";
import { NavLink } from "react-router-dom";

export function SidebarItem({ title, path, icon }) {
  return (
    <li className="nav-text">
      <NavLink to={path} activeclassname="nav-item-active">
        {icon}
        {title}
      </NavLink>
    </li>
  );
}
