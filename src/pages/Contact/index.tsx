import { Container } from '../../components/Container';
import styles from './styles.module.css';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { ContactCard } from '../../components/ContactCard';
import { ContactData } from '../../data/contacts';

export function Contact() {
  return (
    <Container>
      <AnimatedTitle className={styles.title}>Contatos</AnimatedTitle>

      <ContactCard data={ContactData}></ContactCard>
    </Container>
  );
}
