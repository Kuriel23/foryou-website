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
  onChangeRankingType: (type: RankingType) => void;
}

export const RankingContext = createContext<RankingContextData>(
  {} as RankingContextData,
);

export function RankingProvider({ children }: PropsWithChildren): JSX.Element {
  const [rankingType, setRankingType] = useState<RankingType>('coins');

  const onChangeRankingType = useCallback((type: RankingType) => {
    setRankingType(type);
  }, []);

  const value = useMemo(
    () => ({
      rankingType,
      onChangeRankingType,
    }),
    [rankingType, onChangeRankingType],
  );

  return (
    <RankingContext.Provider value={value}>{children}</RankingContext.Provider>
  );
}