import { DefaultLayout } from '@components/templates/DefaultLayout';
import { Ranking } from '@components/organisms/Ranking';

export default function RankingPage(): JSX.Element {
  return (
    <DefaultLayout>
      <Ranking />
    </DefaultLayout>
  );
}
