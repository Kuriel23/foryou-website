import { HomeCategories } from '../molecules/Home/HomeCategories';
import { HomeExamples } from '../molecules/Home/HomeExamples';
import { HomeInfo } from '../molecules/Home/HomeInfo';
import { HomeMain } from '../molecules/Home/HomeMain';

export function Home(): JSX.Element {
  return (
    <div className="flex flex-col space-y-6">
      <HomeMain />
      <HomeCategories />
      <HomeInfo />
      <HomeExamples />
    </div>
  );
}
