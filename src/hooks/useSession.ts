import type { Session } from 'next-auth';
import {
  useSession as nextAuthUseSession,
  type SessionContextValue,
} from 'next-auth/react';

type SessionData = SessionContextValue & {
  data?: Session & {
    user?: {
      id?: string | null;
    };
  };
};

export function useSession(): SessionData {
  return nextAuthUseSession() as SessionData;
}
