import { Ranking } from '@components/organisms/Ranking';
import { DefaultLayout } from '@components/templates/DefaultLayout';

export default function RankingPage(): JSX.Element {
  return (
    <DefaultLayout>
      <Ranking />
    </DefaultLayout>
  );
}
