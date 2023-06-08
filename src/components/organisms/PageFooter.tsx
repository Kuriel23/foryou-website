'use client';

import { FooterCopyright } from '../molecules/FooterCopyright';
import { FooterCredits } from '../molecules/FooterCredits';
import { FooterDarkMode } from '../molecules/FooterDarkMode';

export function PageFooter(): JSX.Element {
  return (
    <footer className="dark:bg-gray-700 bg-gray-200">
      <div className="w-100 p-10 gap-8 max-w-[1240px] px-0 mx-auto flex flex-col">
        <div className="w-100 flex items-center justify-between">
          <FooterCredits />
          <div className="flex">
            <FooterCopyright />
            <FooterDarkMode />
          </div>
        </div>
      </div>
    </footer>
  );
}
