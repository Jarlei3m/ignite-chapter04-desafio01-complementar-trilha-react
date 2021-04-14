import { Box, Divider, Text } from '@chakra-ui/layout';

export function Title() {
  return (
    <Box pl='48px' align='center'>
      <Divider
        width='90px'
        borderBottomWidth='2px'
        borderBottomColor='gray.800'
        opacity='1'
      />
      <Text textAlign='center' fontSize='36px' lineHeight='54px' my='52px'>
        Vamos nessa? <br /> Então escolha seu continente
      </Text>
    </Box>
  );
}
