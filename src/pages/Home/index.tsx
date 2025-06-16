import { Github, Instagram, Linkedin } from 'lucide-react';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
import { TypingText } from '../../components/TypingText';

export function Home() {
  const XIcon = () => (
    <svg
      className='w-5 h-5'
      viewBox='0 0 36 24'
      fill='currentColor'
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

  const jobs = [
    'Desenvolvedor web',
    'Programador fullstack',
    'Desenvolvedor desktop',
    'Criador de coisas legais',
  ];

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
            Eu sou um <TypingText words={jobs} />
          </h3>
          <p>
            Comprometido em entregar soluções que fazem a diferença. Atuo em
            projetos de software livre, colaboro com iniciativas sociais e
            transformo ideias em ferramentas úteis. Acredito na tecnologia como
            agente de mudança e na colaboração como motor para um mundo mais
            justo e acessível.
          </p>
          <div className={styles.socialIcons}>
            <a
              href='https://www.linkedin.com/in/crystofher-lins-15aa69248'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin />
            </a>
            <a
              href='https://github.com/Cryslash'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github />
            </a>
            <a href='#'>
              <XIcon />
            </a>
            <a
              href='https://www.instagram.com/crystofher_lins/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram />
            </a>
          </div>
          <a href='/files/Crystofher_Lins.pdf' download className={styles.btn}>
            Download CV
          </a>
          {/* <a
            href='#'            
            className={`${styles.btn} ${styles.space}`}
          >
            Contrate-me
          </a> */}
        </div>
      </section>
    </MainTemplate>
  );
}
