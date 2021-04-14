import { useEffect, useState } from 'react';
import { Box, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import Link from 'next/link';

import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, EffectFade]);

export function ContinentSlide() {
  const [continents, setContinents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/continents')
      .then((res) => res.json())
      .then((data) => {
        setContinents(data), setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Flex maxWidth={1240} align='center' justify='center'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='yellow.500'
          size='xl'
        />
      </Flex>
    );
  }

  document.documentElement.style.setProperty('--swiper-theme-color', '#FFBA08');
  document.documentElement.style.setProperty(
    '--swiper-navigation-size',
    '30px'
  );

  return (
    <Flex
      maxWidth={1240}
      mb='40px'
      h='450px'
      boxShadow='0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25)'
    >
      <Swiper
        tag='section'
        wrapperTag='ul'
        id='main'
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        effect='fade'
      >
        {continents?.map((continent) => {
          const { id, name, text, image, slug } = continent;
          return (
            <SwiperSlide key={id} tag='li' style={{ listStyle: 'none' }}>
              <Link href={`/${slug}`}>
                <Flex
                  pos='relative'
                  bgImage={`url('${image}')`}
                  bgPos='center'
                  bgRepeat='no-repeat'
                  bgSize={1240}
                  width='100%'
                  height='450px'
                  align='center'
                  justify='center'
                >
                  <Box textAlign='center' fontWeight='700' zIndex='5'>
                    <Text fontSize='48px' lineHeight='72px' color='gray.50'>
                      {name}
                    </Text>
                    <Text
                      fontSize='24px'
                      lineHeight='36px'
                      color='gray.200'
                      mt='16px'
                    >
                      {text}
                    </Text>
                  </Box>

                  <Box
                    pos='absolute'
                    top='0'
                    right='0'
                    bottom='0'
                    left='0'
                    bg='rgba(28, 20, 1, 0.35)'
                  ></Box>
                </Flex>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}
