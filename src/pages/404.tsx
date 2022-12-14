import { SEO } from '@components/atoms/SEO';
import { NotFound } from '@components/organisms/NotFound';

export default function NotFoundPage(): JSX.Element {
  return (
    <>
      <SEO />

      <NotFound />
    </>
  );
}
