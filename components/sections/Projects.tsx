import { IconHeart } from '@tabler/icons';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  Container,
  Menu,
  Stack,
  Flex,
} from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  item: {
    '&[data-hovered]': {
      backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
      color: theme.white,
    },
    '&[data-expanded]': {
      variant: 'outline',
    },
  },
}));

interface BadgeCardProps {
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

export function BadgeCard({ image, title, description, type, badges, links }: BadgeCardProps) {
  const { classes, theme } = useStyles();
  const [count, setCount] = useState(0);

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  const incrementCount = () => {
    setCount(count + 1);
  };
  // const decrementCount = () => {
  //   setCount(count - 1);
  // };

  const handleLink = (link: string) => {
    window.open(link);
  };

  return (
    <Container>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={400} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md" mih={150}>
          <Group position="apart">
            <Text size="lg" weight={900}>
              {title}
            </Text>
            <div>
              <Badge size="sm">{type}</Badge>
              <Badge size="sm">❤️ {count}</Badge>
            </div>
          </Group>
          <Text size="md" mt="xs">
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} color="dimmed">
            Perfect for you, if you enjoy
          </Text>
          <Group spacing={7} mt={5}>
            {features}
          </Group>
        </Card.Section>

        <Stack mih={180} m="xl" mt={40}>
          <Button radius="md" style={{ flex: 1 }} onClick={() => handleLink(links.live)}>
            &rdquo;Try Me&rdquo;
          </Button>
          <Menu classNames={classes}>
            <Menu.Target>
              <Button variant="light" radius="md" style={{ flex: 1 }}>
                Code Repository
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              {!links.repo.api ? (
                <Menu.Item onClick={() => handleLink(links.repo.front)}>Frontend</Menu.Item>
              ) : (
                <>
                  <Menu.Item onClick={() => handleLink(links.repo.front)}>Frontend</Menu.Item>
                  <Menu.Item onClick={() => handleLink(links.repo.api)}>API</Menu.Item>
                </>
              )}
            </Menu.Dropdown>
          </Menu>
          <Flex justify="center">
            <ActionIcon variant="default" radius="md" size={36}>
              <IconHeart
                size={18}
                className={classes.like}
                stroke={1.5}
                onClick={() => incrementCount()}
              />
            </ActionIcon>
          </Flex>
        </Stack>
      </Card>
    </Container>
  );
}
