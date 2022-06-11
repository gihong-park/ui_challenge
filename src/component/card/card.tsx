import React, { ReactNode } from 'react';
import cb from 'classnames/bind';
import styles from './card.module.scss';

const cn = cb.bind(styles);

interface CardProps {
  title?: ReactNode;
  className?: string;
  children?:ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const {title = "title", className, children} = props;

  return <div className={cn("wrapper", className)}>
    {children}
    <div className={cn("title")}>
      <h1>{title}</h1>
    </div>
  </div>
}

export default Card;