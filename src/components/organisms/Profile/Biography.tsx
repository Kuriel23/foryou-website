import {
  Flex,
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
  Button,
  Textarea,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Pencil } from 'phosphor-react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useProfile } from '@hooks/useProfile';
import { useSession } from '@hooks/useSession';

interface FormData {
  biografia: string;
}

const schema = z.object({
  biografia: z
    .string({ required_error: 'Este campo é obrigatório!' })
    .min(10, { message: 'A biografia deve ser maior que 10 caracteres!' })
    .max(700, {
      message: 'A biografia deve ser menor ou igual a 700 caracteres!',
    }),
});

export function Biography(): JSX.Element {
  const session = useSession();

  const { profile, updateProfile } = useProfile();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      updateProfile(data);

      onClose();
    },
    [updateProfile, onClose],
  );

  const theme = {
    cardBackground: useColorModeValue('gray.200', 'gray.700'),
    buttonBackground: useColorModeValue('gray.100', 'gray.600'),
  };

  return (
    <>
      <Flex
        w="100%"
        minH="250px"
        maxH="max-content"
        maxW="950px"
        gap={2}
        p={8}
        flexDir="column"
        borderRadius={12}
        bgColor={theme.cardBackground}
      >
        <Flex w="100%" align="center" gap={2}>
          <Text fontSize="lg" fontWeight="bold" textTransform="uppercase">
            Biografia
          </Text>

          {session.data?.user?.id === profile?.user.id && (
            <Icon
              as={Pencil}
              w="24px"
              h="24px"
              onClick={onOpen}
              cursor="pointer"
            />
          )}
        </Flex>
        <Text fontSize="sm" fontWeight="400">
          {profile?.database.biografia.replace('&nbsp;', ' ').substring(0, 700)}
        </Text>
      </Flex>

      <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <Text fontSize="lg" fontWeight="bold" textTransform="uppercase">
              Alterar Biografia
            </Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Textarea
              resize="none"
              h="300px"
              defaultValue={profile?.database.biografia}
              placeholder="Escreva uma linda biografia que será exibida em vosso perfil."
              sx={{ borderColor: errors.biografia ? 'red.500' : 'inherit' }}
              _focus={{}}
              _hover={{}}
              _focusVisible={{}}
              {...register('biografia', { required: true })}
            />

            <Text as="p" mt={2} color="red.500">
              {errors.biografia?.message}
            </Text>
          </ModalBody>

          <ModalFooter gap={2}>
            <Button type="submit" colorScheme="green">
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
