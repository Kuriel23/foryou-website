import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Profile } from '@components/organisms/Profile';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import { getApi } from '@services/getApi';

export default function ProfilePage(): JSX.Element {
  const router = useRouter();

  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchUser(): Promise<void> {
      try {
        const { data } = await getApi().get(`/api/profile/${id}`);
        setUser(data);
        setLoading(false);
      } catch (error) {
        if (error) setLoading(false);
      }
    }
    fetchUser();
  }, [id]);
  return (
    <DefaultLayout>
      <Profile user={user} isLoading={loading} />
    </DefaultLayout>
  );
}
