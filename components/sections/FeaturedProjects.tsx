import { Text, Container, SimpleGrid, createStyles } from '@mantine/core';
// import IMAGES from './images';
import { BadgeCard as ProjectCard } from './Projects';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 50,
    paddingBottom: 50,
  },

  item: {
    display: 'flex',
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.xl,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
}));

// interface FeatureImage {
//   image: string;
//   title: React.ReactNode;
//   description: React.ReactNode;
// }
interface ProjectData {
  order: number;
  image: string;
  title: string;
  type: string;
  description: string;
  badges: {
    emoji: string;
    label: string;
  }[];
  links: {
    live: string;
    repo: { front: string; api: string };
  };
}

interface FeaturesImagesProps {
  data: ProjectData[];
}

export function FeaturesImages({ data }: FeaturesImagesProps) {
  const { classes } = useStyles();

  const projects = data.map((item: ProjectData) => (
    <div className={classes.item} key={item.order}>
      <ProjectCard {...item} />
    </div>
  ));

  return (
    <div id="projects" style={{ scrollMarginTop: '56px' }}>
      <Container size="xl" className={classes.wrapper}>
        <Text className={classes.supTitle}>Featured Projects</Text>

        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 700, cols: 1, spacing: 40 }]}
          style={{ marginTop: 30 }}
        >
          {projects}
        </SimpleGrid>
      </Container>
    </div>
  );
}
