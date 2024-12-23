import type { GetStaticProps } from 'next';

import { SEO } from '@components/atoms/SEO';
import { Contributors } from '@components/organisms/Contributors';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import type { ContributorData } from '@interfaces/services';
import { getContributors } from '@services/methods/getContributors';

interface ContributorsPageProps {
  contributors: ContributorData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const contributors = await getContributors();

  return {
    props: {
      contributors,
    },
  };
};

export default function ContributorsPage({
  contributors,
}: ContributorsPageProps): JSX.Element {
  return (
    <DefaultLayout>
      <SEO />

      <Contributors contributors={contributors} />
    </DefaultLayout>
  );
}
