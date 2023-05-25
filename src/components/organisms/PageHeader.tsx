import { HeaderLogo } from '../molecules/HeaderLogo';
import { HeaderNavigationItem } from '../molecules/HeaderNavigationItem';
import { HeaderProfile } from '../molecules/HeaderProfile';

export function PageHeader(): JSX.Element {
  return (
    <header className="w-full h-20 max-w-7xl mx-auto flex">
      <div className="w-full grid grid-cols-3 bg-red">
        <HeaderLogo />

        <nav className="flex items-center justify-center gap-4">
          <HeaderNavigationItem route="/blog" name="Blog" />
          <HeaderNavigationItem route="/about" name="Sobre" />
          <HeaderNavigationItem route="/rankings" name="Rankings" />
          <HeaderNavigationItem route="/contributors" name="Contribuidores" />
        </nav>

        <HeaderProfile
          username="izakdvlpr"
          avatarURL="https://cdn.discordapp.com/avatars/461273822360895491/d1e4bfb7472f6d28db12e0dc57e5c039.png"
        />
      </div>
    </header>
  );
}
