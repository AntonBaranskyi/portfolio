import { useRef, useState } from 'react';
import Slider from 'react-slick';

export const useSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

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
