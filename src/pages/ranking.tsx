import type { GetStaticProps } from 'next';
import { useState } from 'react';

import { SEO } from '@components/atoms/SEO';
import { Ranking } from '@components/organisms/Ranking';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import {
  getUsersRanking,
  type RankingType,
  type GetUsersRanking,
} from 'services/getUsersRanking';

interface RankingPageProps {
  firstUsers: GetUsersRanking;
  allUsers: GetUsersRanking;
}

export const getStaticProps: GetStaticProps = async () => {
  const usersRanking = await getUsersRanking('coins');

  const firstUsers = usersRanking.slice(0, 3);
  const allUsers = usersRanking.slice(3, usersRanking.length);

  return {
    props: { firstUsers, allUsers },
    revalidate: 60,
  };
};

export default function RankingPage({
  firstUsers,
  allUsers,
}: RankingPageProps): JSX.Element {
  const [rankingType, setRankingType] = useState<RankingType>('coins');

  return (
    <DefaultLayout>
      <SEO />

      <Ranking
        firstUsers={firstUsers}
        allUsers={allUsers}
        rankingType={rankingType}
        setRankingType={setRankingType}
      />
    </DefaultLayout>
  );
}
