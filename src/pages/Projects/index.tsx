import { AnimatedContent } from '../../components/AnimatedContent';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { Container } from '../../components/Container';
import { Project } from '../../components/ProjectContainer';
import styles from './styles.module.css';

export function Projects() {
  return (
    <Container>
      <div className={styles.projects}>
        <AnimatedTitle className={styles.projectTitle}>
          Alguns dos meus últimos trabalhos
        </AnimatedTitle>
        <AnimatedContent className={styles.projectRow}>
          <Project
            src='./images/projects/ecommerce.jpg'
            desc='e-commerce'
            cat='Desenvolvimento FullStack'
          />
          <Project
            src='./images/projects/sisos.jpg'
            desc='SisOS'
            cat='Aplicação Desktop'
          />
          <Project
            src='./images/projects/pdv.jpg'
            desc='pdv'
            cat='Aplicação Desktop'
          />
          <Project
            src='./images/projects/wow.png'
            desc='WoW Classic - Guia'
            cat='Web Site'
          />
        </AnimatedContent>
      </div>
    </Container>
  );
}
