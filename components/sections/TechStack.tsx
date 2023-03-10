import {
  createStyles,
  SimpleGrid,
  Text,
  Container,
  Card,
  Stack,
  Group,
  Center,
} from '@mantine/core';
import { IconBrandReact, IconFlame, IconBrandTypescript } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },
  cardTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
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
    icon: IconBrandReact,
    title: 'React',
    description: 'Currently focusing on building React applications',
  },
  {
    icon: IconBrandTypescript,
    title: 'TypeScript',
    description: 'I really enjoy JavaScript and have added TypeScript to my recent projects',
  },
  {
    icon: IconFlame,
    title: 'NodeJS + Express',
    description: 'When it comes to backend, RestAPIs in Express are the bees knees.',
  },
];

export function FeaturesTitle() {
  const { classes, theme } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
        <Group position="left">
          <Stack spacing={0}>
            <Center>
              <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
            </Center>
            <Center>
              <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
                {feature.title}
              </Text>
            </Center>
            <Center>
              <Text size="md" mt="sm" ta="center">
                {feature.description}
              </Text>
            </Center>
          </Stack>
        </Group>
      </Card>
    </div>
  ));

  return (
    <div style={{ scrollMarginTop: '65px' }}>
      <Container size="lg">
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {items}
        </SimpleGrid>
      </Container>
    </div>
  );
}
