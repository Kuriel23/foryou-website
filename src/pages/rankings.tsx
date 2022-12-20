import type { GetStaticProps } from 'next';

import { SEO } from '@components/atoms/SEO';
import { Rankings } from '@components/organisms/Rankings';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import { RankingProvider } from '@contexts/RankingContext';
import type { UserRankingData } from '@interfaces/services';
import { RankingRepository } from '@lib/repositories/RankingRepository';

interface RankingPageProps {
  rankings: UserRankingData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const rankingRepository = new RankingRepository();

  const rankings = await rankingRepository.findUsersByCoins();

  return { props: { rankings } };
};

export default function RankingsPage({
  rankings,
}: RankingPageProps): JSX.Element {
  return (
    <DefaultLayout>
      <SEO />

      <RankingProvider initialData={{ rankings }}>
        <Rankings />
      </RankingProvider>
    </DefaultLayout>
  );
}
