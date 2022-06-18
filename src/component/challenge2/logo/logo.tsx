import React from "react";
import cb from "classnames/bind";
import styles from "./logo.module.scss";

const cn = cb.bind(styles)

const  Logo: React.FC = () => {
  return <div className={cn("wrapper")}>
  </div>
}

export default Logo;