// import { useState } from 'react';
import styles from './styles.module.css';
import { Link, useLocation } from 'react-router';

// type MenuItem = 'inicio' | 'skills' | 'trabalhos' | 'contato';

export function Menu() {
  // const [active, setActive] = useState<MenuItem>('inicio');
  const location = useLocation();

  // const handleClick = (item: MenuItem) => {
  //   setActive(item);
  // };

  return (
    <header>
      <a className={styles.logo}>CryTech</a>
      <nav className={styles.menu}>
        <Link
          to='/'
          className={location.pathname === '/' ? styles.active : ''}
          // onClick={() => handleClick('inicio')}
        >
          Inicio
        </Link>
        <Link
          to='/skills'
          className={location.pathname === '/skills' ? styles.active : ''}
          // onClick={() => handleClick('skills')}
        >
          Skills
        </Link>
        <Link
          to='/trabalhos'
          className={location.pathname === '/trabalhos' ? styles.active : ''}
          // onClick={() => handleClick('trabalhos')}
        >
          Trabalhos
        </Link>
        <Link
          to='/contato'
          className={location.pathname === '/contato' ? styles.active : ''}
          // onClick={() => handleClick('contato')}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
