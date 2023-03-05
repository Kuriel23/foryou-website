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

import {
  setValorSelecionado,
  setCategory,
  setSearch,
} from '@contexts/ShopContext';

export function Sort(): JSX.Element {
  const handleValorSelecionado = (valor: string): void => {
    setValorSelecionado(valor);
  };
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setCategory(event.target.value);
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearch(event.target.value);
  };
  return (
    <HStack w="100%">
      <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem my="10px" colSpan={2}>
          <Text>Foram encontrados X produtos</Text>
        </GridItem>
        <GridItem colEnd={6}>
          <HStack>
            <Input
              variant="flushed"
              maxW="30%"
              placeholder="Pesquise aqui..."
              onChange={handleInputChange}
            />
            <Select
              variant="filled"
              placeholder="Fundos para Perfil"
              maxW="35%"
              borderRadius="25px"
              bg="gray.700"
              onChange={handleCategoryChange}
            >
              <option value="vips">Assinaturas</option>
            </Select>
            <Menu isLazy>
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
              <MenuList defaultValue="priceasc">
                <MenuItem
                  value="priceasc"
                  onClick={() => handleValorSelecionado('priceasc')}
                >
                  Preços baixos
                </MenuItem>
                <MenuItem
                  value="pricedesc"
                  onClick={() => handleValorSelecionado('pricedesc')}
                >
                  Preços altos
                </MenuItem>
                <MenuItem
                  value="asc"
                  onClick={() => handleValorSelecionado('asc')}
                >
                  A a Z
                </MenuItem>
                <MenuItem
                  value="desc"
                  onClick={() => handleValorSelecionado('desc')}
                >
                  Z a A
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </GridItem>
      </Grid>
    </HStack>
  );
}
