import { useQueries } from 'react-query';

import {
  getContributors,
  type ContributorData,
} from '@services/getContributors';
import { getTeam, type TeamData } from '@services/getTeam';

interface InitialDataProps {
  team: TeamData[];
  contributors: ContributorData[];
}

interface UseContributorsReturnData {
  team: TeamData[];
  contributors: ContributorData[];
}

export function useContributors(
  initialData: InitialDataProps,
): UseContributorsReturnData {
  const [team, contributors] = useQueries([
    {
      queryKey: ['team'],
      queryFn: getTeam,
      initialData: initialData.team,
    },
    {
      queryKey: ['contributors'],
      queryFn: getContributors,
      initialData: initialData.contributors,
    },
  ]);

  return {
    team: team.data as TeamData[],
    contributors: contributors.data as ContributorData[],
  };
}
