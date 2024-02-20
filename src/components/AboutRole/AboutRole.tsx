import styles from './AboutRole.module.scss';
import { AboutRoleItem } from '../AboutRoleItem';
import { Role } from '../../types/Role';

import gaps from '../../assets/icons/gaps.png';
import brackets from '../../assets/icons/brackets.png';

const roleData: Role[] = [
  { title: 'Fullstack Developer', link: 'Projects', icon: gaps },
  { title: 'Freelancer', link: 'Hire me', icon: brackets },
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
