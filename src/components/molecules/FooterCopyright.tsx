export function FooterCopyright(): JSX.Element {
  return (
    <div className="flex flex-col text-end">
      <p className="text-black dark:text-white">
        Copyright © 2020 - {new Date().getFullYear()}
      </p>
      <p className="text-sm font-light text-gray-600">
        Todos os direitos reservados.
      </p>
    </div>
  );
}
