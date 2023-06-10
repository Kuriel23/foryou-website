'use client';

import { CaretDown } from '@phosphor-icons/react';
import Image from 'next/image';

export interface HeaderProfileProps {
  username: string;
  avatarURL: string;
}

export function HeaderProfile({
  username,
  avatarURL,
}: HeaderProfileProps): JSX.Element {
  return (
    <div className="flex items-center justify-end">
      <Image
        src={avatarURL}
        alt={username}
        width={40}
        height={40}
        className="rounded-full bg-orange-400"
      />

      <span className="inline-flex ml-2 text-lg font-medium text-white">
        {username} <CaretDown size={16} weight="light" />
      </span>
    </div>
  );
}
