import type { GetStaticProps } from 'next';

import { SEO } from '@components/atoms/SEO';
import { Ranking } from '@components/organisms/Ranking';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import { RankingProvider } from '@contexts/RankingContext';
import { getUsersCoinsList } from '@lib/prisma/getUsersCoinsList';
import type { UserRankingData } from '@services/getUsersRanking';

interface RankingPageProps {
  usersRanking: UserRankingData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const usersRanking = await getUsersCoinsList();

  return {
    props: { usersRanking },
    revalidate: 60,
  };
};

export default function RankingPage({
  usersRanking,
}: RankingPageProps): JSX.Element {
  return (
    <DefaultLayout>
      <SEO />

      <RankingProvider initialData={{ usersRanking }}>
        <Ranking />
      </RankingProvider>
    </DefaultLayout>
  );
}
