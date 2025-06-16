import { XIcon } from 'lucide-react';
import styles from './styles.module.css';
import { ConvertNameToSrc, type TechnologyName } from '../../lib/NameToSrc';

type ProjectDialogProps = {
  title: string;
  desc: string;
  url?: string;
  src: string;
  technologies: TechnologyName[];
  date: string;
  onClose: () => void;
};

export function ProjectDialog({
  title,
  desc,
  src,
  technologies,
  date,
  onClose,
}: ProjectDialogProps) {
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.btnClose} onClick={onClose}>
          <XIcon />
        </button>

        <div className={styles.imgContainer}>
          <img className={styles.img} src={src} />
        </div>

        <div className={styles.summary}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.desc}>{desc}</p>

          <p className={styles.created}>
            <span className={styles.emphasis}>Desenvolvido em:</span> &nbsp;
            {date}
          </p>

          <div className={styles.techContent}>
            <p>Tecnologias:</p>
            <div
              className={`${styles.tech} ${
                technologies.length >= 5 ? styles.spaceAround : ''
              }`}
            >
              {technologies.map((tech, index) => (
                <img
                  key={index}
                  className={styles.imgSmall}
                  src={ConvertNameToSrc(tech)}
                  title={tech}
                  alt={tech}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
