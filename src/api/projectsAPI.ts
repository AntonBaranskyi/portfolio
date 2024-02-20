import { client } from '../services/fetchClient';
import { Project } from '../types/Project';

export const getAllProjects = () => {
  return client.get<Project[]>('/portfolioData');
};

export const getSingleProject = (id: number) => {
  return client.get<Project[]>(`/portfolioData/?id=${id}`);
};
