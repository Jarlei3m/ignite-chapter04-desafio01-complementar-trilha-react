import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Cities from '../components/Cities';
import { ContinentBanner } from '../components/ContinentBanner';
import { ContinentInfo } from '../components/ContinentInfo';
import { Header } from '../components/Header';

interface CityProps {
  id: number;
  city: string;
  city_image: string;
  country: string;
  flag: string;
}

interface ContinentProps {
  continent: {
    id: number;
    slug: string;
    name: string;
    text: string;
    image: string;
    description: string;
    total_country: string;
    total_language: string;
    total_city: string;
    cities: CityProps[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>

      <Flex direction='column' h='100%' align='center'>
        <Header />
        <ContinentBanner name={continent.name} image={continent.image} />
        <ContinentInfo
          description={continent.description}
          country={continent.total_country}
          language={continent.total_language}
          city={continent.total_city}
        />
        <Cities cities={continent.cities} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/continents');
  const continents = await res.json();

  const paths = continents.map((continent) => ({
    params: { slug: continent.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const res = await fetch('http://localhost:3000/api/continents');
  const continents = await res.json();

  const filteredContinent = continents.filter(
    (continent) => continent.slug === slug
  );
  const continent = filteredContinent[0];

  return {
    props: { continent },
  };
};
