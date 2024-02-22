import styles from './AboutRole.module.scss';
import { AboutRoleItem } from '../AboutRoleItem';
import { Role } from '../../types/Role';

import gaps from '../../assets/icons/gaps.png';
import brackets from '../../assets/icons/brackets.png';

const roleData: Role[] = [
  {
    title: 'Fullstack Developer',
    text: 'Projects',
    link: '#projects',
    icon: gaps,
  },
  {
    title: 'Freelancer',
    text: 'Hire me',
    link: '#contactMe',
    icon: brackets,
  },
];

export const AboutRole = () => {
  return (
    <div className={styles.aboutRoleWrapper}>
      {roleData.map((role) => (
        <AboutRoleItem key={role.title} role={role} />
      ))}
    </div>
  );
};
