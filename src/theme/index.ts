import { extendTheme } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';

export function customScrollBar(
  colorMode: 'light' | 'dark',
  props: Record<string, any> = {},
): Record<string, any> {
  const scrollbarFirstColor = 'orange.500';
  const scrollbarSecondColor = colorMode === 'light' ? 'gray.200' : 'gray.700';

  return {
    'scrollbarColor': `${scrollbarFirstColor} ${scrollbarSecondColor} !important;`,
    '::-webkit-scrollbar-thumb': {
      backgroundColor: `${scrollbarFirstColor}`,
    },
    '::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: scrollbarSecondColor,
    },
    ...props,
  };
}

export const theme = extendTheme({
  colors: {
    discord: '#5865F2',
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: 'orange.200',
        },
      },
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  styles: <Styles>{
    global: ({ colorMode }) => ({
      '*:focus': {
        boxShadow: 'none !important',
      },
      'html': {
        scrollBehavior: 'smooth',
        overflowX: 'hidden',
        ...customScrollBar(colorMode),
      },
      'a': {
        _hover: {
          textDecoration: 'none',
        },
      },
    }),
  },
});
