import React from "react";
import cb from "classnames/bind";
import styles from "./mainPage.module.scss";
import BallChair from "assets/challenge3/ball_chair.webp";

const cn = cb.bind(styles)

interface MainPageProps {
  setPage: React.Dispatch<React.SetStateAction<number>>

}

const  MainPage: React.FC<MainPageProps> = (props) => {
  return <div className={cn("wrapper")}>
    <div className={cn("present_sentence__container")}>
      <span className={cn("sentence--emphasis")}>Elegant,</span>
      <span className={cn("sentence--emphasis")}>Unique</span>
      <span>Furnitures for you</span>
    </div>
    <div className={cn("image__container")}>
      <img src={BallChair} alt="ball_chair" className={cn("chair-image")}  />
    </div>
    <div className={cn("start__container")}>
      <div className={cn("sentence__container")}>
        <span>Afforadable furniture</span>
        <span>For your dream house</span>
        <span></span>
      </div>
      <button  className={cn("start-btn")} onClick={()=> props.setPage(2)}  >
        Start
      </button>
    </div>
  </div>
}

export default MainPage;