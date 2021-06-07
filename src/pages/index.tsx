import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { ContinentSlide } from "../components/ContinentSlide";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { TravelTypes } from "../components/Types";
import getContinents from "../database/getContinents";
import getTypes from "../database/getTypes";

interface Continent {
  _id: number;
  slug: string;
  name: string;
  text: string;
  image: string;
}

interface Type {
  _id: number;
  text: string;
  image: string;
}

interface HomeProps {
  continents: Continent[];
  types: Type[];
}

export default function Home({ continents, types }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Flex direction='column' h='100%' align='center'>
        <Header />
        <Banner />
        <TravelTypes types={types} />
        <Title />
        <ContinentSlide continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // continents
  const dataContinents = await getContinents();
  const continents = JSON.parse(JSON.stringify(dataContinents));

  // types
  const dataTypes = await getTypes();
  const types = JSON.parse(JSON.stringify(dataTypes));

  return {
    props: {
      continents,
      types,
    },
    revalidate: 60 * 60 * 24, // 24hours
  };
};
