import React, { createContext, useEffect, useState } from 'react';
import { Project } from '../types/Project';
import { getAllProjects, getSingleProject } from '../api/projectsAPI';

type ContextState = {
  projects: Project[];
  projectsLoading: boolean;
  currentProject: Project | null;
  singleProjectLoading: boolean;
  handleFetchSingleProject: (id: number) => void;
};

export const MainContext = createContext<ContextState>({
  projects: [],
  projectsLoading: false,
  currentProject: null,
  singleProjectLoading: false,
  handleFetchSingleProject: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const MainProvider: React.FC<Props> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const [projectsLoading, setProjectsLoading] = useState(false);
  const [singleProjectLoading, setSingleProjectLoading] = useState(false);

  const handleFetchSingleProject = (id: number) => {
    setSingleProjectLoading(true);
    getSingleProject(id)
      .then((resp) => setCurrentProject(resp[0]))
      .finally(() => {
        setSingleProjectLoading(false);
      });
  };

  const handleFetchProjectsData = () => {
    setProjectsLoading(true);
    getAllProjects()
      .then(setProjects)
      .finally(() => {
        setProjectsLoading(false);
      });
  };

  useEffect(() => {
    handleFetchProjectsData();
  }, []);

  const value = {
    projects,
    projectsLoading,
    currentProject,
    singleProjectLoading,
    handleFetchSingleProject,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
