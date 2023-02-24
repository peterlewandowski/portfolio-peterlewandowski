import * as sections from '../../sections';

import projectsData from '../../sections/ProjectsData.json';

export function Main() {
  return (
    <div id="main">
      <sections.AboutMe />
      <sections.TechStack />
      <sections.FeaturedProjects data={projectsData} />
      <sections.ContactMe />
    </div>
  );
}
