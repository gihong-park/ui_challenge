import React from 'react';
import cb from 'classnames/bind';
import styles from './challenge2.module.scss';
import Sidebar from 'component/challenge2/sidebar/sidebar';

const cn = cb.bind(styles);

const Challenge2: React.FC = () => {
  return <div className={cn("wrapper")}>
    <Sidebar/>
  </div>
}

export default Challenge2;