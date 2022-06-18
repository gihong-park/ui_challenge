import React from "react";
import cb from "classnames/bind";
import styles from "./sidebar.module.scss";
import Logo from "../logo/logo";
import Search from "../search/search";
import NavItem from "../navItem/navItem";
import { RiDashboardLine, RiUser3Line, RiWallet3Line } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { BiChart } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

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
          <NavItem
            icon={<RiDashboardLine className={cn("icon")} size="2em" />}
            name="Dashboard"
            className={cn("active")}
          />
          <NavItem
            icon={<RiUser3Line className={cn("icon")} size="2em" />}
            name="My Profile"
          />
          <NavItem
            icon={<RiWallet3Line className={cn("icon")} size="2em" />}
            name="My Pay"
          />
          <NavItem
            icon={<TiDocumentText className={cn("icon")} size="2em" />}
            name="My Documents"
          />
          <NavItem
            icon={<BiChart className={cn("icon")} size="2em" />}
            name="My Retirement"
          />
        </div>
      </div>
      <div className={cn("divider__container")}>
        <div className={cn("divider")} />
        <div className={cn("divider--vertical__bar")} />
      </div>
      <div className={cn("center__container")}>
        <NavItem
          icon={<FiHelpCircle className={cn("icon")} size="2em" />}
          name="Help Center"
        />
        <NavItem
          icon={<IoIosNotificationsOutline className={cn("icon")} size="2em" />}
          name="Notifications"
        />
      </div>
    </div>
  );
};

export default Sidebar;
