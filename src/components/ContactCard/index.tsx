import type React from 'react';
import styles from './styles.module.css';

type ContactCardProps = {
  desc: string;
  info?: string;
  href?: string;
  children: React.ReactNode;
} & React.ComponentProps<'a'>;

export function ContactCard({ desc, info, href, children }: ContactCardProps) {
  return (
    <a
      href={href}
      className={styles.contactBox}
      style={{ textDecoration: 'none', color: 'inherit' }}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
      <p className={styles.desc}>{desc}</p>
      {info && <p className={styles.info}>{info}</p>}
    </a>
  );
}
