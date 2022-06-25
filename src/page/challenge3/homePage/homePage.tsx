import React from "react";
import cb from "classnames/bind";
import styles from "./homePage.module.scss";
import { FiSearch } from "react-icons/fi";
import { CgOptions } from "react-icons/cg";
import { HiArrowNarrowRight } from "react-icons/hi";
import YellowChair from "assets/challenge3/yellow_chair.png";
import CategoryItem from "component/challenge3/categoryItem/categoryItem";
import NewArrivalItem from "component/challenge3/newArrivalItem/newArrivalItem";

const cn = cb.bind(styles);

const HomePage: React.FC = () => {
  return (
    <div className={cn("wrapper")}>
      <header className={cn("header__section")}>
        <h2>Best Furnitures For</h2>
        <h2>Your Home</h2>

        <div className={cn("search__container")}>
          <FiSearch className={cn("search-icon")} size={24} />
          <input
            placeholder="Search Furniture"
            className={cn("search-input")}
          />
          <div className={cn("divider")}></div>
          <div className={cn("option__container")}>
            <CgOptions size={22} className={cn("option")} />
          </div>
        </div>
      </header>
      <div className={cn("hot-deal__section")}>
        <h3>Hot Deals</h3>
        <div className={cn("hot-deal__container")}>
          <div className={cn("sentence__container")}>
            <h3>Best deals on</h3>
            <h3>furniture</h3>
            <div className={cn("shop-now__container")}>
              <span>Shop Now</span>
              <HiArrowNarrowRight className={cn("arrow--right")} />
            </div>
          </div>
          <div className={cn("image__container")}>
            <img alt="yellow-chair" src={YellowChair} className={cn("yellow-chair")} />
          </div>
        </div>
      </div>
      <div className={cn("categories__section")}>
        <CategoryItem active={true} categoryName="Chair"/>
        <CategoryItem categoryName="Sofa"/>
        <CategoryItem categoryName="Lamp"/>
        <CategoryItem categoryName="Table"/>
        <CategoryItem categoryName="Sic"/>
      </div>
      <div className={cn("new-arrivals__section")}>
        <div className={cn("new-arrivals__header")}>
          <h3>New Arrivals</h3>
          <span>View all</span>
        </div>
        <div className={cn("new-arrivals__container")}>
          <NewArrivalItem/>
          <NewArrivalItem/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
