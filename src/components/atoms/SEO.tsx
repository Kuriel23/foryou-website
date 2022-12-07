/* eslint-disable react/require-default-props */

import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({
  title = 'Animes Online Games - Discord Bot',
  description = '',
  children,
}: PropsWithChildren<SEOProps>): JSX.Element {
  return (
    <Head>
      <title>{title}</title>

      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://panda.animesgamesbot.ml/" />
      <link itemProp="url" href="https://panda.animesgamesbot.ml/" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#9ae6b4" />

      {/* OpenGraph */}

      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://panda.animesgamesbot.ml/" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {children}
    </Head>
  );
}
