import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium } from '@tabler/icons';
import { ColorSchemeToggle } from './ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 2,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 'auto',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface Link {
  id: string;
  link: string;
  label: string;
}

interface HeaderMiddleProps {
  links: Link[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  // const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const handleScroll = (id: string) => {
    document.getElementById(`${id}`)!.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSocialLink = (link: string) => {
    window.open(link);
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        handleScroll(link.id);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <div id="header" className={classes.header}>
      <Header height={56} mb={0}>
        <Container className={classes.inner}>
          {/* <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} /> */}
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>

          <Group spacing={5} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandGithub
                size={50}
                stroke={1.5}
                onClick={() => handleSocialLink('https://github.com/peterlewandowski')}
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandLinkedin
                size={50}
                stroke={1.5}
                onClick={() => handleSocialLink('https://www.linkedin.com/in/peterlewandowski2010/')}
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandMedium
                size={50}
                stroke={1.5}
                onClick={() => handleSocialLink('https://medium.com/@peter-lewandowski')}
              />
            </ActionIcon>
            <ColorSchemeToggle />
          </Group>
        </Container>
      </Header>
    </div>
  );
}
