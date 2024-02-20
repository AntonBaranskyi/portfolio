import styles from './Projects.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ProjectCard } from '../ProjectCard';

import Slider, { Settings } from 'react-slick';
import { NavigationSlider } from '../NavigationSlider';
import { useSlider } from '../../hooks/useSlider';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

import { RingLoader } from 'react-spinners';

export const Projects = () => {
  const {
    sliderRef,
    goToNextSlide,
    goToPrevSlide,
    onSetCurrentSlide,
    currentSlide,
  } = useSlider();

  const { projects, projectsLoading } = useContext(MainContext);

  const settings: Settings = {
    infinite: true,
    adaptiveHeight: true,
    centerMode: true,
    initialSlide: 1,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, nextSlide) => {
      console.log(nextSlide);

      onSetCurrentSlide(nextSlide);
    },
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          initialSlide: 2,

          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className={styles.projects} id='projects'>
      <div className='container'>
        <div className={styles.projectsHeaderWrapper}>
          <h2 className={styles.projectTitle + ' title'}>
            projects<span>( )</span>
          </h2>

          {!projectsLoading && (
            <NavigationSlider
              goToNextSlide={goToNextSlide}
              goToPrevSlide={goToPrevSlide}
              currentSlide={currentSlide}
            />
          )}
        </div>

        {projectsLoading ? (
          <div className={styles.projectsLoaderWrapper}>
            <RingLoader color='#fff' size={80} />
          </div>
        ) : (
          <Slider {...settings} ref={sliderRef}>
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};
