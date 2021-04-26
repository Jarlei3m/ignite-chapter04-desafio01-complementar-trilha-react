import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Flex
      h={{ base: '163px', md: '249px', lg: '335px' }}
      w='100%'
      mx='auto'
      pos='relative'
      justify='center'
    >
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
        top={[7, 17, 20]}
        pos='absolute'
        justify='space-between'
        px={[4, 36, 78, 140]}
      >
        <Text
          zIndex='5'
          color='gray.50'
          fontSize={{ base: '20px', md: '28px', lg: '36px' }}
          fontWeight='500'
          align='left'
        >
          5 Continentes,
          <br /> infinitas possibilidades.
          <Text
            // fontSize='20px'
            fontSize={{ base: '14px', md: '17px', lg: '20px' }}
            fontWeight='400'
            maxWidth={524}
            color='gray.200'
            mt={[2, 3, 5]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Text>
        {isWideVersion && (
          <Image zIndex='5' src='airplane.svg' alt='aiplane' align='right' />
        )}
      </Flex>
    </Flex>
  );
}
