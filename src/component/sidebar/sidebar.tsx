import React, { HTMLAttributes, ReactNode } from "react";
import cb from "classnames/bind";
import styles from "./sidebar.module.scss";
import { ReactComponent as Bandage } from "assets/bandage.svg";
import { ReactComponent as Monitoring } from "assets/monitoring.svg";
import { ReactComponent as Pills} from "assets/pills.svg";
import { ReactComponent as Eye} from "assets/eye.svg";
import { ReactComponent as Bottle} from "assets/bottle.svg";

const cn = cb.bind(styles);

interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  name: string;
}

interface ProfileItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: number;
  unit: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <div className={cn("nav__item__container")}>
      <div className={cn("nav__item")}>{props.icon}</div>
      <div className={cn("nav__item", props.className)}>{props.name}</div>
    </div>
  );
};

const ProfileItem: React.FC<ProfileItemProps> = (props) => {
  return (
    <div className={cn("profile__item__container")}>
      <div className={cn("profile__item")}>{props.label}</div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <div className={cn("profile__item", "value")}>{props.value}</div>
        <div className={cn("profile__item")}>{props.unit}</div>
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const grey = "rgb(186 186 186)"
  return (
    <div className={cn("wrapper")}>
      <div className={cn("logo__container")}>
        <div className={cn("logo__item")}>#</div>
        <div className={cn("logo__item")}>pure.cure</div>
      </div>

      <div className={cn("nav__container")}>
        <NavItem className={cn("active")} icon={<Bandage fill={"black"} style={{height: 25, width: 25}} />} name={"Health guide"} />
        <NavItem icon={<Monitoring fill={grey} style={{height: 25, width: 25}} />} name={"Dashboard"} />
        <NavItem icon={<Pills fill={grey} style={{height: 25, width: 25}} />} name={"Calendar"} />
        <NavItem icon={<Eye fill={grey} style={{height: 25, width: 25, stroke: "rgb(186, 186, 186)"}} />} name={"Consultations"} />
        <NavItem icon={<Bottle fill={grey} style={{height: 25, width: 25, stroke: "rgb(186, 186, 186)"}} />} name={"Health tasks"} />
      </div>

      <div className={cn("profile__container")}>
        <ProfileItem label="AGE" value={23} unit="yo" />
        <ProfileItem label="WEIGHT" value={55} unit="kg" />
        <ProfileItem label="HEIGHT" value={167} unit="cm" />
      </div>
    </div>
  );
};

export default Sidebar;
