import { createStyles, SimpleGrid, Text, ThemeIcon, Grid, Col, Container } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  container: { paddingTop: 40 },
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconReceiptOff,
    title: 'React',
    description: 'Currently focusing on building React applications',
  },
  {
    icon: IconFileCode,
    title: 'TypeScript',
    description: 'I really enjoy JavaScript and have added TypeScript to my recent projects',
  },
  {
    icon: IconCircleDotted,
    title: 'MongoDB',
    description: 'The document databases in Mongo have been a staple in my recent projects.',
  },
  {
    icon: IconFlame,
    title: 'Express',
    description: 'When it comes to backend, RestAPIs in Express have been my jam.',
  },
];

export function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div id="tech" className={classes.container}>
      <Container>
        <div className={classes.wrapper}>
          <Grid gutter={80}>
            <Col span={12} md={12}>
              <SimpleGrid cols={4} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {items}
              </SimpleGrid>
            </Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
