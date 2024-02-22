import styles from './AboutText.module.scss';

export const AboutText = () => {
  return (
    <div className={styles.aboutText}>
      <h2 className={styles.aboutTitle + ' title'}>
        aboutMe<span>( )</span>
      </h2>
      <p className={styles.aboutText}>
        I am a dedicated FullStack developer with one year of practical
        experience, strong computer science foundations, and expertise in
        HTML/CSS, JavaScript, Vue, and TypeScript, with a focus on React +
        TypeScript. I am adaptable and open to learning new technologies. With
        an upper-intermediate level of English, I can seamlessly collaborate
        with English-speaking teams. In addition to my technical skills, I have
        a well-rounded background, including participation in mathematics and
        English competitions that highlight my problem-solving and communication
        abilities.
      </p>
    </div>
  );
};
