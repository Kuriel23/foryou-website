import { Box } from '@chakra-ui/react';

import { Shop } from '@data/shop';
import { useProfile } from '@hooks/useProfile';

export function Banner(): JSX.Element {
  const { profile, isLoading } = useProfile();

  return (
    <Box
      w="100%"
      h={400}
      bgColor={isLoading ? 'gray.300' : (profile?.database.cor as string)}
    >
      {profile && (
        <Box
          w="100%"
          h="400px"
          bgImage={Shop.getBannerByCode(profile.database.equipado)?.preview}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPos="center"
        />
      )}
    </Box>
  );
}
