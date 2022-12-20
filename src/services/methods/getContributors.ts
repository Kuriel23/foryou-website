import type { ContributorData } from '@interfaces/services';
import { contributors } from '@services/contributors';

export async function getContributors(): Promise<ContributorData[]> {
  const { data } = await contributors.get<ContributorData[]>('contributors');

  return data;
}
