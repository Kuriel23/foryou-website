import Link from 'next/link';

export interface HeaderNavigationItemProps {
  route: string;
  name: string;
}

export function HeaderNavigationItem({
  route,
  name,
}: HeaderNavigationItemProps): JSX.Element {
  return (
    <Link
      href={route}
      className="text-lg font-light transition-colors hover:text-orange-400"
    >
      {name}
    </Link>
  );
}
