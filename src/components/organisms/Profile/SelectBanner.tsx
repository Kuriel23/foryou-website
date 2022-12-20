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
  Button,
  Textarea,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Image } from 'phosphor-react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useProfile } from '@hooks/useProfile';
import { useSession } from '@hooks/useSession';

interface FormData {
  biografia: string;
}

const schema = z.object({
  equipado: z.string(),
});

export function SelectBanner(): JSX.Element {
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
    buttonBackground: useColorModeValue('gray.100', 'gray.600'),
  };

  return (
    <>
      {session.data.user?.id === profile?.user.id && (
        <IconButton
          position="absolute"
          right="32px"
          top="-60px"
          aria-label="Change banner"
          bgColor={theme.buttonBackground}
          icon={<Icon as={Image} w="20px" h="20px" />}
          onClick={onOpen}
          _hover={{}}
          _active={{}}
          _focus={{}}
        />
      )}

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
