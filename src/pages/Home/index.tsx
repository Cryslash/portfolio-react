import { Github, Instagram, Linkedin, Twitter, X } from 'lucide-react';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';

export function Home() {
  const XIcon = () => (
    <svg
      className='w-5 h-5'
      viewBox='0 0 36 24'
      fill='currentColor'
      // fill='none'
      stroke='currentColor'
      strokeWidth='1.3'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g transform='scale(0.53) translate(9, -3)'>
        <path d='M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z' />
      </g>
    </svg>
  );

  return (
    <MainTemplate>
      <section className={styles.home}>
        <div className={styles.homeImg}>
          <img src='/images/crys.png' alt='' />
        </div>
        <div className={styles.homeContent}>
          <h1>
            Olá, Eu sou o <span>Crys</span>
          </h1>
          <h3 className={styles.typingText}>
            Eu sou um <span></span>
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            labore dolores esse. Odit similique doloribus tenetur doloremque,
            sunt commodi in ipsa repudiandae debitis deleniti blanditiis
            quibusdam quaerat neque asperiores ea.
          </p>
          <div className={styles.socialIcons}>
            <a href='#'>
              <Linkedin />
            </a>
            <a href='#'>
              <Github />
            </a>
            <a href='#'>
              <XIcon />
            </a>
            <a href='#'>
              <Instagram />
            </a>
          </div>
          <a href='#' className={styles.btn}>
            Contrate-me
          </a>
        </div>
      </section>
    </MainTemplate>
  );
}
