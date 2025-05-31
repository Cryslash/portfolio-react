import { Instagram, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Container } from '../../components/Container';
import styles from './styles.module.css';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { AnimatedContent } from '../../components/AnimatedContent';

export function Contact() {
  return (
    <Container>
      <AnimatedTitle className={styles.title}>Contatos</AnimatedTitle>

      <AnimatedContent className={styles.contentFluid}>
        <a className={styles.contactBox}>
          <PhoneCall className={styles.icon} />
          <p className={styles.desc}>telefone</p>
        </a>

        <a
          className={styles.contactBox}
          href='mailto:crystofher_lins@outlook.com'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Mail className={styles.icon} />
          <p className={styles.desc}>email</p>
          <p className={styles.info}>crystofher_lins@outlook.com</p>
        </a>

        <a className={styles.contactBox}>
          <MapPin className={styles.icon} />
          <p className={styles.desc}>localização</p>
          <p className={styles.info}>Brasil - Ceará</p>
        </a>

        <a
          className={styles.contactBox}
          href='https://www.linkedin.com/in/crystofher-lins-15aa69248'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Linkedin className={styles.icon} />
          <p className={styles.desc}>linkedin</p>
        </a>

        <a
          className={styles.contactBox}
          href='https://www.instagram.com/crystofher_lins/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Instagram className={styles.icon} />
          <p className={styles.desc}>instagram</p>
        </a>
      </AnimatedContent>
    </Container>
  );
}
