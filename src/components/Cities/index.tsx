import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';

interface CityProps {
  id: number;
  city: string;
  city_image: string;
  country: string;
  flag: string;
}

interface CitiesProps {
  cities: CityProps[];
}

export default function Cities({ cities }: CitiesProps) {
  return (
    <Flex
      maxWidth={1440}
      mx='140px'
      direction='column'
      align='center'
      mb='35px'
    >
      <Text
        w='100%'
        fontSize='36px'
        lineHeight='56px'
        fontWeight='500'
        color='gray.800'
        align='left'
        mb='40px'
      >
        Cidades +100
      </Text>

      <SimpleGrid columns={4} spacing='45px'>
        {cities.map((city) => {
          return (
            <Box key={city.id} bg='white' h='279px' w='256px'>
              <Image
                h='173px'
                w='100%'
                src={city.city_image}
                alt={city.city}
                objectFit='cover'
                objectPosition='center'
                borderTopRadius='4px'
              />
              <Flex
                w='100%'
                px='24px'
                justify='space-between'
                align='center'
                pt='18px'
                pb='25px'
                borderColor='yellow.200'
                borderTopColor='transparent'
                borderWidth='1px'
                borderBottomRadius='4px'
              >
                <Text
                  fontFamily='Barlow'
                  fontWeight='600'
                  fontSize='20px'
                  lineHeight='25px'
                  color='gray.800'
                >
                  {city.city}
                  <Text
                    fontFamily='Barlow'
                    fontWeight='500'
                    fontSize='16px'
                    lineHeight='26px'
                    mt='12px'
                    color='gray.700'
                  >
                    {city.country}
                  </Text>
                </Text>
                <Image
                  objectFit='cover'
                  objectPosition='center'
                  h='30px'
                  w='30px'
                  borderRadius='50%'
                  src={city.flag}
                  alt={city.country}
                />
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
