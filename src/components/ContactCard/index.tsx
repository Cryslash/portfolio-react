import type React from 'react';
import styles from './styles.module.css';
import { Contact } from '../../pages/Contact';
import { AnimatedContent } from '../AnimatedContent';

type Contact = {
  desc: string;
  icon: React.ReactElement;
  info?: string;
  href?: string;
};

type ContactCardProps = {
  data: Contact[];
};

export const ContactCard: React.FC<ContactCardProps> = ({ data }) => {
  return (
    <AnimatedContent className={styles.contentFluid}>
      {data.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          className={styles.contactBox}
          style={{ textDecoration: 'none', color: 'inherit' }}
          target='_blank'
          rel='noopener noreferrer'
        >
          {contact.icon}
          <p className={styles.desc}>{contact.desc}</p>
          {contact.info && <p className={styles.info}>{contact.info}</p>}
        </a>
      ))}
    </AnimatedContent>
  );
};
