import React, { HTMLAttributes } from "react";
import cb from "classnames/bind";
import styles from "./avatar.module.scss";

const cn = cb.bind(styles);

interface AvatarProps extends HTMLAttributes<HTMLImageElement > {
  alt?: string;
  src?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    className,
    alt="avatar",
    src="https://cdn.pixabay.com/photo/2022/05/15/13/32/fashionable-7198003_1280.jpg",
    style,
    ...rest
  } = props;

  return (
    <img
      className={cn("user__avatar", className)}
      alt={alt}
      src={src}
      style={style}
      {...rest}
    />
  );
};

export default Avatar;
