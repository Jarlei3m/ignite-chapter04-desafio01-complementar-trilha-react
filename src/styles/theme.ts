import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#F5F8FA',
      '200': '#DADADA',
      '500': '#47585B',
      '700': '#999999',
      '800': '#47585B',
    },
    yellow: {
      '200': 'rgba(255, 186, 8, 0.5)',
      '500': '#FFBA08',
    },
  },

  fonts: {
    body: 'Poppins',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500',
      },
    },
  },
});
