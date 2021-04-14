import { Flex, Icon, Image } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const route = useRouter();

  return (
    <Flex
      pos='relative'
      as='header'
      width='100%'
      mx='auto'
      maxWidth={1440}
      minHeight={100}
      align='center'
      justify='center'
      px='140px'
    >
      <Image src='logo.svg' alt='world trip' />
      {route.asPath !== '/' && (
        <Link href='/'>
          <Icon
            as={RiArrowLeftSLine}
            pos='absolute'
            left='140px'
            color='gray.800'
            fontSize='32px'
            cursor='pointer'
            transition='color .3s ease'
            _hover={{
              color: 'yellow.500',
            }}
          />
        </Link>
      )}
    </Flex>
  );
}
