import styles from './styles.module.css';

type WorksProps = {
  desc: string;
  cat: string;
  src: string;
};

export const Work: React.FC<WorksProps> = ({ desc, cat, src }) => {
  return (
    <div className={styles.work}>
      <div
        className={styles.workImg}
        style={{ background: `url(${src}) no-repeat`, backgroundSize: 'cover' }}
      ></div>
      <div className={styles.workDesc}>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.cat}>{cat}</p>
      </div>
    </div>
  );
};
