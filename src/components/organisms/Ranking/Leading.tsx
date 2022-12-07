import { chakra, Box, Flex, Avatar, Text, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CrownSimple } from 'phosphor-react';

const _BoxAnimated = chakra(motion.div);

export function Leading(): JSX.Element {
  const { colors } = useTheme();

  return (
    <Box bgColor="green.200">
      <Flex w="100%" maxW={1240} px={10} m="0 auto">
        <Flex w="100%" h="450px" align="flex-end" justify="center" gap={20}>
          <Flex flexDir="column" align="center" position="relative">
            <Flex
              flexDir="column"
              align="center"
              gap={4}
              position="absolute"
              top="-120px"
            >
              <Text fontSize="2xl" fontWeight={900} color="white">
                2
              </Text>

              <Avatar
                w="100px"
                h="100px"
                borderWidth="5px"
                borderStyle="solid"
                borderColor="gray.200"
              />
            </Flex>

            <Box w="90px" h="150px" bgColor="gray.200" />
          </Flex>

          <Flex flexDir="column" align="center" position="relative">
            <Flex
              flexDir="column"
              align="center"
              gap={4}
              position="absolute"
              top="-170px"
            >
              <Text fontSize="2xl" fontWeight={900} color="white">
                1
              </Text>

              <CrownSimple
                size={32}
                weight="fill"
                color={colors.yellow['200']}
              />

              <Avatar
                w="100px"
                h="100px"
                borderWidth="5px"
                borderStyle="solid"
                borderColor="yellow.200"
              />
            </Flex>

            <Box w="90px" h="220px" bgColor="yellow.200" />
          </Flex>

          <Flex flexDir="column" align="center" position="relative">
            <Flex
              flexDir="column"
              align="center"
              gap={4}
              position="absolute"
              top="-120px"
            >
              <Text fontSize="2xl" fontWeight={900} color="white">
                3
              </Text>

              <Avatar
                w="100px"
                h="100px"
                borderWidth="5px"
                borderStyle="solid"
                borderColor="orange.200"
              />
            </Flex>

            <Box w="90px" h="100px" bgColor="orange.200" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
