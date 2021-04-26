import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface ContinentBanner {
  name: string;
  image: string;
}

export function ContinentBanner({ name, image }: ContinentBanner) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      h={{ base: '150px', md: '325px', lg: '500' }}
      w='100%'
      mx='auto'
      pos='relative'
      justify='center'
    >
      <Image src={image} alt={name} objectFit='cover' w='100vw' />

      <Box
        pos='absolute'
        top='0'
        right='0'
        bottom='0'
        left='0'
        bg='rgba(28, 20, 1, 0.35)'
      ></Box>

      <Text
        textAlign={isWideVersion ? 'left' : 'center'}
        pos='absolute'
        alignSelf={{ base: 'center' }}
        bottom={[null, 36, 42, 59]}
        zIndex='5'
        color='gray.50'
        fontSize={{ base: '28px', md: '38px', lg: '48px' }}
        lineHeight={{ base: '42px', md: '52px', lg: '72px' }}
        fontWeight='600'
        maxWidth={{ base: '425px', md: '768px', lg: '1440px' }}
        width='100%'
        px={[4, 36, 78, 140]}
      >
        {name}
      </Text>
    </Flex>
  );
}
