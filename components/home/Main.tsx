import projectsData from '../sections/ProjectsData.json';
import { ContactIcons as ContactMe } from '../sections/ContactMe';
import { FeaturesImages as FeaturedProjects } from '../sections/FeaturedProjects';
import { FeaturesTitle as TechStack } from '../sections/TechStack';

export default function Main() {
  return (
    <div id="main">
      <TechStack />
      <FeaturedProjects data={projectsData} />
      <ContactMe />
    </div>
  );
}
