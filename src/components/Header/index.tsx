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
      maxWidth={{ base: '425px', md: '768px', lg: '1440px' }}
      minHeight={{ base: '50px', md: '75px', lg: '100px' }}
      align='center'
      justify='center'
      px={[4, 36, 78, 140]}
    >
      <Image src='logo.svg' alt='world trip' w={[81, 132, 181]} />
      {route.asPath !== '/' && (
        <Link href='/'>
          <Icon
            as={RiArrowLeftSLine}
            pos='absolute'
            left={[4, 36, 78, 140]}
            color='gray.800'
            fontSize={{ base: '16px', md: '24px', lg: '32px' }}
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
