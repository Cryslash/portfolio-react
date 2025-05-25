import { Container } from '../../components/Container';
import { TechTable } from '../../components/TechTable';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';

export function Skills() {
  const techData = [
    [
      { alt: 'React', title: 'React', src: '/images/icons/react.png' },
      {
        alt: 'TypeScript',
        title: 'TypeScript',
        src: '/images/icons/typeScript.png',
      },
      { alt: 'JavaScript', title: 'JavaScript', src: '/images/icons/js.png' },
      { alt: 'Node', title: 'Node', src: '/images/icons/node.png' },
      { alt: 'Rails', title: 'RubyOnRails', src: '/images/icons/rails.png' },
    ],
    [
      { alt: 'PHP', title: 'PHP', src: '/images/icons/php.png' },
      {
        alt: 'CodeIgniter',
        title: 'CodeIgniter',
        src: '/images/icons/codeIgniter.png',
      },
      { alt: 'HTML5', title: 'HTML5', src: '/images/icons/html.png' },
      { alt: 'CSS', title: 'CSS', src: '/images/icons/css.png' },
      { alt: 'C#', title: 'C#', src: '/images/icons/cSharp.png' },
    ],
    [
      { alt: 'MongoDB', title: 'MongoDB', src: '/images/icons/mongo.png' },
      { alt: 'MySQL', title: 'MySQL', src: '/images/icons/mySql.png' },
      {
        alt: 'SQLServer',
        title: 'SQLServer',
        src: '/images/icons/sqlServer.png',
      },
      { alt: 'Docker', title: 'Docker', src: '/images/icons/docker.png' },
      { alt: 'Git', title: 'Git', src: '/images/icons/git.png' },
    ],
  ];

  return (
    <MainTemplate>
      <Container>
        <div className={styles.skills}>
          <h1 className={styles.langTitle}>
            Algumas das tecnologias que utilizo
          </h1>

          <TechTable data={techData} />
        </div>
      </Container>
    </MainTemplate>
  );
}
