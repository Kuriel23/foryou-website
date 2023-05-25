import Image from 'next/image';

export function HeaderLogo(): JSX.Element {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="rounded-full bg-orange-400"
      />

      <h1 className="ml-2 text-3xl font-semibold">For You</h1>
    </div>
  );
}
