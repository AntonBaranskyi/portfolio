import styles from './HeaderSocial.module.scss';

import linkedin from '../../assets/icons/linkedin.png';
import gitHub from '../../assets/icons/git.png';
import message from '../../assets/icons/message.png';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const socialData = [
  {
    icon: linkedin,
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/anton-baranskyi-407836283',
  },
  {
    icon: gitHub,
    title: 'GitHub',
    href: 'https://github.com/AntonBaranskyi',
  },
  {
    icon: message,
    title: 'Contact me',
    href: 'https://github.com/AntonBaranskyi',
  },
];

export const HeaderSocial = () => {
  const { isBurgerOpen } = useContext(MainContext);

  return (
    <div
      className={styles.headerSocial}
      data-isOpen={isBurgerOpen ? 'true' : 'false'}
    >
      {socialData.map((social) =>
        social.title !== 'Contact me' ? (
          <a
            key={social.title}
            className={styles.socialItemRegular}
            href={social.href}
            target='_blank'
          >
            <img src={social.icon} alt={social.title} />
            <h4>{social.title}</h4>
          </a>
        ) : (
          <a
            key={social.title}
            className={styles.socialButton}
            href='#contactMe'
          >
            <img
              src={social.icon}
              alt={social.title}
              className={styles.socialIcon}
            />
            <h5>{social.title}</h5>
          </a>
        )
      )}
    </div>
  );
};
