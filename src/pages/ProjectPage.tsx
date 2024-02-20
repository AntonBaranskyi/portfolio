/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MainContext } from '../context/MainContext';
import { Header } from '../components/Header';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';

import { RingLoader } from 'react-spinners';

import styles from './ProjectPage.module.scss';
import { MainSingleProject } from '../components/MainSingleProject';

export const ProjectPage = () => {
  const { handleFetchSingleProject, currentProject, singleProjectLoading } =
    useContext(MainContext);
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      handleFetchSingleProject(+projectId);
    }
  }, [projectId]);

  if (singleProjectLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <RingLoader color='#fff' size={80} />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className='container'>
        {currentProject && (
          <>
            <BreadCrumbs projectName={currentProject?.title} />
            <MainSingleProject singleProject={currentProject} />
          </>
        )}
      </div>
    </div>
  );
};
