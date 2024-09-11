export type Skill = {
    id: number,
    title: string,
    logo: string,
    description: string[],
    experience: string,
};


export const skillsArray: Skill[] = [
  {
    id: 1,
    title: 'HTML 5',
    logo: '/img/logos/cdn-html.svg',
    description: [
      '- Estruturação semântica',
      '- Páginas responsivas',
      '- Boas práticas de usabilidade',
      '- Integração com CSS e frameworks'
    ],
    experience: 'w-full',
  },
  {
    id: 2,
    title: 'CSS 3',
    logo: '/img/logos/cdn-css.svg',
    description: [
      '- Flexbox e grid',
      '- Animações dinâmicas',
      '- Layouts responsivos',
      '- Design adaptado a diferentes dispositivos',
      '- Manutenção e organização de estilos'
    ],
    experience: 'w-full',
  },
  {
    id: 3,
    title: 'Bootstrap',
    logo: '/img/logos/cdn-bootstrap.svg',
    description: [
      '- Componentes reutilizáveis',
      '- Personalização de temas',
      '- Layouts consistentes',
      '- Integração com sistemas de grid',
      '- Otimização de desenvolvimento front-end'
    ],
    experience: 'w-5/6',
  },
  {
    id: 4,
    title: 'Tailwind CSS',
    logo: '/img/logos/cdn-tailwind-css.svg',
    description: [
      '- Utilitários rápidos',
      '- Personalização de design',
      '- Layouts adaptáveis',
      '- Estilização sem classes redundantes',
      '- Agilidade na criação de interfaces modernas'
    ],
    experience: 'w-full',
  },
  {
    id: 5,
    title: 'JavaScript',
    logo: '/img/logos/cdn-javascript.svg',
    description: [
      '- Manipulação de DOM',
      '- Desenvolvimento assíncrono',
      '- Integração com APIs RESTful',
      '- Criação de scripts dinâmicos e interativos'
    ],
    experience: 'w-full',
  },
  {
    id: 6,
    title: 'TypeScript',
    logo: '/img/logos/cdn-typescript.svg',
    description: [
      '- Tipagem estática',
      '- Redução de bugs',
      '- Manutenção de projetos',
      '- Integração com frameworks modernos como React e Vue'
    ],
    experience: 'w-5/6',
  },
  {
    id: 7,
    title: 'React JS',
    logo: '/img/logos/cdn-reactjs.svg',
    description: [
      '- Componentes reutilizáveis',
      '- Hooks e estado',
      '- Otimização de desempenho',
      '- Criação de Single Page Applications (SPAs)',
      '- Integração com bibliotecas de roteamento e estado global'
    ],
    experience: 'w-5/6',
  },
  {
    id: 8,
    title: 'Vue JS',
    logo: '/img/logos/cdn-vuejs.svg',
    description: [
      '- Vue Router e SPA',
      '- Componentes dinâmicos',
      '- Simplificação no desenvolvimento de interfaces',
      '- Facilidade de integração com projetos legados'
    ],
    experience: 'w-5/6',
  },
  {
    id: 9,
    title: 'PHP',
    logo: '/img/logos/cdn-php.svg',
    description: [
      '- Integração MySQL',
      '- APIs RESTful',
      '- Criação de sistemas backend robustos',
      '- Gerenciamento de sessões'
    ],
    experience: 'w-full',
  },
  {
    id: 10,
    title: 'Laravel',
    logo: '/img/logos/cdn-laravel.svg',
    description: [
      '- Eloquent ORM',
      '- APIs RESTful',
      '- Gerenciamento de rotas e controle de acesso',
    ],
    experience: 'w-5/6',
  },
  {
    id: 11,
    title: 'Postman',
    logo: '/img/logos/cdn-postman.svg',
    description: [
      '- Teste de APIs',
      '- Simulação HTTP',
      '- Monitoramento e documentação de APIs'
    ],
    experience: 'w-full',
  },
  {
    id: 12,
    title: 'Figma',
    logo: '/img/logos/cdn-figma.svg',
    description: [
      '- Colaboração em equipe',
      '- Exportação para frontend',
      '- Criação de protótipos de alta fidelidade',
      '- Integração com ferramentas de design UX/UI'
    ],
    experience: 'w-5/6',
  },
  {
    id: 13,
    title: 'PhotoShop',
    logo: '/img/logos/cdn-photoshop.svg',
    description: [
      '- Manipulação de imagens',
      '- Criação de mockups e assets visuais',
      '- Edição e composição de imagens'
    ],
    experience: 'w-3/6',
  },
  {
    id: 14,
    title: 'MySQL',
    logo: '/img/logos/cdn-mysql.svg',
    description: [
      '- Modelagem de dados',
      '- Consultas otimizadas',
      '- Criação de índices e otimização de consultas',
      '- Integração com PHP e outros sistemas backend'
    ],
    experience: 'w-5/6',
  },
  {
    id: 15,
    title: 'GitHub',
    logo: '/img/logos/cdn-github.svg',
    description: [
      '- Versionamento de código',
      '- Controle de branches',
      '- Resolução de conflitos',
      '- Trabalho colaborativo em equipe',
    ],
    experience: 'w-full',
  },
];


export type NavLink = {
  id: number,
  title: string,
};

export const navLinksArray: NavLink[] = [
  {
    id: 1,
    title: 'Início',
  },
  {
    id: 2,
    title: 'Sobre',
  },
  {
    id: 3,
    title: 'Habilidades',
  },
  {
    id: 4,
    title: 'Portfólio',
  },
  {
    id: 5,
    title: 'Contatos',
  }
]


export type Project = {
  id: number,
  title: string,
  banner: string,
  logos: string[],
  links: string[],
};

export const projectsArray: Project[] = [
  {
    id: 1,
    title: 'Music Legends',
    banner: 'img/projects/musiclegends.png',
    logos: [
      '/img/logos/cdn-reactjs.svg',
      '/img/logos/cdn-tailwind-css.svg',
      '/img/logos/cdn-figma.svg',
      '/img/logos/cdn-typescript.svg',
    ],
    links: [
      'https://musiclegends.netlify.app',
      'https://github.com/VitoorVictor/MusicLegends',
    ]
  }, 
  {
    id: 2,
    title: 'Cronometro Web com Js',
    banner: 'img/projects/webcronometrojs.png',
    logos: [
      '/img/logos/cdn-html.svg',
      '/img/logos/cdn-css.svg',
      '/img/logos/cdn-javascript.svg'
    ],
    links: [
      'https://webcronometrojs.netlify.app',
      'https://github.com/VitoorVictor/Cronometro',
    ]
  }, 
  {
    id: 3,
    title: 'Todo List com Js',
    banner: 'img/projects/todolist-on.png',
    logos: [
      '/img/logos/cdn-html.svg',
      '/img/logos/cdn-css.svg',
      '/img/logos/cdn-javascript.svg'
    ],
    links: [
      'https://todolist-on.netlify.app',
      'https://github.com/VitoorVictor/Todo',
    ]
  }, 
  {
    id: 4,
    title: 'Vue Burger',
    banner: 'img/projects/vueburger.png',
    logos: [
      '/img/logos/cdn-bootstrap.svg',
      '/img/logos/cdn-vuejs.svg',
      '/img/logos/cdn-javascript.svg'
    ],
    links: [
      'https://vueburger.netlify.app',
      'https://github.com/VitoorVictor/MakeBurger',
    ]
  }, 
  {
    id: 5,
    title: 'Binance Homepage',
    banner: 'img/projects/binancehome.png',
    logos: [
      '/img/logos/cdn-html.svg',
      '/img/logos/cdn-css.svg',
    ],
    links: [
      'https://binancehome.netlify.app',
      'https://github.com/VitoorVictor/BinanceHomePage',
    ]
  }, 
  {
    id: 6,
    title: 'Art - exposição de Artes',
    banner: 'img/projects/artexposition.png',
    logos: [
      '/img/logos/cdn-vuejs.svg',
      '/img/logos/cdn-bootstrap.svg',
      '/img/logos/cdn-javascript.svg',
    ],
    links: [
      'https://artexposition.netlify.app',
      'https://github.com/VitoorVictor/ArtExposition',
    ]
  }, 
  {
    id: 7,
    title: 'Stardle',
    banner: 'img/projects/webstardle.png',
    logos: [
      '/img/logos/cdn-reactjs.svg',
      '/img/logos/cdn-tailwind-css.svg',
      '/img/logos/cdn-javascript.svg',
    ],
    links: [
      'https://webstardle.netlify.app',
      'https://github.com/VitoorVictor/Stardle',
    ]
  }, 
  {
    id: 8,
    title: 'Open Clima',
    banner: 'img/projects/openclima.png',
    logos: [
      '/img/logos/cdn-reactjs.svg',
      '/img/logos/cdn-tailwind-css.svg',
      '/img/logos/cdn-typescript.svg',
      '/img/logos/cdn-postman.svg',
    ],
    links: [
      'https://openclima.netlify.app',
      'https://github.com/VitoorVictor/OpenClima',
    ]
  },
]