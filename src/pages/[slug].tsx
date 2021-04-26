import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Cities from '../components/Cities';
import { ContinentBanner } from '../components/ContinentBanner';
import { ContinentInfo } from '../components/ContinentInfo';
import { Header } from '../components/Header';
import { api } from '../services/api';

interface CityProps {
  id: number;
  city: string;
  city_image: string;
  country: string;
  flag: string;
}

interface Continent {
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
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent?.name} | Worldtrip</title>
      </Head>

      <Flex direction='column' h='100%' align='center'>
        <Header />
        <ContinentBanner name={continent?.name} image={continent?.image} />
        <ContinentInfo
          description={continent?.description}
          country={continent?.total_country}
          language={continent?.total_language}
          city={continent?.total_city}
        />
        <Cities cities={continent?.cities} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('api/continents');

  const paths = data.map((continent: Continent) => {
    return {
      params: {
        slug: continent?.slug,
      },
    };
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const { data } = await api.get('api/continents');

  const filteredContinent = data.filter(
    (continent: Continent) => continent?.slug === slug
  );

  const continent = filteredContinent[0] || null;

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24, // 24hours
  };
};
