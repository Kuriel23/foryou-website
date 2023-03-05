import { SEO } from '@components/atoms/SEO';
import { Blog } from '@components/organisms/Blog';
import { DefaultLayout } from '@components/templates/DefaultLayout';

export default function BlogPage(): JSX.Element {
  return (
    <DefaultLayout>
      <SEO />
      <Blog />
    </DefaultLayout>
  );
}
