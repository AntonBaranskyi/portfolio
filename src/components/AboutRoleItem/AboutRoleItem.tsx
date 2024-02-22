import React from 'react';

import styles from './AboutRoleItem.module.scss';
import { Role } from '../../types/Role';

type Props = {
  role: Role;
};

export const AboutRoleItem: React.FC<Props> = ({ role }) => {
  return (
    <div className={styles.aboutRoleItem}>
      <div className={styles.aboutRoleInfo}>
        <h3 className={styles.roleInfoTitle}>{role.title}</h3>
        <a className={styles.roleInfoSpan} href={role.link}>
          {role.text}
        </a>
      </div>
      <div className={styles.roleInfoIconWrapper}>
        <img src={role.icon} alt='icon' className={styles.roleInfoIcon} />
      </div>
    </div>
  );
};
