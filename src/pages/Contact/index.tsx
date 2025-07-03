import { Instagram, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Container } from '../../components/Container';
import styles from './styles.module.css';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { ContactCard } from '../../components/ContactCard';

export function Contact() {
  const contactData = [
    {
      desc: 'telefone',
      icon: <PhoneCall className={styles.icon} />,
    },
    {
      desc: 'email',
      info: 'crystofher_lins@outlook.com',
      href: 'mailto:crystofher_lins@outlook.com',
      icon: <Mail className={styles.icon} />,
    },
    {
      desc: 'localização',
      info: 'Brasil - Ceará',
      icon: <MapPin className={styles.icon} />,
    },
    {
      desc: 'linkedin',
      href: 'https://www.linkedin.com/in/crystofher-lins-15aa69248',
      icon: <Linkedin className={styles.icon} />,
    },
    {
      desc: 'instagram',
      href: 'https://www.instagram.com/crystofher_lins/',
      icon: <Instagram className={styles.icon} />,
    },
  ];

  return (
    <Container>
      <AnimatedTitle className={styles.title}>Contatos</AnimatedTitle>

      <ContactCard data={contactData}></ContactCard>
    </Container>
  );
}
