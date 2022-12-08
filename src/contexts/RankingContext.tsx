import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import { RankingType } from '@services/getUsersRanking';

export interface RankingContextData {
  rankingType: RankingType;
  updateRankingType: (type: RankingType) => void;
}

export const RankingContext = createContext<RankingContextData>(
  {} as RankingContextData,
);

export function RankingProvider({ children }: PropsWithChildren): JSX.Element {
  const [rankingType, setRankingType] = useState<RankingType>('coins');

  const updateRankingType = useCallback((type: RankingType) => {
    setRankingType(type);
  }, []);

  const value = useMemo(
    () => ({
      rankingType,
      updateRankingType,
    }),
    [rankingType, updateRankingType],
  );

  return (
    <RankingContext.Provider value={value}>{children}</RankingContext.Provider>
  );
}
