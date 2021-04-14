import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as='header'
      width='100%'
      mx='auto'
      maxWidth={1440}
      minHeight={100}
      align='center'
      justify='center'
    >
      <Image src='logo.svg' alt='world trip' />
    </Flex>
  );
}
