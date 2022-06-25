import React from "react";
import cb from "classnames/bind";
import styles from "./header.module.scss";
import Avatar from "component/common/avatar/avatar";
import { IoSettingsOutline} from "react-icons/io5";

const cn = cb.bind(styles)

const  Header: React.FC = () => {
  return <div className={cn("wrapper")}>
    <h1>Dashboard</h1>
    <div className={cn("user-content__container")}>
      <Avatar className={cn("user__avatar")}/>
      <span>David Mills</span>
      <div className={cn("setting__container")}>
        <IoSettingsOutline color={"#fff"}/>
      </div>
    </div>
  </div>
}

export default Header;