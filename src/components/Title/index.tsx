import { Box, Divider, Text } from '@chakra-ui/layout';

export function Title() {
  return (
    <Box align='center'>
      <Divider
        width={{ base: '60px', md: '75px', lg: '90px' }}
        borderBottomWidth={{ base: '1px', md: null, lg: '2px' }}
        borderBottomColor='gray.800'
        opacity='1'
      />
      <Text
        textAlign='center'
        fontSize={{ base: '20px', md: '28px', lg: '36px' }}
        fontWeight='500'
        lineHeight={{ base: '30px', md: '42px', lg: '54px' }}
        mt={{ base: '24px', md: '42px', lg: '52px' }}
        mb={{ base: '20px', md: '42px', lg: '52px' }}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Text>
    </Box>
  );
}
