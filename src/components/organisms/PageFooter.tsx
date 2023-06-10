import { FooterCopyright } from '../molecules/Footer/FooterCopyright';
import { FooterCredits } from '../molecules/Footer/FooterCredits';

export function PageFooter(): JSX.Element {
  return (
    <footer className="bg-gray-700">
      <div className="w-100 p-10 gap-8 max-w-[1240px] px-0 mx-auto flex flex-col">
        <div className="w-100 flex items-center justify-between">
          <FooterCredits />
          <div className="flex">
            <FooterCopyright />
          </div>
        </div>
      </div>
    </footer>
  );
}
