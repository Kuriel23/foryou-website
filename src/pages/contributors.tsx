import type { GetStaticProps } from 'next';

import { SEO } from '@components/atoms/SEO';
import { Contributors } from '@components/organisms/Contributors';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import { useContributors } from '@hooks/useContributors';
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

export default function ContributorsPage(
  props: ContributorsPageProps,
): JSX.Element {
  const { team, contributors } = useContributors({
    team: props.team,
    contributors: props.contributors,
  });

  return (
    <DefaultLayout>
      <SEO />

      <Contributors team={team} contributors={contributors} />
    </DefaultLayout>
  );
}

/* eslint react/destructuring-assignment: off */
