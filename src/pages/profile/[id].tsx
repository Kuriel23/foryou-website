import { Profile } from '@components/organisms/Profile';
import { DefaultLayout } from '@components/templates/DefaultLayout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ProfilePage(): JSX.Element {
  const router = useRouter();

  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await api.get(`/v1/users/${id}`);
        setUser(data);
        setLoading(false);
      } catch (error) {
        return 0;
      }
    }

    fetchUser();
  }, [id]);
  return (
    <DefaultLayout>
      <Profile />
    </DefaultLayout>
  );
}
