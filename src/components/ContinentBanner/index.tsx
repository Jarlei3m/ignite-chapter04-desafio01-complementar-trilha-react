import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface ContinentBanner {
  name: string;
  image: string;
}

export function ContinentBanner({ name, image }) {
  return (
    <Flex h='500' w='100%' mx='auto' pos='relative' justify='center'>
      <Image src={image} alt={name} objectFit='cover' w='100vw' />

      <Box
        pos='absolute'
        top='0'
        right='0'
        bottom='0'
        left='0'
        bg='rgba(28, 20, 1, 0.35)'
      ></Box>

      <Flex
        pos='absolute'
        bottom='59px'
        zIndex='5'
        align='left'
        maxWidth={1440}
        w='100%'
        px='140'
      >
        <Text color='gray.50' fontSize='48px' fontWeight='600'>
          {name}
        </Text>
      </Flex>
    </Flex>
  );
}
