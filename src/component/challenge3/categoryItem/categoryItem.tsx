import React from "react";
import cb from "classnames/bind";
import styles from "./categoryItem.module.scss";
import BallChair from "assets/challenge3/ball_chair.webp";

const cn = cb.bind(styles)

interface CategoryItemProps {
  active?: boolean;
  categoryName: string;
}

const  CategoryItem: React.FC<CategoryItemProps> = (props) => {
  const {active = false, categoryName} = props;
  return <div className={cn("wrapper")}>
    <div className={cn("image__container", active ? "active": "")}>
      <img alt="ball_chair" src={BallChair} className={cn("ball_chair")} />
    </div>
    <span className={cn( active ? "active":"")}>{categoryName}</span>
  </div>
}

export default CategoryItem;