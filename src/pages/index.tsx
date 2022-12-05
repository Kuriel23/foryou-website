import { Home } from '@components/organisms/Home';
import { DefaultLayout } from '@components/templates/DefaultLayout';

export default function HomePage(): JSX.Element {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}
