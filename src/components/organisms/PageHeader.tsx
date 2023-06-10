import { HeaderLogo } from '../molecules/Header/HeaderLogo';
import { HeaderNavigationItem } from '../molecules/Header/HeaderNavigationItem';
import { HeaderProfile } from '../molecules/Header/HeaderProfile';

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
          avatarURL="https://cdn.discordapp.com/avatars/882761234271834142/47873b3e2166727d41c2dc6e94b1a160.jpg?size=512"
        />
      </div>
    </header>
  );
}
