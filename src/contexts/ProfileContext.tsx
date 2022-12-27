import { useRouter } from 'next/router';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import { useFetch } from '@hooks/useFetch';
import type { ProfileData } from '@interfaces/services';
import { api } from '@services/api';

interface ProfileProviderData {
  profileId: string;
}

export interface ProfileContextData {
  profile?: ProfileData;
  error: any;
  isLoading: boolean;
  isError: boolean;
  updateProfile: (data: Record<string, any>) => Promise<void>;
}

export const ProfileContext = createContext<ProfileContextData>(
  {} as ProfileContextData,
);

export function ProfileProvider({
  profileId,
  children,
}: PropsWithChildren<ProfileProviderData>): JSX.Element {
  const router = useRouter();

  const [isLoading, updateLoading] = useState(true);

  const {
    data: profile,
    error,
    mutate,
  } = useFetch<ProfileData>(`profile/${profileId}`);

  const updateProfile = useCallback(
    async (data: Record<string, any>) => {
      await api.patch(`profile/${profileId}`, data);

      mutate({
        ...profile,
        database: {
          ...profile?.database,
          biografia: data.biografia,
        },
      } as any);
    },
    [profileId, mutate, profile],
  );

  const value = useMemo(
    () => ({
      profile,
      error,
      isLoading,
      isError: Boolean(error),
      updateProfile,
    }),
    [profile, error, isLoading, updateProfile],
  );

  useEffect(() => {
    if (error) {
      router.push('/');
    }

    if (profile) {
      updateLoading(false);
    }
  }, [error, router, profile]);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
