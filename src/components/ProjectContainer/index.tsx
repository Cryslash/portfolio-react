import styles from './styles.module.css';

type ProjectsProps = {
  desc: string;
  cat: string;
  src: string;
};

export const Project: React.FC<ProjectsProps> = ({ desc, cat, src }) => {
  return (
    <div className={styles.project}>
      <div
        className={styles.projectImg}
        style={{ background: `url(${src}) no-repeat`, backgroundSize: 'cover' }}
      ></div>
      <div className={styles.projectDesc}>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.cat}>{cat}</p>
      </div>
    </div>
  );
};
