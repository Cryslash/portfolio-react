import { AnimatedTitle } from '../../components/AnimatedTitle';
import { Container } from '../../components/Container';
import { Technologies } from '../../components/Technologies';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';

export function Skills() {
  const techData = [
    { alt: 'React', title: 'React', src: '/images/icons/react.svg' },
    {
      alt: 'TypeScript',
      title: 'TypeScript',
      src: '/images/icons/ts.svg',
    },
    { alt: 'JavaScript', title: 'JavaScript', src: '/images/icons/js.svg' },
    { alt: 'Vite', title: 'Vite', src: '/images/icons/vite.svg' },
    { alt: 'NextJs', title: 'NextJs', src: '/images/icons/nextjs.svg' },
    { alt: 'NodeJs', title: 'NodeJs', src: '/images/icons/node.svg' },

    { alt: 'Rails', title: 'RubyOnRails', src: '/images/icons/rails.svg' },
    { alt: 'PHP', title: 'PHP', src: '/images/icons/php.svg' },
    {
      alt: 'CodeIgniter',
      title: 'CodeIgniter',
      src: '/images/icons/codeIgniter.svg',
    },
    {
      alt: 'TailwindCSS',
      title: 'TailwindCSS',
      src: '/images/icons/tailwindCss.svg',
    },
    {
      alt: 'Bootstrap',
      title: 'Bootstrap',
      src: '/images/icons/bootstrap.svg',
    },
    { alt: 'HTML5', title: 'HTML5', src: '/images/icons/html.svg' },
    { alt: 'CSS', title: 'CSS', src: '/images/icons/css3.svg' },

    { alt: 'C#', title: 'C#', src: '/images/icons/cSharp.svg' },
    { alt: 'Python', title: 'Python', src: '/images/icons/python.svg' },
    { alt: 'Lua', title: 'Lua', src: '/images/icons/lua.svg' },
    { alt: 'MongoDB', title: 'MongoDB', src: '/images/icons/mongo.svg' },
    { alt: 'Sqlite', title: 'Sqlite', src: '/images/icons/sqlite.svg' },
    { alt: 'MySQL', title: 'MySQL', src: '/images/icons/mySql.svg' },

    {
      alt: 'SQLServer',
      title: 'SQLServer',
      src: '/images/icons/sqlServer.svg',
    },
    { alt: 'WSL', title: 'WSL', src: '/images/icons/wsl.svg' },
    { alt: 'Docker', title: 'Docker', src: '/images/icons/docker.svg' },
    { alt: 'Git', title: 'Git', src: '/images/icons/git.svg' },
  ];

  return (
    <MainTemplate>
      <Container>
        <div className={styles.skills}>
          <AnimatedTitle className={styles.langTitle}>
            Algumas das tecnologias que utilizo
          </AnimatedTitle>
          <Technologies data={techData} />
        </div>
      </Container>
    </MainTemplate>
  );
}
