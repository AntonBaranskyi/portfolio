import React from 'react';

import styles from './BreadCrumbs.module.scss';

import homeIcon from '../../assets/icons/home.png';

import arrowWhite from '../../assets/icons/arrowWhite.png';
import { useNavigate } from 'react-router-dom';

type Props = {
  projectName: string;
};

export const BreadCrumbs: React.FC<Props> = ({ projectName }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className={styles.breadCumbsWrapper}>
      <img
        src={homeIcon}
        alt='home'
        className={styles.breadCumbsIcon + ' icon'}
        onClick={handleNavigate}
      />
      <img src={arrowWhite} alt='arrow' className='icon' />
      <p className={styles.breadCumbsText}>{projectName}</p>
    </div>
  );
};
