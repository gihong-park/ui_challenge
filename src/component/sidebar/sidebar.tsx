import React, { HTMLAttributes, HtmlHTMLAttributes } from "react";
import cb from "classnames/bind";
import styles from "./sidebar.module.scss";

const cn = cb.bind(styles);

interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
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
  return (
    <div className={cn("wrapper")}>
      <div className={cn("logo__container")}>
        <div className={cn("logo__item")}>#</div>
        <div className={cn("logo__item")}>pure.cure</div>
      </div>

      <div className={cn("nav__container")}>
        <NavItem className={cn("active")} icon={"🩹"} name={"Health guide"} />
        <NavItem icon={"📋"} name={"Dashboard"} />
        <NavItem icon={"💊"} name={"Calendar"} />
        <NavItem icon={"👁"} name={"Consultations"} />
        <NavItem icon={"🍼"} name={"Health tasks"} />
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
