import styles from './Header.module.scss';
import { HeaderNav } from '../HeaderNav';
import { HeaderSocial } from '../HeaderSocial';
import { useMediaQuery } from 'react-responsive';

import burger from '../../assets/icons/burger.png';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: '1200px' });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isProjectPage = pathname.includes('project');

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.paddingContent}
        data-project={isProjectPage ? 'true' : 'false'}
      >
        <div className={styles.headerContent}>
          <h2 className={styles.logo} onClick={handleNavigate}>
            Anton <span className={styles.logoWhite}>Baranskyi</span>
          </h2>

          {isDesktop ? (
            <>
              {!isProjectPage && <HeaderNav />}
              <HeaderSocial />
            </>
          ) : (
            <img src={burger} alt='burger' className='icon' />
          )}
        </div>
      </div>
    </header>
  );
};
