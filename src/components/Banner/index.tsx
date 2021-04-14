import { Box, Flex, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex h='335' w='100%' mx='auto' pos='relative' justify='center'>
      <Image
        src='background.png'
        alt='background-image'
        objectFit='cover'
        w='100vw'
      />

      <Flex
        direction='row'
        maxWidth={1440}
        w='100%'
        top='20'
        pos='absolute'
        justify='space-between'
        px='140'
      >
        <Text
          zIndex='5'
          color='gray.50'
          fontSize='36px'
          fontWeight='500'
          align='left'
        >
          5 Continentes,
          <br /> infinitas possibilidades.
          <Text
            fontSize='20px'
            fontWeight='400'
            maxWidth={524}
            color='gray.200'
            mt='5'
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Text>
        <Image zIndex='5' src='airplane.svg' alt='aiplane' align='right' />
      </Flex>
    </Flex>
  );
}
