import type { GetStaticProps } from 'next';

import { SEO } from '@components/atoms/SEO';
import { Contributors } from '@components/organisms/Contributors';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import type { ContributorData } from '@interfaces/services';
import { getContributors } from '@services/methods/getContributors';

interface ContributorsPageProps {
  users: ContributorData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await getContributors();

  return {
    props: {
      users,
    },
  };
};

export default function ContributorsPage({
  users,
}: ContributorsPageProps): JSX.Element {
  return (
    <DefaultLayout>
      <SEO />

      <Contributors users={users} />
    </DefaultLayout>
  );
}
