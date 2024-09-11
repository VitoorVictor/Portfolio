export type Skill = {
    id: number,
    title: string,
    logo: string,
    description: string,
    experience: string,
};

export const skillsArray: Skill[] = [
    {
      id: 1,
      title: 'HTML 5',
      logo: '/img/logos/cdn-html.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
      experience: 'w-full',
    },
    {
        id: 2,
        title: 'CSS 3',
        logo: '/img/logos/cdn-css.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-full'
      },
      {
        id: 3,
        title: 'Bootstrap',
        logo: '/img/logos/cdn-bootstrap.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-5/6'
      },
      {
        id: 4,
        title: 'Tailwind CSS',
        logo: '/img/logos/cdn-tailwind-css.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-full'
      },
      {
        id: 5,
        title: 'JavaScript',
        logo: '/img/logos/cdn-javascript.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-full'
      },
      {
        id: 6,
        title: 'TypeScript',
        logo: '/img/logos/cdn-typescript.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-5/6'
      },
      {
        id: 7,
        title: 'React JS',
        logo: '/img/logos/cdn-reactjs.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-5/6'
      },
      {
        id: 8,
        title: 'Vue JS',
        logo: '/img/logos/cdn-vuejs.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-5/6'
      },
      {
        id: 9,
        title: 'PHP',
        logo: '/img/logos/cdn-php.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-full'
      },
      {
        id: 10,
        title: 'Laravel',
        logo: '/img/logos/cdn-laravel.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-5/6'
      },
      {
        id: 11,
        title: 'Postman',
        logo: '/img/logos/cdn-postman.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-full'
      },
      {
        id: 12,
        title: 'Figma',
        logo: '/img/logos/cdn-figma.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-5/6'
      },
      {
        id: 13,
        title: 'PhotoShop',
        logo: '/img/logos/cdn-photoshop.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-3/6'
      },
      {
        id: 14,
        title: 'MySQL',
        logo: '/img/logos/cdn-mysql.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-5/6'
      },
      {
        id: 15,
        title: 'GitHub',
        logo: '/img/logos/cdn-github.svg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
        experience: 'w-full'
      },
    //   {
    //     id: 16,
    //     title: 'Vite JS',
    //     logo: '/img/logos/cdn-vitejs.svg',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, laborum laudantium illum a quia aperiam in officiis omnis iure magnam fuga vero praesentium',
    //     experience: 'w-full'
    //   }
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