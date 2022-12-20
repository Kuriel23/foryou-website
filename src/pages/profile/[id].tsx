import { useRouter } from 'next/router';

import { Profile } from '@components/organisms/Profile';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import { ProfileProvider } from '@contexts/ProfileContext';

export default function ProfilePage(): JSX.Element {
  const router = useRouter();

  const { id } = router.query as Record<'id', string>;

  return (
    <DefaultLayout>
      <ProfileProvider profileId={id}>
        <Profile />
      </ProfileProvider>
    </DefaultLayout>
  );
}
