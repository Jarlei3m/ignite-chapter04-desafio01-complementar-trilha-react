import { Box, Flex, Spinner, Text, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, EffectFade]);

interface Continent {
  id: number;
  slug: string;
  name: string;
  text: string;
  image: string;
}

interface ContinentProps {
  continent: Continent;
}

export function ContinentSlide() {
  const [continents, setContinents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  useEffect(() => {
    fetch('/api/continents')
      .then((res) => res.json())
      .then((data) => {
        setContinents(data), setIsLoading(false);
      });

    document.documentElement.style.setProperty(
      '--swiper-theme-color',
      '#FFBA08'
    );
    document.documentElement.style.setProperty(
      '--swiper-navigation-size',
      '30px'
    );
  }, []);

  if (isLoading) {
    return (
      <Flex
        maxWidth={{ base: '425px', md: '768px', lg: '1240px' }}
        align='center'
        justify='center'
      >
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

  return (
    <Flex
      maxWidth={{ base: '100%', md: '738px', lg: '924px', xl: '1240px' }}
      mb={{ base: '24px', md: '32px', lg: '40px' }}
      h={{ base: '250px', md: '350px', lg: '450px' }}
      boxShadow='0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25)'
    >
      <Swiper
        tag='section'
        wrapperTag='ul'
        id='main'
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class='swiper-pagination-bullet' ${
              isWideVersion
                ? 'style=width:12px;height:12px;opacity:1>'
                : 'style=width:8px;height:8px;opacity:1>'
            } </span>`;
          },
        }}
        spaceBetween={0}
        slidesPerView={1}
        // effect='fade'
      >
        <Box
          className='swiper-button-next'
          color='yellow.500'
          right={{ base: '10px', md: '15px', lg: '20px' }}
          _after={{
            fontSize: isWideVersion ? '30px' : '16px',
          }}
        ></Box>
        <Box
          className='swiper-button-prev'
          color='yellow.500'
          left={{ base: '10px', md: '15px', lg: '20px' }}
          _after={{
            fontSize: isWideVersion ? '30px' : '16px',
          }}
        ></Box>
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
                  bgSize='cover'
                  h={{ base: '250px', md: '350px', lg: '450px' }}
                  align='center'
                  justify='center'
                >
                  <Box textAlign='center' fontWeight='700' zIndex='5'>
                    <Text
                      fontSize={{ base: '24px', md: '36px', lg: '48px' }}
                      lineHeight={{ base: '36px', md: '54px', lg: '72px' }}
                      color='gray.50'
                    >
                      {name}
                    </Text>
                    <Text
                      fontSize={{ base: '14px', md: '19px', lg: '24px' }}
                      lineHeight={{ base: '21px', md: '33px', lg: '36px' }}
                      color='gray.200'
                      width={{ base: '280px', md: '324px', lg: '100%' }}
                      mt={{ base: '12px', md: '14px', lg: '16px' }}
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
