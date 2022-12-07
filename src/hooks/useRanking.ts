import { useContext } from 'react';

import {
  RankingContext,
  type RankingContextData,
} from '@contexts/RankingContext';

export function useRanking(): RankingContextData {
  const context = useContext(RankingContext);

  return context;
}
