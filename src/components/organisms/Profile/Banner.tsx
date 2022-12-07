import { Flex, Box } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Flex w="100%" bgImage="https://i.imgur.com/4sHcxI0.jpg" bgRepeat="no-repeat" bgSize="cover" bgPos="center" maxH={400} px={10} m="0 auto " justify="space-between" borderBottomRadius={12} >
    <Box bg="transparent" w="100%" h="400px"></Box>
    </Flex>
  );
}
