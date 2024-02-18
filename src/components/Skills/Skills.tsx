import styles from './Skills.module.scss';

import js from '../../assets/images/skills/js.png';
import ts from '../../assets/images/skills/ts.png';
import html from '../../assets/images/skills/html.png';
import css from '../../assets/images/skills/css.png';
import sass from '../../assets/images/skills/sass.png';
import tailwind from '../../assets/images/skills/tailwind.png';
import react from '../../assets/images/skills/react.png';
import vue from '../../assets/images/skills/vue.png';
import vuex from '../../assets/images/skills/vuex.png';

import redux from '../../assets/images/skills/redux.png';
import node from '../../assets/images/skills/node.png';

import mongo from '../../assets/images/skills/mongo.png';

const skillsData = [
  { source: js, alt: 'JavaScript' },
  { source: ts, alt: 'TypeScript' },
  { source: html, alt: 'HTML' },
  { source: css, alt: 'CSS' },
  { source: sass, alt: 'SASS' },
  { source: tailwind, alt: 'Tailwind' },
  { source: react, alt: 'React' },
  { source: vue, alt: 'Vue.js' },
  { source: vuex, alt: 'Vuex' },
  { source: redux, alt: 'Redux' },
  { source: node, alt: 'Node.js' },
  { source: mongo, alt: 'MongoDB' },
];

export const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className='container'>
        <h2 className={styles.skillsTitle + ' title'}>
          skills<span>( )</span>
        </h2>

        <div className={styles.skillsListWrapper}>
          {skillsData.map((skill) => (
            <div className={styles.skillItem} key={skill.alt}>
              <img
                src={skill.source}
                alt={skill.alt}
                className={styles.skillPhoto}
              />
               <p className={styles.skillText}>{skill.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
