import { Container } from '../../components/Container';
import { Work } from '../../components/Work';
import styles from './styles.module.css';

export function Works() {
  return (
    <Container>
      <div className={styles.works}>
        <h1 className={styles.workTitle}>Alguns dos meus últimos trabalhos</h1>
        <div className={styles.workRow}>
          <Work
            src='./images/works/ecommerce.jpg'
            desc='e-commerce'
            cat='Desenvolvimento FullStack'
          />
          <Work
            src='./images/works/sisos.jpg'
            desc='SisOS'
            cat='Aplicação Desktop'
          />
          <Work
            src='./images/works/pdv.jpg'
            desc='pdv'
            cat='Aplicação Desktop'
          />
        </div>
      </div>
    </Container>
  );
}
