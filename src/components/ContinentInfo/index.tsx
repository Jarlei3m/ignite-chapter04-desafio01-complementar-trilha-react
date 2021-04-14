import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

export function ContinentInfo({ description, country, language, city }) {
  return (
    <Flex
      direction='row'
      maxWidth={1440}
      w='100%'
      my='20'
      align='center'
      justify='space-between'
      px='140'
    >
      <Text
        textAlign='justify'
        fontSize='24px'
        lineHeight='36px'
        fontWeight='400'
        maxWidth={600}
        color='gray.800'
      >
        {description}
      </Text>

      <HStack spacing='42px'>
        <Box align='center' justify='center'>
          <Text
            fontSize='48px'
            fontWeight='600'
            lineHeight='72px'
            color='yellow.500'
          >
            {country}
            <Text
              fontSize='24px'
              fontWeight='600'
              lineHeight='36px'
              color='gray.800'
            >
              países
            </Text>
          </Text>
        </Box>
        <Box align='center' justify='center'>
          <Text
            fontSize='48px'
            fontWeight='600'
            lineHeight='72px'
            color='yellow.500'
          >
            {language}
            <Text
              fontSize='24px'
              fontWeight='600'
              lineHeight='36px'
              color='gray.800'
            >
              línguas
            </Text>
          </Text>
        </Box>
        <Box align='center' justify='center'>
          <Text
            fontSize='48px'
            fontWeight='600'
            lineHeight='72px'
            color='yellow.500'
          >
            {city}
            <Text
              fontSize='24px'
              fontWeight='600'
              lineHeight='36px'
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
                <Image src='images/info.svg' ml='5px' />
              </Tooltip>
            </Text>
          </Text>
        </Box>
      </HStack>
      {/* <Image zIndex='5' src='airplane.svg' alt='aiplane' align='right' /> */}
    </Flex>
  );
}
