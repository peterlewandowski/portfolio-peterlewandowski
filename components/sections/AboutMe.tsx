import { createStyles, Title, Text, Container, Group, Stack } from '@mantine/core';
import Image from 'next/image';
import photo from '../../assets/myPhoto.jpg';

const useStyles = createStyles((theme) => ({
  container: {},
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
  image: {
    borderRadius: 20,
  },
}));

export function FeaturesCards() {
  const { classes } = useStyles();

  return (
    <Container className={classes.container} size="md" py={100}>
      <Group>
        <Stack>
          <Title order={1} className={classes.title} align="center" mt="sm">
            Building Solutions
          </Title>

          <Text className={classes.description} align="center" mt="md">
            As a Financial Professional at an Investment Banking firm, I worked with over 1500
            investment advisors, educating on how to utilize technology to better serve their
            clients needs, resulting in over $100 million in annual revenue in my first three years.
            Recently, I worked as a Software Engineering at a startup, mentoring new students on
            their journey to become software engineers. I am excited to work and collaborate on
            projects that create impactful solutions in Fintech and beyond.
          </Text>
        </Stack>
        <Image
          className={classes.image}
          width={280}
          height={400}
          alt="Photo of author"
          src={photo}
        />
      </Group>
    </Container>
  );
}
