import React, { HTMLAttributes } from "react";
import cb from "classnames/bind";
import styles from "./navItemContainer.module.scss";

const cn = cb.bind(styles)

interface NavItemcontainerProps extends HTMLAttributes<HTMLDivElement>{}

const  NavItemContainer: React.FC<NavItemcontainerProps> = (props) => {
  const {className, ...rest} = props;
  return <div className={cn("wrapper", className)} {...rest}>

  </div>
}

export default NavItemContainer;