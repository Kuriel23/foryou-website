import type { GetStaticProps } from 'next';

import { SEO } from '@components/atoms/SEO';
import { Ranking } from '@components/organisms/Ranking';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import { RankingProvider } from '@contexts/RankingContext';
import {
  getUsersRanking,
  type GetUsersRanking,
} from '@services/getUsersRanking';

interface RankingPageProps {
  usersCoinsRanking: GetUsersRanking;
  usersLevelRanking: GetUsersRanking;
  usersRepRanking: GetUsersRanking;
}

export const getStaticProps: GetStaticProps = async () => {
  const usersCoinsRanking = await getUsersRanking('coins');
  const usersLevelRanking = await getUsersRanking('level');
  const usersRepRanking = await getUsersRanking('rep');

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
