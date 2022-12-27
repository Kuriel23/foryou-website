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
  Skeleton,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  SkeletonText,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { NotePencil } from 'phosphor-react';
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

  const { profile, isLoading, updateProfile } = useProfile();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = useCallback(
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
        minH="250px"
        gap={2}
        p={8}
        flexDir="column"
        borderRadius={12}
        bgColor={theme.cardBackground}
      >
        {isLoading ? (
          <>
            <Skeleton
              h="20px"
              w="100px"
              startColor="gray.300"
              endColor="gray.400"
            />

            <SkeletonText
              mt="4"
              noOfLines={4}
              spacing="4"
              skeletonHeight="4"
              startColor="gray.300"
              endColor="gray.400"
            />
          </>
        ) : (
          <>
            <Flex w="100%" align="center" justify="space-between" gap={2}>
              <Text fontSize="lg" fontWeight="bold" textTransform="uppercase">
                Biografia
              </Text>

              {session.data?.user?.id === profile?.user.id && (
                <Icon
                  as={NotePencil}
                  w="24px"
                  h="24px"
                  onClick={onOpen}
                  weight="fill"
                  cursor="pointer"
                />
              )}
            </Flex>

            <Text fontSize="sm" fontWeight="400">
              {profile?.database.biografia
                .replace('&nbsp;', ' ')
                .substring(0, 700)}
            </Text>
          </>
        )}
      </Flex>

      <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(6px)" />
        <ModalContent as="form" onSubmit={form.handleSubmit(handleSubmit)}>
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
              sx={{
                borderColor: form.formState.errors.biografia
                  ? 'red.500'
                  : 'inherit',
              }}
              _focus={{}}
              _hover={{}}
              _focusVisible={{}}
              {...form.register('biografia', { required: true })}
            />

            <Text as="p" mt={2} color="red.500">
              {form.formState.errors.biografia?.message}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="green">
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
