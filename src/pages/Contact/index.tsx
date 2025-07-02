import { Instagram, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Container } from '../../components/Container';
import styles from './styles.module.css';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { AnimatedContent } from '../../components/AnimatedContent';
import { ContactCard } from '../../components/ContactCard';

export function Contact() {
  //TODO: Data Array !!

  return (
    <Container>
      <AnimatedTitle className={styles.title}>Contatos</AnimatedTitle>

      <AnimatedContent className={styles.contentFluid}>
        <ContactCard desc='telefone'>
          <PhoneCall className={styles.icon} />
        </ContactCard>

        <ContactCard
          desc='email'
          info='crystofher_lins@outlook.com'
          href='mailto:crystofher_lins@outlook.com'
        >
          <Mail className={styles.icon} />
        </ContactCard>

        <ContactCard desc='localização' info='Brasil - Ceará'>
          <MapPin className={styles.icon} />
        </ContactCard>

        <ContactCard
          desc='linkedin'
          href='https://www.linkedin.com/in/crystofher-lins-15aa69248'
        >
          <Linkedin className={styles.icon} />
        </ContactCard>

        <ContactCard
          desc='instagram'
          href='https://www.instagram.com/crystofher_lins/'
        >
          <Instagram className={styles.icon} />
        </ContactCard>
      </AnimatedContent>
    </Container>
  );
}
