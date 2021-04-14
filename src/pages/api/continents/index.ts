import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const continents = [
    {
      id: 1,
      slug: 'europa',
      name: 'Europa',
      text: 'O continente mais antigo.',
      image: '/images/europe.jfif',
      description:
        'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
      total_country: '50',
      total_language: '60',
      total_city: '27',
      cities: [
        {
          id: 1,
          city: 'Londres',
          city_image: '/images/cities/london.jfif',
          country: 'Reino Unido',
          flag: 'images/cities/uk_flag.png',
        },
        {
          id: 2,
          city: 'Paris',
          city_image: '/images/cities/paris.jfif',
          country: 'França',
          flag: 'images/cities/france_flag.png',
        },
        {
          id: 3,
          city: 'Roma',
          city_image: '/images/cities/rome.jfif',
          country: 'Itália',
          flag: 'images/cities/italy_flag.png',
        },
        {
          id: 4,
          city: 'Praga',
          city_image: '/images/cities/praga.jfif',
          country: 'República Tcheca',
          flag: 'images/cities/czech_republic_flag.png',
        },
        {
          id: 5,
          city: 'Amsterdã',
          city_image: '/images/cities/amsterdam.jfif',
          country: 'Holanda',
          flag: 'images/cities/netherlands_flag.png',
        },
      ],
    },
    {
      id: 2,
      slug: 'america-do-norte',
      name: 'América do Norte',
      text: 'Constituído por países como EUA, México e Canadá.',
      image: '/images/north_america.jfif',
      description:
        'A América do Norte é composta por 3 países: Canadá, Estados Unidos e México. Estados Unidos e o Canadá são grandes potências mundiais. A América do Norte é banhada ao norte pelo Oceano glacial Ártico; a oeste, pelo Oceano Pacífico; e a leste, pelo Oceano Atlântico.',
      total_country: '3',
      total_language: '6',
      total_city: '28',
      cities: [
        {
          id: 1,
          city: 'Cancún',
          city_image: '/images/cities/cancun.jpg',
          country: 'México',
          flag: 'images/cities/mexico_flag.png',
        },
        {
          id: 2,
          city: 'Orlando',
          city_image: '/images/cities/orlando.jpg',
          country: 'Estados Unidos',
          flag: 'images/cities/us_flag.png',
        },
        {
          id: 3,
          city: 'Las Vegas',
          city_image: '/images/cities/las-vegas.jpg',
          country: 'Estados Unidos',
          flag: 'images/cities/us_flag.png',
        },
        {
          id: 4,
          city: 'Toronto',
          city_image: '/images/cities/toronto.jpg',
          country: 'Canadá',
          flag: 'images/cities/canada_flag.png',
        },
        {
          id: 5,
          city: 'Nova York',
          city_image: '/images/cities/ny.jpg',
          country: 'Estados Unidos',
          flag: 'images/cities/us_flag.png',
        },
      ],
    },
    {
      id: 3,
      slug: 'america-do-sul',
      name: 'América do Sul',
      text: 'Um dos continentes mais calientes.',
      image: '/images/south_america.jfif',
      description:
        'A América do Sul está localizada em grande parte no hemisfério sul, na zona intertropical ocidental. A América do Sul abrange um território de 18 milhões de quilômetros quadrados e é banhada a leste pelo oceano Atlântico, a oeste pelo oceano Pacífico e ao norte pelo mar das Antilhas, conhecido como do Caribe.',
      total_country: '12',
      total_language: '9',
      total_city: '163',
      cities: [
        {
          id: 1,
          city: 'São Paulo',
          city_image: '/images/cities/sp.jpg',
          country: 'Brasil',
          flag: 'images/cities/brazil_flag.png',
        },
        {
          id: 2,
          city: 'Lima',
          city_image: '/images/cities/lima.jpg',
          country: 'Perú',
          flag: 'images/cities/peru_flag.png',
        },
        {
          id: 3,
          city: 'Bogotá',
          city_image: '/images/cities/bogota.jpg',
          country: 'Colombia',
          flag: 'images/cities/colombia_flag.png',
        },
        {
          id: 4,
          city: 'Rio de Janeiro',
          city_image: '/images/cities/rj.jpg',
          country: 'Brasil',
          flag: 'images/cities/brazil_flag.png',
        },
        {
          id: 5,
          city: 'Santiago',
          city_image: '/images/cities/santiago.jpg',
          country: 'Chile',
          flag: 'images/cities/chile_flag.png',
        },
        {
          id: 6,
          city: 'Buenos Aires',
          city_image: '/images/cities/ba.jpg',
          country: 'Argentina',
          flag: 'images/cities/argentina_flag.png',
        },
      ],
    },
    {
      id: 4,
      slug: 'africa',
      name: 'África',
      text: 'Diversidade cultural e ambiental inimagináveis.',
      image: '/images/africa.jfif',
      description:
        'O continente africano é o terceiro maior do mundo. É banhado a leste pelo Oceano Atlântico e a Oeste pelo Oceano Índico. Ao norte, é separado do continente europeu pelo Mar Mediterrâneo; e a nordeste, é separado da Ásia pelo Mar Vermelho e pelo Canal do Suez, localizado no Egito.',
      total_country: '54',
      total_language: '3000',
      total_city: '16',
      cities: [
        {
          id: 1,
          city: 'Lagos',
          city_image: '/images/cities/lagos.jpg',
          country: 'Nigéria',
          flag: 'images/cities/nigeria_flag.png',
        },
        {
          id: 2,
          city: 'Cairo',
          city_image: '/images/cities/cairo.jpg',
          country: 'Egito',
          flag: 'images/cities/egypt_flag.png',
        },
        {
          id: 3,
          city: 'Alexandria',
          city_image: '/images/cities/alexandria.jpg',
          country: 'Egito',
          flag: 'images/cities/egypt_flag.png',
        },
      ],
    },
    {
      id: 5,
      slug: 'oceania',
      name: 'Oceania',
      text: 'Apesar de distante, possui um rica cultura.',
      image: '/images/oceania.jfif',
      description:
        'A Oceania é um continente localizado a sudeste da Ásia, compreendendo um conjunto de ilhas somado à Austrália, essa última considerada como uma massa continental chamada de “Australásia”. Possui uma área total de 8.480.355 km², onde habitam aproximadamente 38 milhões de pessoas.',
      total_country: '16',
      total_language: '18',
      total_city: '20',
      cities: [
        {
          id: 1,
          city: 'Denpasar',
          city_image: '/images/cities/denpasar.jpg',
          country: 'Indonésia',
          flag: 'images/cities/mexico_flag.png',
        },
        {
          id: 2,
          city: 'Auckland',
          city_image: '/images/cities/auckland.jpg',
          country: 'Nova Zelândia',
          flag: 'images/cities/nz_flag.png',
        },
        {
          id: 3,
          city: 'Sydney',
          city_image: '/images/cities/sydney.jpg',
          country: 'Austrália',
          flag: 'images/cities/nz_flag.png',
        },
        {
          id: 4,
          city: 'Manado',
          city_image: '/images/cities/manado.jpg',
          country: 'Indonésia',
          flag: 'images/cities/mexico_flag.png',
        },
      ],
    },
    {
      id: 6,
      slug: 'asia',
      name: 'Ásia',
      text: 'O continente do sol nascente.',
      image: '/images/asian.jfif',
      description:
        'A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.',
      total_country: '50',
      total_language: '51',
      total_city: '24',
      cities: [
        {
          id: 1,
          city: 'Seoul',
          city_image: '/images/cities/seoul.jpg',
          country: 'Coreia do Sul',
          flag: 'images/cities/sk_flag.png',
        },
        {
          id: 2,
          city: 'Gangzhou',
          city_image: '/images/cities/gangzhou.jpg',
          country: 'China',
          flag: 'images/cities/china_flag.png',
        },
        {
          id: 3,
          city: 'Osaka',
          city_image: '/images/cities/osaka.jpg',
          country: 'Japão',
          flag: 'images/cities/japan_flag.png',
        },
        {
          id: 4,
          city: 'Macau',
          city_image: '/images/cities/macau.jpg',
          country: 'China',
          flag: 'images/cities/china_flag.png',
        },
        {
          id: 5,
          city: 'Tokyo',
          city_image: '/images/cities/tokyo.jpg',
          country: 'Japão',
          flag: 'images/cities/japan_flag.png',
        },
        {
          id: 5,
          city: 'Mumbai',
          city_image: '/images/cities/mumbai.jpg',
          country: 'índia',
          flag: 'images/cities/india_flag.png',
        },
        {
          id: 6,
          city: 'Delhi',
          city_image: '/images/cities/delhi.jpg',
          country: 'índia',
          flag: 'images/cities/india_flag.png',
        },
        {
          id: 7,
          city: 'Antalya',
          city_image: '/images/cities/antalya.jpg',
          country: 'Turquia',
          flag: 'images/cities/turkey_flag.png',
        },
        {
          id: 8,
          city: 'Shanghai',
          city_image: '/images/cities/shanghai.jpg',
          country: 'China',
          flag: 'images/cities/china_flag.png',
        },
      ],
    },
  ];

  return response.json(continents);
};
