type TechnologyName =
  | 'php'
  | 'codeigniter'
  | 'csharp'
  | 'python'
  | 'html5'
  | 'css3'
  | 'tailwind'
  | 'lua'
  | 'js'
  | 'ts'
  | 'react'
  | 'next'
  | 'vite'
  | 'rails'
  | 'sqlserver'
  | 'mysql';

const technologies: Record<TechnologyName, string> = {
  php: '/images/icons/php.svg',
  codeigniter: '/images/icons/codeIgniter.svg',
  csharp: '/images/icons/cSharp.svg',
  python: '/images/icons/python.svg',
  html5: '/images/icons/html.svg',
  css3: '/images/icons/css3.svg',
  tailwind: '/images/icons/tailwindCss.svg',
  lua: '/images/icons/lua.svg',
  js: '/images/icons/js.svg',
  ts: '/images/icons/ts.svg',
  react: '/images/icons/react.svg',
  next: '/images/icons/nextjs.svg',
  vite: '/images/icons/vite.svg',
  rails: '/images/icons/rails.svg',
  sqlserver: '/images/icons/sqlServer.svg',
  mysql: '/images/icons/mySql.svg',
};

export function ConvertNameToSrc(name: TechnologyName): string {
  return technologies[name];
}
