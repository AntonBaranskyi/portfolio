import React from 'react';

import styles from './NavigationSlider.module.scss';

import arrowLeft from '../../assets/icons/arrowLeft.png';
import arrowRight from '../../assets/icons/arrowRight.png';

type Props = {
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  currentSlide: number;
};

export const NavigationSlider: React.FC<Props> = ({
  goToPrevSlide,
  goToNextSlide,
  currentSlide,
}) => {
  return (
    <div className={styles.navigationWrapper}>
      <button
        className={styles.navigationBtn}
        onClick={goToPrevSlide}
        disabled={currentSlide === 0}
      >
        <img src={arrowLeft} alt='left' className='icon' />
      </button>

      <button
        className={styles.navigationBtn}
        onClick={goToNextSlide}
        disabled={currentSlide === 5}
      >
        <img src={arrowRight} alt='right' className='icon' />
      </button>
    </div>
  );
};
