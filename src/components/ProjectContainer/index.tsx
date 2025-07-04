import { useState } from 'react';
import styles from './styles.module.css';
import { ProjectDialog } from '../ProjectDialog';
import type { TechnologyName } from '../../lib/NameToSrc';

type Projects = {
  title: string;
  cat: string;
  src: string;
  desc: string;
  url: string;
  technologies: TechnologyName[];
  date: string;
};

type ProjectsProps = {
  data: Projects[];
};

export const Project: React.FC<ProjectsProps> = ({ data }) => {
  const [activeProject, setActiveProject] = useState<Projects | null>(null);

  function handleClick(project: Projects) {
    setActiveProject(project);
  }

  return (
    <>
      {data.map((project, index) => (
        <div
          key={'div-' + index}
          onClick={() => handleClick(project)}
          className={styles.project}
        >
          <div
            className={styles.projectImg}
            style={{
              background: `url(${project.src}) no-repeat`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className={styles.projectTitle}>
            <p className={styles.desc}>{project.title}</p>
            <p className={styles.cat}>{project.cat}</p>
          </div>
        </div>
      ))}
      {activeProject && (
        <ProjectDialog
          title={activeProject.title}
          desc={activeProject.desc}
          url={activeProject.url}
          src={activeProject.src}
          technologies={activeProject.technologies}
          date={activeProject.date}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};
