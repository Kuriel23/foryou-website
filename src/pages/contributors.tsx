import { useQueries } from '@tanstack/react-query';
import type { GetStaticProps } from 'next';

import { SEO } from '@components/atoms/SEO';
import { Contributors } from '@components/organisms/Contributors';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import {
  getContributors,
  type ContributorData,
} from '@services/getContributors';
import { getTeam, type TeamData } from '@services/getTeam';

interface ContributorsPageProps {
  team: TeamData[];
  contributors: ContributorData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const team = await getTeam();
  const contributors = await getContributors();

  return {
    props: { team, contributors },
    revalidate: 60,
  };
};

export default function ContributorsPage({
  team,
  contributors,
}: ContributorsPageProps): JSX.Element {
  const results = useQueries({
    queries: [
      { queryKey: ['team'], queryFn: getTeam, initialData: team },
      {
        queryKey: ['contributors'],
        queryFn: getContributors,
        initialData: contributors,
      },
    ],
  });

  return (
    <DefaultLayout>
      <SEO />

      <Contributors
        team={results[0].data as TeamData[]}
        contributors={results[1].data as ContributorData[]}
      />
    </DefaultLayout>
  );
}
