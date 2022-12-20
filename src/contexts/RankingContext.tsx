import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import type { RankingType, UserRankingData } from '@interfaces/services';
import { getRankings } from '@services/methods/getRankings';

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

  const [rankings, setRankings] = useState<UserRankingData[]>(
    initialData.rankings,
  );
  const [rankingType, setRankingType] = useState<RankingType>('coins');

  const updateRankingType = useCallback(async (type: RankingType) => {
    setRankingType(type);
    setIsLoading(true);

    const rankingsData = await getRankings(type);

    setRankings(rankingsData);
    setIsLoading(false);
  }, []);

  const value = useMemo(
    () => ({
      rankingType,
      firstUsers: rankings.slice(0, 3),
      allUsers: rankings.slice(3, rankings.length),
      isLoading,
      updateRankingType,
    }),
    [rankingType, rankings, isLoading, updateRankingType],
  );

  return (
    <RankingContext.Provider value={value}>{children}</RankingContext.Provider>
  );
}
