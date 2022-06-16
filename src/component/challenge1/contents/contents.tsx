import React from "react";
import cb from "classnames/bind";
import styles from "./contents.module.scss";
import { ReactComponent as Search} from "assets/challenge1/search.svg";
import { ReactComponent as Alarm} from "assets/challenge1/alarm.svg";
import { ReactComponent as Arrow} from "assets/challenge1/arrow.svg";
import { ReactComponent as ArrowLeft} from "assets/challenge1/arrow_left.svg";
import { ReactComponent as Stethoscope} from "assets/challenge1/stethoscope.svg";
import Card from "component/challenge1/card/card";
import Daily from "component/challenge1/daily/daily";

const cn = cb.bind(styles);

const SearchBar: React.FC = () => {
  return <div className={cn("form__group", "field")}>
  <Search style={{fontSize: 50, width: 30, height: 30, fill: "rgb(186, 186, 186)", stroke: "rgb(186, 186, 186)", marginRight: 10}}/>
  <input type="input" className={cn("form__field")} placeholder="Name" name="name" id='name' required />
  <label  className={cn("form__label")}>Search</label>
</div>
}

const Header: React.FC = () => {
  return <div className={cn("header__container")}>
    <div className={cn("util__container")}>
      <SearchBar />
      <div className={cn("user__container")}>
        <span>Hello, Kimiko!</span>
        <img className={cn("user__avatar")} alt="avatar" src="https://cdn.pixabay.com/photo/2022/05/15/13/32/fashionable-7198003_1280.jpg"/>
        <div className={cn("alarm__container")}>
          <Alarm style={{width: 30, height: 30}} />
        </div>
      </div>
    </div>
    <div className={cn("header")}>
      <h1>Health guide</h1>
      <div className={cn("arror__container")}>
        <Arrow style={{fill:'none',stroke:'rgb(186 186 186)',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:2, width:36, height: 36, transform: 'rotate(180deg)', marginRight: 40}} />
        <Arrow style={{fill:'none',stroke:'#000000',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:2, width:36, height: 36}} />
      </div>
    </div>
  </div>
}

const Contents : React.FC = () => {
  return <div className={cn("wrapper")}>
    <Header />
    <div className={cn("health__container")}>
      <Card className={cn("card__item_1")} title="Diet & Exercise"/>
      <Card className={cn("card__item_2")} title="Screening & Tests">
        <div className={cn("date_and_arrow__container")}>
          <div className={cn("date__container")}>
            <span>09 / </span>
            <span>15</span>
          </div>
          <div className={cn("arrow__conatiner")}>
            <ArrowLeft style={{fill: 'black', stroke:'black', width:20, height: 20, transform: 'rotate(180deg)'}}/>
          </div>
        </div>
        <div className={cn("loading_bar__container")}>
          <div className={cn("filled")}></div>
          <div className={cn("unfilled")}></div>
        </div>
        <div className={cn("health_list__container")}>
          <h2>Check your health list</h2>
        </div>
        <div className={cn("icon__container")}>
          <Stethoscope style={{ width: 120, height: 120 }}/>
        </div>
      </Card>
      <Card className={cn("card__item_3")} title="Rest & Relax"/>
      <Card className={cn("card__item_1")} title="Diet & Exercise"/>
      <Card className={cn("card__item_2")} title="Screening & Tests">
        <div className={cn("date_and_arrow__container")}>
          <div className={cn("date__container")}>
            <span>09 / </span>
            <span>15</span>
          </div>
          <div className={cn("arrow__conatiner")}>
            <ArrowLeft style={{fill: 'black', stroke:'black', width:20, height: 20, transform: 'rotate(180deg)'}}/>
          </div>
        </div>
        <div className={cn("loading_bar__container")}>
          <div className={cn("filled")}></div>
          <div className={cn("unfilled")}></div>
        </div>
        <div className={cn("health_list__container")}>
          <h2>Check your health list</h2>
        </div>
        <div className={cn("icon__container")}>
          <Stethoscope style={{ width: 120, height: 120 }}/>
        </div>
      </Card>
    </div>
    <Daily/>
  </div>
}

export default Contents;