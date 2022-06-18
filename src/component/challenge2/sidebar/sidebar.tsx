import React from "react";
import cb from "classnames/bind";
import styles from "./sidebar.module.scss";
import Logo from "../logo/logo";
import Search from "../search/search";
import NavItem from "../navItem/navItem";
import {RiDashboardLine} from "react-icons/ri"

const cn = cb.bind(styles);

const Sidebar: React.FC = () => {
  return (
    <div className={cn("wrapper")}>
      <div className={cn("my-content-nav__container")}>
        <div className={cn("logo__container")}>
          <Logo />
        </div>
        <div className={cn("search__container")}>
          <Search />
        </div>
        <div className={cn("nav-item__container")}>
          <NavItem icon={<RiDashboardLine className={cn("icon")} size="2em"/>} name="Dashboard"/>
          <NavItem icon={<RiDashboardLine className={cn("icon")} size="2em"/>} name="My Profile"/>
          <NavItem icon={<RiDashboardLine className={cn("icon")} size="2em"/>} name="My Pay"/>
          <NavItem icon={<RiDashboardLine className={cn("icon")} size="2em"/>} name="My Documents"/>
          <NavItem icon={<RiDashboardLine className={cn("icon")} size="2em"/>} name="My Retirement"/>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
