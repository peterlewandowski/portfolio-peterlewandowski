import featuredStackData from '../components/home/FeaturedStackdata.json';
import ProjectsData from '../components/home/ProjectsData.json';
import { ContactIcons as ContactUs } from '../components/home/ContactUs';
import { FeaturesImages as FeaturedStack } from '../components/home/FeaturedStack';
import { HeroContentLeft as Hero } from '../components/home/Hero';
import { BadgeCard as Projects } from '../components/home/Projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedStack {...featuredStackData} />
      <Projects {...ProjectsData} />
      <ContactUs />
    </>
  );
}
