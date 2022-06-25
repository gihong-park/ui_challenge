import React, { useState } from "react";
import cb from "classnames/bind";
import styles from "./challenge3.module.scss";
import MainPage from "./mainPage/mainPage";
import HomePage from "./homePage/homePage";

const cn = cb.bind(styles)

const  Challenge3: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  return <div>
    {activePage === 1 && (<MainPage setPage={setActivePage}/>)}
    {activePage === 2 && (<HomePage />)}
  </div>
}

export default Challenge3;