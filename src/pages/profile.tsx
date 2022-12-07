import { Profile } from '@components/organisms/Profile';
import { DefaultLayout } from '@components/templates/DefaultLayout';

export default function ProfilePage(): JSX.Element {
  return (
    <DefaultLayout>
      <Profile />
    </DefaultLayout>
  );
}
