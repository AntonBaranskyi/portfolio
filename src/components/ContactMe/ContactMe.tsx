import { ContactForm } from '../ContactForm';
import { ContactSocial } from '../ContactSocial';
import styles from './ContactMe.module.scss';

export const ContactMe = () => {
  return (
    <div className={styles.contactMe} id='contactMe'>
      <div className='container'>
        <h2 className={styles.contactTitle + ' title'}>
          contact me<span>( )</span>
        </h2>

        <div className={styles.contactMeContent}>
          <ContactForm />
          <ContactSocial />
        </div>
      </div>
    </div>
  );
};
