import styles from './ContactSocial.module.scss';

import telegram from '../../assets/images/telegram.png';
import linkedin from '../../assets/images/linkedin.png';
import gitHub from '../../assets/images/gitHub.png';

const socialData = [
  {
    image: telegram,
    nickname: '@baranskyi_03',
    link: 'https://t.me/baranskyi_03',
  },
  {
    image: linkedin,
    nickname: 'Anton Baranskyi',
    link: 'https://www.linkedin.com/in/anton-baranskyi-407836283/',
  },
  {
    image: gitHub,
    nickname: 'Anton Baranskyi',
    link: 'https://github.com/AntonBaranskyi',
  },
];

export const ContactSocial = () => {
  return (
    <div className={styles.contactSocial}>
      <h3 className={styles.contactSocialTitle}>Or find me in social media</h3>

      <div className={styles.contactSocialWrapper}>
        {socialData.map((social) => (
          <a
            key={social.link}
            className={styles.contactSocialItem}
            href={social.link}
            target='_blank'
          >
            <img
              src={social.image}
              alt='image'
              className={styles.contactSocialImage}
            />
            <p className={styles.contactSocialNickName}>{social.nickname}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
