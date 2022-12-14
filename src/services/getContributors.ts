import { getContributorsService } from './getContributorsService';

export interface ContributorData {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  status: 'dnd' | 'online' | 'idle' | 'offline' | null;
  avatar: string;
}

export async function getContributors(): Promise<ContributorData[]> {
  const { data } = await getContributorsService().get<ContributorData[]>(
    'contributors',
  );

  return data;
}
