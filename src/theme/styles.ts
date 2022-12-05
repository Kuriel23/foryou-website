import type { Styles } from '@chakra-ui/theme-tools';

export const styles: Styles = {
  global: () => ({
    '*:focus': {
      boxShadow: 'none !important',
    },
    'html': {
      scrollBehavior: 'smooth',
    },
    'body': {},
    'a': {
      _hover: {
        textDecoration: 'none',
      },
    },
  }),
};
