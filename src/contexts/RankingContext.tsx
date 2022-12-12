import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import {
  getUsersRanking,
  type RankingType,
  type UserRankingData,
} from '@services/getUsersRanking';

interface RankingProviderData {
  initialData: Record<string, any>;
}

export interface RankingContextData {
  rankingType: RankingType;
  firstUsers?: UserRankingData[];
  allUsers?: UserRankingData[];
  isLoading: boolean;
  updateRankingType: (type: RankingType) => Promise<void>;
}

export const RankingContext = createContext<RankingContextData>(
  {} as RankingContextData,
);

export function RankingProvider({
  initialData,
  children,
}: PropsWithChildren<RankingProviderData>): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState<UserRankingData[]>(
    initialData.usersRanking,
  );
  const [rankingType, setRankingType] = useState<RankingType>('coins');

  const updateRankingType = useCallback(async (type: RankingType) => {
    setRankingType(type);
    setIsLoading(true);

    const rankingUsers = await getUsersRanking(type);

    setUsers(rankingUsers);
    setIsLoading(false);
  }, []);

  const value = useMemo(
    () => ({
      rankingType,
      firstUsers: users.slice(0, 3),
      allUsers: users.slice(3, users.length),
      isLoading,
      updateRankingType,
    }),
    [rankingType, users, isLoading, updateRankingType],
  );

  return (
    <RankingContext.Provider value={value}>{children}</RankingContext.Provider>
  );
}
