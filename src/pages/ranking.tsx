import { SEO } from '@components/atoms/SEO';
import { Ranking } from '@components/organisms/Ranking';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import { RankingProvider } from '@contexts/RankingContext';

export default function RankingPage(): JSX.Element {
  return (
    <DefaultLayout>
      <SEO />

      <RankingProvider>
        <Ranking />
      </RankingProvider>
    </DefaultLayout>
  );
}
