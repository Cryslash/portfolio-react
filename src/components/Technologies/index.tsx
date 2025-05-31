import { AnimatedContent } from '../AnimatedContent';
import styles from './styles.module.css';

type Technology = {
  src: string;
  title: string;
  alt: string;
};

type TechnologyProps = {
  data: Technology[];
};

export const Technology: React.FC<TechnologyProps> = ({ data }) => {
  return (
    <AnimatedContent className={styles.gridResponsive}>
      {data.map((tech, techIndex) => (
        <img
          key={techIndex}
          src={tech.src}
          alt={tech.alt}
          title={tech.title}
          className={styles.langLogo}
        />
      ))}
    </AnimatedContent>
  );
};
