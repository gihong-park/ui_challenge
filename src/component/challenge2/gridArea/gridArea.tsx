import React, { useEffect, useRef } from "react";
import cb from "classnames/bind";
import styles from "./gridArea.module.scss";
import Avatar from "component/common/avatar/avatar";
import {IoIosArrowDown} from "react-icons/io";
import {BiDownload} from "react-icons/bi";

const cn = cb.bind(styles);

const GridArea: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let canvas = canvasRef.current;
    if (canvas?.getContext) {
      let ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#4553CF";
        ctx.beginPath();
        ctx.arc(75, 75, 70, 0, (Math.PI / 180) * 270, false);
        ctx.stroke();
        ctx.strokeStyle = "#151C6E";
        ctx.beginPath();
        ctx.arc(
          75,
          75,
          70,
          (Math.PI / 180) * 280,
          (Math.PI / 180) * 350,
          false
        );
        ctx.stroke();
      }
    }
  }, [canvasRef]);

  return (
    <div className={cn("wrapper")}>
      <div className={cn("projects__container")}>
        <h2>Projects</h2>
        <div className={cn("circle-graph__container")}>
          <canvas ref={canvasRef} width={150} height={150} />
          <h1>85</h1>
        </div>

        <div className={cn("progress-tooltip__container")}>
          <span>Completed</span>
          <span>In Progress</span>
        </div>
      </div>
      <div className={cn("stubs__container")}>
        <div className={cn("circle")}></div>
        <div className={cn("content__container")}>
          <h2>Check Stubs</h2>
          <span>Pay Period</span>
          <div className={cn("pay-period__container")}>
            <h3>Nov 30</h3>
            <h3>Oct 30</h3>
            <h3>Sep 30</h3>
          </div>
          <div className={cn("view-all__container")}>View All</div>
        </div>
        <div className={cn("view-detail__container")}>
          <h1>$6.100</h1>
          <span>View Details</span>
        </div>
      </div>
      <div className={cn("meeting__container")}>
        <h2>Product Meetings</h2>
        <h3>02:00 ~ 03:00 PM</h3>
        <div className={cn("time__container")}>
          <span>15 Min left</span>
        </div>
        <div className={cn("attender__container")}>
          <Avatar className={cn("attender-avatar")} />
          <Avatar className={cn("attender-avatar")} />
        </div>
      </div>
      <div className={cn("documents__container")}>
        <div className={cn("content__container")}>
          <h2>Tax Documents</h2>
          <div className={cn("quarter__container")}>
            <h3>2020 W2</h3>
            <h3>2019 W2</h3>
            <h3>2018 W3</h3>
          </div>
          <div className={cn("view-all__container")}>View All</div>
        </div>

      </div>
      <div className={cn("retirement__container")}>
        <div className={cn("header__section")} >
          <h2>Retirement</h2>
          <div className={cn("option__container")}>
            <span>Sort by</span>
            <div className={cn("range-option")}>
              <span>Month</span>
              <IoIosArrowDown style={{fontWeight:700}} />
            </div>
            <div className={cn("download__container")}>
              <BiDownload style={{width: "1.5em", height: "1.5em", color: "#2230c5"}} />
            </div>
          </div>
        </div>
      </div>
      <div className={cn("calender__container")}></div>
    </div>
  );
};

export default GridArea;
