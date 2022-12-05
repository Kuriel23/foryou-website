import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { config } from './config';
import { fonts } from './fonts';
import { styles } from './styles';

export const theme = extendTheme({
  colors,
  config,
  fonts,
  styles,
});
