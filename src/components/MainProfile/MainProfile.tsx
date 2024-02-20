import styles from './MainProfile.module.scss';
import { ProfileDescr } from '../ProfileDescr';
import { ProfilePhoto } from '../ProfilePhoto';

export const MainProfile = () => {
  return (
    <div className={styles.mainProfile}>
      <div className='container'>
        <div className={styles.mainContent}>
          <ProfileDescr />
          <ProfilePhoto />
        </div>
      </div>
    </div>
  );
};
