export type MemberStatus = 'dnd' | 'online' | 'idle' | 'offline' | null;

export interface MemberData {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  status?: MemberStatus;
  avatar: string;
}

export interface ContributorData {
  id: string;
  name: string;
  hexColor: string;
  members: MemberData[];
}
