import React, { createContext, useEffect, useState } from 'react';
import { Project } from '../types/Project';
import { getAllProjects, getSingleProject } from '../api/projectsAPI';

type ContextState = {
  projects: Project[];
  projectsLoading: boolean;
  currentProject: Project | null;
  singleProjectLoading: boolean;
  handleFetchSingleProject: (id: number) => void;
  handleBurgerToggle: () => void;
  isBurgerOpen: boolean;
};

export const MainContext = createContext<ContextState>({
  projects: [],
  projectsLoading: false,
  currentProject: null,
  singleProjectLoading: false,
  handleFetchSingleProject: () => {},
  handleBurgerToggle: () => {},
  isBurgerOpen: false,
});

type Props = {
  children: React.ReactNode;
};

export const MainProvider: React.FC<Props> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

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

  const handleBurgerToggle = () => {
    setIsBurgerOpen((prev) => !prev);
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
    isBurgerOpen,
    handleBurgerToggle,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
