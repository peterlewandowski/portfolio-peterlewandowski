import * as sections from '../../sections';

import projectsData from '../../sections/ProjectsData.json';

export function Main() {
  return (
    <div id="main" style={{ scrollMarginTop: '56px' }}>
      <sections.AboutMe />
      <sections.TechStack />
      <sections.FeaturedProjects data={projectsData} />
      <sections.ContactMe />
    </div>
  );
}
