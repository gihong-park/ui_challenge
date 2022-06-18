import React from "react";
import cb from "classnames/bind";
import styles from "./search.module.scss";
import { FiSearch } from "react-icons/fi";
import NavItemContainer from "../navItemContainer/navItemContainer";

const cn = cb.bind(styles);

const Search: React.FC = () => {
  return (
    <NavItemContainer className={cn("wrapper")}>
      <div className={cn("icon__container")}>
        <FiSearch className={cn("icon")} />
      </div>
      <input className={cn("input__container")} placeholder="Search"></input>
    </NavItemContainer>
  );
};

export default Search;
