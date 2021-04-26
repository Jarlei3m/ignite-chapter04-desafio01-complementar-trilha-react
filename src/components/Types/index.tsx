import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function TravelTypes() {
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/types')
      .then((res) => res.json())
      .then((types) => {
        setTypes(types), setIsLoading(false);
      });
  }, []);
  console.log(types);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <SimpleGrid
      columns={[2, 3, 4, 5]}
      spacing={isWideVersion ? 6 : 0}
      rowGap={27}
      maxWidth={isWideVersion ? 1440 : 275}
      w='100%'
      mt={{ base: '36px', md: '75px', lg: '114px' }}
      mb={{ base: '36px', md: '58px', lg: '80px' }}
      mx='auto'
      px={[null, null, 78, 140]}
      whiteSpace='nowrap'
    >
      {types.map((type, index) => {
        const { id, text, image } = type;

        if (isWideVersion) {
          return (
            <Flex key={id} align='center' justify='center' direction='column'>
              <Image src={image} alt={text} />

              <Text
                textAlign='center'
                fontSize={{ base: '18px', md: '21px', lg: '24px' }}
                fontWeight={[500, 600]}
                color='gray.800'
                mt='6'
              >
                {text}
              </Text>
            </Flex>
          );
        } else if (index !== 4) {
          return (
            <Flex
              key={id}
              align='center'
              justify={index % 2 === 0 ? 'right' : 'flex-end'}
              direction='row'
            >
              <Image src='elipse.svg' alt='elipse' mr='8px' />
              <Text
                textAlign='center'
                fontSize={{ base: '18px', md: '21px', lg: '24px' }}
                fontWeight={[500, 600]}
                color='gray.800'
              >
                {text}
              </Text>
            </Flex>
          );
        } else if (index === 4) {
          return (
            <Flex
              key={id}
              align='center'
              width='100%'
              justifyContent='flex-end'
              mr='-30px'
              transform='translateX(46px)'
            >
              <Image src='elipse.svg' alt='elipse' mr='8px' />
              <Text
                textAlign='center'
                fontSize={{ base: '18px', md: '21px', lg: '24px' }}
                fontWeight={[500, 600]}
                color='gray.800'
              >
                {text}
              </Text>
            </Flex>
          );
        }
      })}
    </SimpleGrid>
  );
}
