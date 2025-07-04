import { AnimatedContent } from '../../components/AnimatedContent';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { Container } from '../../components/Container';
import { Project } from '../../components/ProjectContainer';
import type { TechnologyName } from '../../lib/NameToSrc';
import styles from './styles.module.css';

export function Projects() {
  const projectData = [
    {
      src: './images/projects/blog.png',
      title: 'Blog',
      cat: 'Web Site',
      desc:
        'Uma plataforma completa para publicação de notícias, com controle de acesso, gerenciamento ' +
        'de posts, suporte a múltiplos autores e administração de usuários.',
      url: '',
      technologies: [
        'ts',
        'react',
        'tailwind',
        'next',
        'sqlite',
      ] as TechnologyName[],
      date: '01/07/2025',
    },
    {
      src: './images/projects/pdv.jpg',
      title: 'Sistema Pdv',
      cat: 'Aplicação Desktop',
      desc:
        'Sistema de ponto de venda, controle de estoque, caixa, emissão de cupom de venda e relatórios. Possui integração ' +
        'com maquina de pagamento pag seguro,cartão de crédito, débito e pix.',
      url: '',
      technologies: ['csharp', 'sqlserver'] as TechnologyName[],
      date: '06/02/2024',
    },
    {
      src: './images/projects/wow.png',
      title: 'WoW Classic - Guia',
      cat: 'Web Site',
      desc:
        'Essa página é um acervo digital de builds e guias para o jogo world of warcraft, com suporte a versão vanilla ' +
        'clássica do jogo e ao servidor privado turtle wow - mysteries of Azeroth.',
      url: '',
      technologies: ['rails', 'js', 'mysql'] as TechnologyName[],
      date: '03/09/2019',
    },
    {
      src: './images/projects/ecommerce.jpg',
      title: 'E-Commerce',
      cat: 'Desenvolvimento FullStack',
      desc:
        'Site desenvolvido em PHP com o framework codeigniter, um ecommerce completo, com controle ' +
        "de estoque, pedidos, vendas, integração com api's de pagamentos como mercado pago e paypal, e api " +
        'dos correios para cálculo de frete.',
      url: '',
      technologies: ['php', 'codeigniter', 'js', 'mysql'] as TechnologyName[],
      date: '21/10/2018',
    },
    {
      src: './images/projects/sisos.jpg',
      title: 'SisOS',
      cat: 'Aplicação Desktop',
      desc:
        'Sistema de emissão de ordem de serviços e monitoramento do status, controle de estoque, ' +
        'checklist, voltado a assistencias tecnicas de informática, eletrônia e smartphones. Funciona em ' +
        'rede local, com estação de atendimento e laboratório.',
      url: '',
      technologies: ['csharp', 'sqlserver'] as TechnologyName[],
      date: '11/06/2017',
    },
  ];
  return (
    <Container>
      <div className={styles.projects}>
        <AnimatedTitle className={styles.projectTitle}>
          Alguns dos meus últimos trabalhos
        </AnimatedTitle>
        <AnimatedContent className={styles.projectRow}>
          <Project data={projectData} />
        </AnimatedContent>
      </div>
    </Container>
  );
}
