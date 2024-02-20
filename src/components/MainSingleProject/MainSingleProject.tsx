import React from 'react';

import styles from './MainSingleProject.module.scss';
import { Project } from '../../types/Project';

type Props = {
  singleProject: Project;
};

export const MainSingleProject: React.FC<Props> = ({ singleProject }) => {
  return (
    <div className={styles.mainSingleProject}>
      <div className={styles.mainSingleContent}>
        <div className={styles.singlePosterWrapper}>
          <img
            src={singleProject.image}
            alt='poster'
            className={styles.singlePoster}
          />
        </div>

        <div className={styles.mainSingleDesc}>
          <div className=''>
            <h4 className={styles.mainSingleDescTitle}>Title of Project:</h4>
            <p className={styles.mainSingleDescValue}>{singleProject.title}</p>
          </div>

          <div className='div'>
            <h4 className={styles.mainSingleDescTitle}>Role:</h4>
            <p className={styles.mainSingleDescValue}>{singleProject.role}</p>
          </div>

          <div className=''>
            <h4 className={styles.mainSingleDescTitle}>Stack:</h4>
            <div className={styles.mainSingleDescStackWrapper}>
              {singleProject.stack.map((skill) => (
                <div key={skill} className={styles.skillWrapper}>
                  <img
                    src={`/src/assets/images/skills/${skill.toLowerCase()}.png`}
                    alt={skill}
                    className='icon-lg'
                  />
                  <p className={styles.skillText}>{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=''>
            <a
              className={styles.mainSingleDescTitle}
              href={singleProject.url}
              target='_blank'
            >
              Demo
            </a>
          </div>
        </div>

        <div className={styles.mainSingleProjectDetails}>
          <p className={styles.singleProjectDetailText}>
            {singleProject.description}
          </p>
        </div>
      </div>
    </div>
  );
};
