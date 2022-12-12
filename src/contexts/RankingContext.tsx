import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import { useQuery, useQueryClient } from 'react-query';

import {
  getUsersRanking,
  type RankingType,
  type UsersRanking,
} from '@services/getUsersRanking';

export interface RankingContextData {
  rankingType: RankingType;
  firstUsers?: UsersRanking;
  allUsers?: UsersRanking;
  isLoading: boolean;
  updateRankingType: (type: RankingType) => Promise<void>;
}

export const RankingContext = createContext<RankingContextData>(
  {} as RankingContextData,
);

export function RankingProvider({ children }: PropsWithChildren): JSX.Element {
  const queryClient = useQueryClient();

  const [rankingType, setRankingType] = useState<RankingType>('coins');

  const { data: usersRanking, isLoading } = useQuery({
    queryKey: ['usersRanking', rankingType],
    queryFn: () => getUsersRanking(rankingType),
  });

  const updateRankingType = useCallback(
    async (type: RankingType) => {
      setRankingType(type);

      await queryClient.prefetchQuery(['usersRanking', rankingType], () =>
        getUsersRanking(rankingType),
      );
    },
    [queryClient, rankingType],
  );

  const value = useMemo(
    () => ({
      rankingType,
      firstUsers: usersRanking?.slice(0, 3),
      allUsers: usersRanking?.slice(3, usersRanking?.length),
      isLoading,
      updateRankingType,
    }),
    [rankingType, usersRanking, isLoading, updateRankingType],
  );

  return (
    <RankingContext.Provider value={value}>{children}</RankingContext.Provider>
  );
}
