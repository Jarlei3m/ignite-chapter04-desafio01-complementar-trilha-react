import { Box, Flex, Image, Text } from '@chakra-ui/react';

export function TravelTypes() {
  return (
    <Flex
      maxWidth={1440}
      w='100%'
      // mx='auto'
      py='114px'
      // align='center'
      justify='space-between'
      px='140'
    >
      <Box align='center' justify='center'>
        <Image src='cocktail.svg' alt='cocktail' />
        <Text fontSize='24px' fontWeight='600' color='gray.800' mt='6'>
          vida noturna
        </Text>
      </Box>

      <Box align='center' justify='center'>
        <Image src='surf.svg' alt='surf' />
        <Text fontSize='24px' fontWeight='600' color='gray.800' mt='6'>
          praia
        </Text>
      </Box>

      <Box align='center' justify='center'>
        <Image src='building.svg' alt='building' />
        <Text fontSize='24px' fontWeight='600' color='gray.800' mt='6'>
          moderno
        </Text>
      </Box>

      <Box align='center' justify='center'>
        <Image src='museum.svg' alt='museum' />
        <Text fontSize='24px' fontWeight='600' color='gray.800' mt='6'>
          clássico
        </Text>
      </Box>

      <Box align='center' justify='center'>
        <Image src='earth.svg' alt='earth' />
        <Text fontSize='24px' fontWeight='600' color='gray.800' mt='6'>
          e mais...
        </Text>
      </Box>
    </Flex>
  );
}
