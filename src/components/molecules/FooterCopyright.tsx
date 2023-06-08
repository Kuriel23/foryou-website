export function FooterCopyright(): JSX.Element {
  return (
    <div className="flex flex-col text-end">
      <p className="text-black dark:text-white">
        Copyright © 2021 - {new Date().getFullYear()} For You.
      </p>
      <p className="text-sm font-light text-gray-600 dark:text-gray-400">
        Todos os direitos reservados.
      </p>
    </div>
  );
}
