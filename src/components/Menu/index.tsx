import styles from './styles.module.css';

export function Menu() {
  return (
    <header>
      <a className={styles.logo}>CryTech</a>
      <nav className={styles.menu}>
        <a className={styles.active}>Inicio</a>
        <a>Skills</a>
        <a>Trabalhos</a>
        <a>Contatos</a>
      </nav>
    </header>
  );
}
