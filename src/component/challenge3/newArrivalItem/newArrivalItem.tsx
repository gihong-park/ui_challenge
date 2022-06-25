import React from "react";
import cb from "classnames/bind";
import styles from "./newArrivalItem.module.scss";
import LeatherChair from "assets/challenge3/leather_chair.png";
import {AiOutlineHeart} from "react-icons/ai";
import { RiShoppingBasketFill } from "react-icons/ri";

const cn = cb.bind(styles)

const  NewArrivalItem: React.FC = () => {
  return <div className={cn("wrapper")}>
    <AiOutlineHeart className={cn("heart")} />
    <img alt="leather_chair" src={LeatherChair} className={cn("leather_chair")} />
    <div className={cn("content__wrapper")}>
      <div className={cn("content__container")}>
        <span>Leather Chair</span>
        <span>$30.00</span>
      </div>
      <div className={cn("basket__container")}>
        <RiShoppingBasketFill color="white" size="1.2rem"/>
      </div>
    </div>
  </div>
}

export default NewArrivalItem;