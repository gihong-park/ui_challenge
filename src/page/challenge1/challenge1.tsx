import React from 'react';
import cb from 'classnames/bind';
import styles from './challenge1.module.scss';
import { Sidebar } from 'component';

const cn = cb.bind(styles);

const Challenge1: React.FC = () => {
  return <div className={cn('wrapper')}>
    <Sidebar/>
  </div>
}

export default Challenge1;