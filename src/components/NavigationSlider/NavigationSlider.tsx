import React from 'react';

import styles from './NavigationSlider.module.scss';

import arrowLeft from '../../assets/icons/arrowLeft.png';
import arrowRight from '../../assets/icons/arrowRight.png';
import { useMediaQuery } from 'react-responsive';

type Props = {
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
};

export const NavigationSlider: React.FC<Props> = ({
  goToPrevSlide,
  goToNextSlide,
}) => {
  return (
    <div className={styles.navigationWrapper}>
      <button className={styles.navigationBtn} onClick={goToPrevSlide}>
        <img src={arrowLeft} alt='left' className='icon' />
      </button>

      <button className={styles.navigationBtn} onClick={goToNextSlide}>
        <img src={arrowRight} alt='right' className='icon' />
      </button>
    </div>
  );
};
