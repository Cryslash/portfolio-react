import { useState } from 'react';
import styles from './styles.module.css';
import { ProjectDialog } from '../ProjectDialog';

type ProjectsProps = {
  title: string;
  cat: string;
  src: string;
  desc: string;
  url: string;
  technologies: string[];
  date: string;
};

export const Project: React.FC<ProjectsProps> = ({
  title,
  cat,
  src,
  desc,
  url,
  technologies,
  date,
}) => {
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }

  return (
    <>
      <div onClick={handleClick} className={styles.project}>
        <div
          className={styles.projectImg}
          style={{
            background: `url(${src}) no-repeat`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div className={styles.projectTitle}>
          <p className={styles.title}>{title}</p>
          <p className={styles.cat}>{cat}</p>
        </div>
      </div>
      {showDialog && (
        <ProjectDialog
          title={title}
          desc={desc}
          url={url}
          src={src}
          technologies={technologies}
          date={date}
          onClose={() => setShowDialog(false)}
        />
      )}
    </>
  );
};
