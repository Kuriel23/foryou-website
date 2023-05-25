import type { HTMLAttributes } from 'react';

import { PageFooter } from '../organisms/PageFooter';
import { PageHeader } from '../organisms/PageHeader';

export type PageTemplateProps = HTMLAttributes<HTMLElement>;

export function PageTemplate({
  children,
  ...rest
}: PageTemplateProps): JSX.Element {
  return (
    <>
      <PageHeader />

      <main className="w-full h-full max-w-7xl mx-auto flex flex-col" {...rest}>
        {children}
      </main>

      <PageFooter />
    </>
  );
}
