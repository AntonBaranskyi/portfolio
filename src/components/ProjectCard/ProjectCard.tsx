import React from 'react';

import styles from './ProjectCard.module.scss';
import { Project } from '../../types/Project';

import photoMore from '../../assets/icons/more.png';
import { useNavigate } from 'react-router-dom';

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className={styles.projectCard} onClick={handleNavigate}>
      <img src={photoMore} alt='photoMore' className={styles.photoMore} />
      <img src={project.image} alt='test' className={styles.projectPhoto} />

      <div className={styles.extraInfoWrapper}>
        <h4 className={styles.extraInfoTitle}>{project.title}</h4>
      </div>
    </div>
  );
};
