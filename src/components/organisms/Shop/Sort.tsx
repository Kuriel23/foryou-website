import {
  Text,
  HStack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Grid,
  GridItem,
  Input,
  Icon,
  Select,
} from '@chakra-ui/react';
import { CaretDown } from 'phosphor-react';

export function Sort(): JSX.Element {
  return (
    <HStack w="100%">
      <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem my="10px" colSpan={2}>
          <Text>Foram encontrados x produtos</Text>
        </GridItem>
        <GridItem colEnd={6}>
          <HStack>
            <Input
              variant="flushed"
              maxW="30%"
              placeholder="Pesquise aqui..."
            />
            <Select
              variant="filled"
              placeholder="Fundos para Perfil"
              maxW="35%"
              borderRadius="25px"
              bg="gray.700"
            >
              <option value="vips">Assinaturas</option>
            </Select>
            <Menu>
              <MenuButton
                color="white"
                bg="gray.700"
                p="10px"
                w="195px"
                borderRadius="25px"
              >
                Organizar por
                <Icon
                  as={CaretDown}
                  weight="fill"
                  my="-3px"
                  ml="5px"
                  color="gray.300"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Preços baixos</MenuItem>
                <MenuItem>Preços altos</MenuItem>
                <MenuItem>A a Z</MenuItem>
                <MenuItem>Z a A</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </GridItem>
      </Grid>
    </HStack>
  );
}
