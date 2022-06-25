import React from "react";
import cb from "classnames/bind";
import styles from "./content.module.scss";
import Header from "../header/header";
import GridArea from "../gridArea/gridArea";

const cn = cb.bind(styles)

const  Content: React.FC = () => {
  return <div className={cn("wrapper")}>
    <Header/>
    <GridArea />
  </div>
}

export default Content;