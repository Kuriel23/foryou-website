'use client';

import { Moon, Sun } from '@phosphor-icons/react';

import useLocalStorage from '@/hooks/useLocalStorage';

export function FooterDarkMode(): JSX.Element {
  const [value, setValue] = useLocalStorage('theme', '');
  function toggleColorMode(): void {
    return value === 'dark' || !value ? setValue('light') : setValue('dark');
  }
  return (
    <button
      type="button"
      className="ml-6 bg-orange-500 text-white dark:text-gray-800 w-12 h-12 flex justify-center rounded-lg"
      onClick={toggleColorMode}
    >
      {value === 'dark' ? (
        <Moon size={24} weight="light" className="my-auto" />
      ) : (
        <Sun size={24} weight="light" className="my-auto" />
      )}
    </button>
  );
}
