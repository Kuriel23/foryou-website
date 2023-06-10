import Image from 'next/image';

export function HeaderLogo(): JSX.Element {
  return (
    <a className="flex items-center" href="/">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="rounded-full bg-orange-400"
      />

      <h1 className="ml-2 text-3xl font-semibold text-white">For You</h1>
    </a>
  );
}
