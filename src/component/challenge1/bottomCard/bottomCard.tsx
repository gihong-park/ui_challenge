import React, { ReactNode } from 'react';
import cb from 'classnames/bind';
import styles from './bottomCard.module.scss';

const cn = cb.bind(styles);

interface BottomCardProps {
  className?: string;
  title?: string;
  value?: ReactNode;
  icon?: ReactNode;
  lastUpdate?: string;
}

const BottomCard:React.FC<BottomCardProps> = (props) => {
  const {title = "STEPS", value="11 357", lastUpdate="3m", icon, className} = props;
  return <div className={cn('wrapper', className)}>
    <h3>{title}</h3>
    <div className={cn("icon__container")}>{icon}</div>
    <div className={cn("value__container")}>
      {value}
    </div>
    <div className={cn("update__container")}>
      <span>Last update: </span>
      <span>{lastUpdate}</span>
    </div>
  </div>
}

export default BottomCard;