import {
  Grid,
  GridItem,
  Text,
  Image,
  Icon,
  Center,
  Button,
} from '@chakra-ui/react';
import { Coins, ShoppingCartSimple } from 'phosphor-react';

import { category } from '@contexts/ShopContext';
import { Shop, ShopType } from '@data/shop';

export function ShopItens(): JSX.Element {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {category !== 'vips'
        ? Shop.Banners.sort((a: ShopType, b: ShopType) =>
            a.name.localeCompare(b.name),
          )
            .sort((a: ShopType, b: ShopType) => a.custo - b.custo)
            .map(({ name, preview, custo, code }) => (
              <GridItem
                key={code}
                bg="gray.700"
                p="10px"
                borderRadius={10}
                position="relative"
                height="100%"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Image minH="142px" src={preview} alt={name} />
                <Center>
                  <Text
                    as="b"
                    color="gray.300"
                    maxW="97%"
                    textAlign="center"
                    mt="10px"
                  >
                    {name}
                  </Text>
                </Center>
                <Text color="gray.500" textAlign="center" mt="5px">
                  <Icon
                    as={Coins}
                    weight="fill"
                    color="yellow"
                    mr="5px"
                    my="-3px"
                  />
                  {custo.toLocaleString('pt-BR')}
                </Text>
                <Button
                  borderRadius={10}
                  bg="#ebb78a"
                  color="black"
                  w="100%"
                  mt="15px"
                >
                  <Icon
                    as={ShoppingCartSimple}
                    weight="bold"
                    color="black"
                    mr="5px"
                    my="-3px"
                  />
                  Comprar
                </Button>
              </GridItem>
            ))
        : Shop.Vips.sort((a: ShopType, b: ShopType) =>
            a.name.localeCompare(b.name),
          )
            .sort((a: ShopType, b: ShopType) => a.custo - b.custo)
            .map(({ name, preview, custo, code }) => (
              <GridItem
                key={code}
                bg="gray.700"
                p="10px"
                borderRadius={10}
                position="relative"
                height="100%"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Image minH="142px" src={preview} alt={name} />
                <Center>
                  <Text
                    as="b"
                    color="gray.300"
                    maxW="97%"
                    textAlign="center"
                    mt="10px"
                  >
                    {name}
                  </Text>
                </Center>
                <Text color="gray.500" textAlign="center" mt="5px">
                  <Icon
                    as={Coins}
                    weight="fill"
                    color="yellow"
                    mr="5px"
                    my="-3px"
                  />
                  {custo.toLocaleString('pt-BR')}
                </Text>
                <Button
                  borderRadius={10}
                  bg="#ebb78a"
                  color="black"
                  w="100%"
                  mt="15px"
                >
                  <Icon
                    as={ShoppingCartSimple}
                    weight="bold"
                    color="black"
                    mr="5px"
                    my="-3px"
                  />
                  Comprar
                </Button>
              </GridItem>
            ))}
    </Grid>
  );
}
