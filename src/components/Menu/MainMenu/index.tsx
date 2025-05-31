import styles from './styles.module.css';
import { useLocation, useNavigate } from 'react-router';
import { useScrollDirection } from '../../../contexts/ScrollContext';
import { orderedRoutes } from '../OrderedRoutes';
import { useRef } from 'react';

export function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setDirection, setManualTrigger } = useScrollDirection();

  const handleClick = (path: string) => {
    const currentIndex = orderedRoutes.indexOf(location.pathname);
    const targetIndex = orderedRoutes.indexOf(path);

    if (currentIndex === -1 || targetIndex === -1) return;

    const direction = targetIndex > currentIndex ? 1 : -1;

    setDirection(direction);
    setManualTrigger(true);
    navigate(path);
  };

  const miniMenuActived = useRef<HTMLDivElement | null>(null);
  const threeSpanAnimation = useRef<HTMLDivElement | null>(null);

  function HandleClickMenuButton() {
    miniMenuActived.current?.classList.toggle(styles.actived);
    threeSpanAnimation.current?.classList.toggle(styles.on);
  }

  return (
    <header>
      <a onClick={() => handleClick(orderedRoutes[0])} className={styles.logo}>
        CryTech
      </a>
      <nav className={styles.menu}>
        <a
          onClick={() => handleClick(orderedRoutes[0])}
          className={
            location.pathname === orderedRoutes[0] ? styles.active : ''
          }
        >
          Início
        </a>
        <a
          onClick={() => handleClick(orderedRoutes[1])}
          className={
            location.pathname === orderedRoutes[1] ? styles.active : ''
          }
        >
          Tecnologias
        </a>
        <a
          onClick={() => handleClick(orderedRoutes[2])}
          className={
            location.pathname === orderedRoutes[2] ? styles.active : ''
          }
        >
          Projetos
        </a>
        <a
          onClick={() => handleClick(orderedRoutes[3])}
          className={
            location.pathname === orderedRoutes[3] ? styles.active : ''
          }
        >
          Contato
        </a>

        <div
          className={styles.toggle}
          id='toggle'
          onClick={HandleClickMenuButton}
          ref={threeSpanAnimation}
        >
          <div className={styles.icon}>
            <div className={`${styles.span} ${styles.one}`}></div>
            <div className={`${styles.span} ${styles.two}`}></div>
            <div className={`${styles.span} ${styles.three}`}></div>
          </div>
        </div>
      </nav>

      <div className={styles.resize} ref={miniMenuActived}>
        <a
          onClick={() => {
            handleClick(orderedRoutes[0]);
            HandleClickMenuButton();
          }}
        >
          Início
        </a>
        <a
          onClick={() => {
            handleClick(orderedRoutes[1]);
            HandleClickMenuButton();
          }}
        >
          Tecnologias
        </a>
        <a
          onClick={() => {
            handleClick(orderedRoutes[2]);
            HandleClickMenuButton();
          }}
        >
          Projetos
        </a>
        <a
          onClick={() => {
            handleClick(orderedRoutes[3]);
            HandleClickMenuButton();
          }}
        >
          Contato
        </a>
      </div>
    </header>
  );
}
