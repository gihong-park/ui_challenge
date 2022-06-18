import React, { HTMLAttributes, ReactNode } from "react";
import cb from "classnames/bind";
import styles from "./navItem.module.scss";
import NavItemContainer from "../navItemContainer/navItemContainer";

const cn = cb.bind(styles)

interface NavItemProps extends HTMLAttributes<HTMLDivElement>{
  icon: ReactNode;
  name: string;
}

const  NavItem: React.FC<NavItemProps> = (props) => {
  const {icon, name, ...rest} = props;
  return <NavItemContainer  {...rest}>
    <div className={cn("icon__container")}>{icon}</div>
    <div className={cn("item-name")}>{name}</div>
  </NavItemContainer>
}

export default NavItem;