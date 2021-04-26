import { Box, Flex, HStack, Image, Text, Tooltip } from '@chakra-ui/react';

interface ContinentInfoProps {
  description: string;
  country: string;
  language: string;
  city: string;
}

export function ContinentInfo({
  description,
  country,
  language,
  city,
}: ContinentInfoProps) {
  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      maxWidth={1440}
      w='100%'
      my={[6, 12, 16, 20]}
      align='center'
      justify='space-between'
      px={[4, 36, 78, 140]}
    >
      <Text
        textAlign='justify'
        fontSize={{ base: '14px', md: '19px', lg: '24px' }}
        lineHeight={{ base: '21px', md: '28px', lg: '36px' }}
        fontWeight='400'
        mb={{ base: '16px', xl: null }}
        maxWidth={600}
        color='gray.800'
      >
        {description}
      </Text>

      <HStack spacing='42px'>
        <Box align='center' justify='center'>
          <Text
            fontSize={{ base: '24px', md: '36px', lg: '48px' }}
            fontWeight='600'
            lineHeight={{ base: '36px', md: '52px', lg: '72px' }}
            color='yellow.500'
          >
            {country}
            <Text
              fontSize={{ base: '18px', md: '21px', lg: '24px' }}
              fontWeight={{ base: '400', md: '500', lg: '600' }}
              lineHeight={{ base: '27px', md: '32px', lg: '36px' }}
              color='gray.800'
            >
              países
            </Text>
          </Text>
        </Box>
        <Box align='center' justify='center'>
          <Text
            fontSize={{ base: '24px', md: '36px', lg: '48px' }}
            fontWeight='600'
            lineHeight={{ base: '36px', md: '52px', lg: '72px' }}
            color='yellow.500'
          >
            {language}
            <Text
              fontSize={{ base: '18px', md: '21px', lg: '24px' }}
              fontWeight={{ base: '400', md: '500', lg: '600' }}
              lineHeight={{ base: '27px', md: '32px', lg: '36px' }}
              color='gray.800'
            >
              línguas
            </Text>
          </Text>
        </Box>
        <Box align='center' justify='center'>
          <Text
            fontSize={{ base: '24px', md: '36px', lg: '48px' }}
            fontWeight='600'
            lineHeight={{ base: '36px', md: '52px', lg: '72px' }}
            color='yellow.500'
          >
            {city}
            <Text
              fontSize={{ base: '18px', md: '21px', lg: '24px' }}
              fontWeight={{ base: '400', md: '500', lg: '600' }}
              lineHeight={{ base: '27px', md: '32px', lg: '36px' }}
              color='gray.800'
              align='center'
              justify='center'
              display='flex'
            >
              cidades +100
              <Tooltip
                hasArrow
                label='Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
                bg='gray.500'
                color='gray.50'
              >
                <Image
                  w={{ base: '10px', md: '16px' }}
                  src='images/info.svg'
                  ml='5px'
                />
              </Tooltip>
            </Text>
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
}
