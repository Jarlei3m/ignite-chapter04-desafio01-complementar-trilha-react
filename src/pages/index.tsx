import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { ContinentSlide } from '../components/ContinentSlide';
import { Header } from '../components/Header';
import { Title } from '../components/Title';
import { TravelTypes } from '../components/Types';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Flex direction='column' h='100%' align='center'>
        <Header />
        <Banner />
        <TravelTypes />
        <Title />
        <ContinentSlide />
      </Flex>
    </>
  );
}
