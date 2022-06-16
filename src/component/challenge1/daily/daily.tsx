import React from "react";
import cb from "classnames/bind";
import styles from "./daily.module.scss";
import BottomCard from "component/challenge1/bottomCard/bottomCard";
import { ReactComponent as FootStep } from "assets/challenge1/footstep.svg";
import { ReactComponent as Heart } from "assets/challenge1/heart.svg";
import { ReactComponent as Gauge } from "assets/challenge1/gauge.svg";
import { ReactComponent as Moon } from "assets/challenge1/moon.svg";

const cn = cb.bind(styles);

const Daily: React.FC = () => {
  return (
    <div className={cn("wrapper")}>
      <div className={cn("tooltip__container")}>
        <h1>Daily activity</h1>
        <span>
          Your health plan is also about tapping into resources that can help
          you achieve your health goals.
        </span>
      </div>
      <BottomCard
        className={cn("card__container", "default")}
        lastUpdate="3m"
        title="STEPS"
        icon={
          <FootStep
            style={{
              width: 58,
              strokeWidth: 3,
              fill: "linear-gradient(217deg, #fbc2eb 0%, #a6c1ee 100%)",
            }}
          />
        }
        value={<h1>11 357</h1>}
      />
      <BottomCard
        className={cn("card__container", "default")}
        lastUpdate="4h"
        title="HEART RATE"
        icon={
          <Heart
            style={{
              width: 58,
              fill: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
            }}
          />
        }
        value={
          <>
            <h1>91</h1>
            <span>bpm</span>
          </>
        }
      />
      <div className={cn('card--dark__container', 'card__container')}>
        <BottomCard
          className={cn("card__container", "dark", "absolute")}
          lastUpdate="5h"
          icon={<Moon style={{height: 52, width: 52, fill: '#fff'}}/>}
          title="SLEEP"
          value={
            <>
            <h1>7</h1>
            <span>h</span>
            <h1>47</h1>
            <span>m</span>
            </>

          }
        />
      </div>
      <BottomCard
        className={cn("card__container", "default")}
        lastUpdate="1d"
        title="WEIGHT"
        icon={<Gauge />}
        value={
          <>
            <h1>56</h1>
            <span>kg</span>
          </>
        }
      />
      <BottomCard
        className={cn("card__container", "default")}
        lastUpdate="3m"
        title="STEPS"
        icon={
          <FootStep
            style={{
              width: 58,
              strokeWidth: 3,
              fill: "linear-gradient(217deg, #fbc2eb 0%, #a6c1ee 100%)",
            }}
          />
        }
        value={<h1>11 357</h1>}
      />
      <BottomCard
        className={cn("card__container", "default")}
        lastUpdate="4h"
        title="HEART RATE"
        icon={
          <Heart
            style={{
              width: 58,
              fill: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
            }}
          />
        }
        value={
          <>
            <h1>91</h1>
            <span>bpm</span>
          </>
        }
      />
      <div className={cn('card--dark__container', 'card__container')}>
        <BottomCard
          className={cn("card__container", "dark", "absolute")}
          lastUpdate="5h"
          icon={<Moon style={{height: 52, width: 52, fill: '#fff'}}/>}
          title="SLEEP"
          value={
            <>
            <h1>7</h1>
            <span>h</span>
            <h1>47</h1>
            <span>m</span>
            </>

          }
        />
      </div>
      <BottomCard
        className={cn("card__container", "default")}
        lastUpdate="1d"
        title="WEIGHT"
        icon={<Gauge />}
        value={
          <>
            <h1>56</h1>
            <span>kg</span>
          </>
        }
      />
    </div>
  );
};

export default Daily;
