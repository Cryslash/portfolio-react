import { AnimatedContent } from '../../components/AnimatedContent';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { Container } from '../../components/Container';
import { Project } from '../../components/ProjectContainer';
import { ProjectData } from '../../data/projects';
import styles from './styles.module.css';

export function Projects() {
  return (
    <Container>
      <div className={styles.projects}>
        <AnimatedTitle className={styles.projectTitle}>
          Alguns dos meus últimos trabalhos
        </AnimatedTitle>
        <AnimatedContent className={styles.projectRow}>
          <Project data={ProjectData} />
        </AnimatedContent>
      </div>
    </Container>
  );
}
