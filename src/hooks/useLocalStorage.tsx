import { useState } from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => void;
type UseLocalStorage<T> = (key: string, initialValue: T) => [T, SetValue<T>];

const useLocalStorage: UseLocalStorage<string> = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  });

  const setValue: SetValue<string> = value => {
    const valueToStore = value instanceof Function ? value(state) : value;
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
    setState(value);
  };

  return [state, setValue];
};
export default useLocalStorage;
