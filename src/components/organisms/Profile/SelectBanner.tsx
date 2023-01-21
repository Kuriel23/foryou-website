/* eslint-disable react/jsx-no-useless-fragment */

import {
  IconButton,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorMode,
  Button,
  useTheme,
  Flex,
  Grid,
} from '@chakra-ui/react';
import { CheckCircle, Image } from 'phosphor-react';
import { rgba } from 'polished';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { LojaBanner, type LojaBannerType } from '@data/loja';
import { useProfile } from '@hooks/useProfile';
import { useSession } from '@hooks/useSession';
import { customScrollBar } from '@theme';

export function SelectBanner(): JSX.Element {
  const session = useSession();

  const { profile, updateProfile } = useProfile();

  const [bannerSelected, updateBannerSelected] = useState(
    profile?.database.equipado as string,
  );

  const { colors } = useTheme();

  const { colorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const form = useForm();

  const theme = {
    buttonBackground: useColorModeValue('gray.100', 'gray.600'),
  };

  const handleUpdateBannerSelected = useCallback((bannerCode: string) => {
    updateBannerSelected(bannerCode);
  }, []);

  const handleSubmit = useCallback(() => {
    updateProfile({
      equipado: bannerSelected,
    });

    onClose();
  }, [updateProfile, bannerSelected, onClose]);

  return (
    <>
      {session.data?.user?.id === profile?.user.id && (
        <>
          <IconButton
            position="absolute"
            right="24px"
            top="-60px"
            aria-label="Change banner"
            bgColor={theme.buttonBackground}
            icon={<Icon as={Image} w="24px" h="24px" />}
            onClick={onOpen}
            _hover={{}}
            _active={{}}
            _focus={{}}
          />

          <Modal
            size="2xl"
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            scrollBehavior="inside"
          >
            <ModalOverlay backdropFilter="blur(6px)" />
            <ModalContent as="form" onSubmit={form.handleSubmit(handleSubmit)}>
              <ModalHeader>
                <Text fontSize="lg" fontWeight="bold" textTransform="uppercase">
                  Alterar Banner
                </Text>

                <Text as="p" fontWeight="300" fontSize="sm">
                  Selecione um banner que será exibido em seu perfil.
                </Text>
              </ModalHeader>

              <ModalCloseButton />

              <ModalBody maxH="350px" sx={customScrollBar(colorMode)}>
                <Grid
                  templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
                  gap={4}
                >
                  {profile?.database.loja &&
                    Object.entries(profile.database.loja)
                      .filter(
                        ([_, bannerStatus]) => bannerStatus === 'Comprado.',
                      )
                      .map(([bannerCode], index) => {
                        const position = index + 1;

                        const banner = LojaBanner.getBannerByCode(
                          bannerCode,
                        ) as LojaBannerType;

                        return (
                          <Flex
                            key={position}
                            position="relative"
                            cursor="pointer"
                            bgImage={banner.preview}
                            bgSize="cover"
                            bgPos="center"
                            h="100px"
                            w="200px"
                            borderRadius="8px"
                            sx={{
                              ...(bannerSelected === bannerCode && {
                                borderWidth: '4px',
                                borderStyle: 'solid',
                                borderColor: 'orange.500',
                              }),
                            }}
                            onClick={() =>
                              handleUpdateBannerSelected(bannerCode)
                            }
                          >
                            <Flex
                              position="absolute"
                              w="100%"
                              h="100%"
                              align="center"
                              justify="center"
                              sx={{
                                ...(bannerSelected === bannerCode && {
                                  bgColor: rgba(colors.orange[500], 0.6),
                                }),
                              }}
                            >
                              {bannerSelected === bannerCode && (
                                <Icon
                                  as={CheckCircle}
                                  w="40px"
                                  h="40px"
                                  weight="fill"
                                  color="white"
                                />
                              )}
                            </Flex>
                          </Flex>
                        );
                      })}
                </Grid>
              </ModalBody>

              <ModalFooter>
                <Button type="submit" colorScheme="green">
                  Salvar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}
