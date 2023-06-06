'use client';

import { Moon, Sun } from '@phosphor-icons/react';

import useLocalStorage from '@/hooks/useLocalStorage';

export function PageFooter(): JSX.Element {
  const [value, setValue] = useLocalStorage('theme', '');
  function toggleColorMode(): void {
    return value === 'dark' || !value ? setValue('light') : setValue('dark');
  }

  return (
    <footer>
      <div className="dark:bg-gray-700 bg-gray-200">
        <div className="w-100 p-10 gap-8 max-w-[1240px] px-0 mx-auto flex flex-col">
          <div className="w-100 flex items-center justify-between">
            <p className="text-black dark:text-white">
              Site desenvolvido com muito ❤️ por
              <a
                href="https://izakdvlpr.com/"
                className="font-bold mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Izak
              </a>
              e
              <a
                href="https://www.kurieldev.tk/"
                className="font-bold mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kuriel
              </a>
            </p>
            <div className="flex">
              <div className="flex flex-col text-end">
                <p className="text-black dark:text-white">
                  Copyright © 2020 - {new Date().getFullYear()}
                </p>
                <p className="text-sm font-light text-gray-600">
                  Todos os direitos reservados.
                </p>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
