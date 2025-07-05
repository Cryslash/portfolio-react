import { AnimatedTitle } from '../../components/AnimatedTitle';
import { Container } from '../../components/Container';
import { Technologies } from '../../components/Technologies';
import { TechData } from '../../data/skills';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';

export function Skills() {
  return (
    <MainTemplate>
      <Container>
        <div className={styles.skills}>
          <AnimatedTitle className={styles.langTitle}>
            Algumas das tecnologias que utilizo
          </AnimatedTitle>
          <Technologies data={TechData} />
        </div>
      </Container>
    </MainTemplate>
  );
}
