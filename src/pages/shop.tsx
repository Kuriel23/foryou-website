import { SEO } from '@components/atoms/SEO';
import { Shop } from '@components/organisms/Shop';
import { DefaultLayout } from '@components/templates/DefaultLayout';

export default function ShopPage(): JSX.Element {
  return (
    <DefaultLayout>
      <SEO />
      <Shop />
    </DefaultLayout>
  );
}
