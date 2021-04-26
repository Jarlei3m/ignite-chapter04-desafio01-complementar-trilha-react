import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const types = [
    {
      id: 1,
      text: 'vida noturna',
      image: 'cocktail.svg',
    },
    {
      id: 2,
      text: 'praia',
      image: 'surf.svg',
    },
    {
      id: 3,
      text: 'moderno',
      image: 'building.svg',
    },
    {
      id: 4,
      text: 'clássico',
      image: 'museum.svg',
    },
    {
      id: 5,
      text: 'e mais...',
      image: 'earth.svg',
    },
  ];

  return response.json(types);
};
