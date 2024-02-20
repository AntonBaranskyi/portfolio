import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';

export const useSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const isDesktop = useMediaQuery({ minWidth: '1200px' });

  const [currentSlide, setCurrentSlide] = useState(isDesktop ? 1 : 0);

  const goToPrevSlide = () => {
    sliderRef?.current?.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  const onSetCurrentSlide = (slide: number) => {
    setCurrentSlide(slide);
  };

  return {
    sliderRef,
    goToNextSlide,
    goToPrevSlide,
    onSetCurrentSlide,
    currentSlide,
  };
};
