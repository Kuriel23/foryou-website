import type { GetStaticProps } from 'next';

import { SEO } from '@components/atoms/SEO';
import { Ranking } from '@components/organisms/Ranking';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import { RankingProvider } from '@contexts/RankingContext';
import { getUsersRanking, type UsersRanking } from '@services/getUsersRanking';

interface RankingPageProps {
  usersCoinsRanking: UsersRanking;
  usersLevelRanking: UsersRanking;
  usersRepRanking: UsersRanking;
}

export const getStaticProps: GetStaticProps = async () => {
  const [usersCoinsRanking, usersLevelRanking, usersRepRanking] =
    await Promise.all([
      getUsersRanking('coins'),
      getUsersRanking('level'),
      getUsersRanking('rep'),
    ]);

  return {
    props: {
      usersCoinsRanking,
      usersLevelRanking,
      usersRepRanking,
    },
    revalidate: 60,
  };
};

export default function RankingPage({
  usersCoinsRanking,
  usersLevelRanking,
  usersRepRanking,
}: RankingPageProps): JSX.Element {
  return (
    <DefaultLayout>
      <SEO />

      <RankingProvider>
        <Ranking
          usersCoinsRanking={usersCoinsRanking}
          usersLevelRanking={usersLevelRanking}
          usersRepRanking={usersRepRanking}
        />
      </RankingProvider>
    </DefaultLayout>
  );
}
