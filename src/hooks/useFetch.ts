import useSWR, { type SWRResponse } from 'swr';

import { api } from '@services/api';

export function useFetch<D = any, E = any>(url: string): SWRResponse<D, E> {
  const { data, error, isLoading, isValidating, mutate } = useSWR<D>(
    url,
    async baseURL => {
      const response = await api.get(baseURL);

      return response.data;
    },
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}
