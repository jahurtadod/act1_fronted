import "./Navbar.css";
import React from "react";
import * as FaIcons from "react-icons/hi";
import { Link } from "react-router-dom";
import { SidebarItem } from "../SidebarItem/SidebarItem";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.HiHome />,
  },
  {
    title: "Favorite",
    path: "/favorite",
    icon: <FaIcons.HiOutlineHeart />,
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.HiInformationCircle />,
  },
];

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/home" className="menu-bars">
        <h1>ANIME LIST JH</h1>
      </Link>
      <nav>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <SidebarItem
                key={index}
                title={item.title}
                path={item.path}
                icon={item.icon}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export { NavBar };
