import { useContext } from 'react';

import {
  ProfileContext,
  type ProfileContextData,
} from '@contexts/ProfileContext';

export function useProfile(): ProfileContextData {
  const context = useContext(ProfileContext);

  return context;
}
