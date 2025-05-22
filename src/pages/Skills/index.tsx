import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';

export function Skills() {
  return (
    <MainTemplate>
      <Container>
        <div className={styles.skills}> Skills</div>
      </Container>
    </MainTemplate>
  );
}
