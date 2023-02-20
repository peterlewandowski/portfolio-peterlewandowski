import { createStyles, ThemeIcon, Text, Box, Container, Title, Group, Anchor } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons';

type ContactIconVariant = 'white' | 'gradient';

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },
  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === 'gradient' ? theme.black : theme.white,
  },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Anchor href={`https://${description}`} target="_blank" className={classes.description}>
          {description}
        </Anchor>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  {
    title: 'LinkedIn',
    description: 'linkedin.com/in/peterlewandowski2010',
    icon: IconBrandLinkedin,
  },
  { title: 'Github', description: 'github.com/peterlewandowski', icon: IconBrandGithub },
];

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Group>{items}</Group>;
}

export function ContactIcons() {
  return (
    <div id="contact">
      <Container>
        <Title>My Links</Title>

        <Box
          sx={(theme) => ({
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][6]} 0%, ${
              theme.colors[theme.primaryColor][4]
            } 100%)`,
          })}
        >
          <ContactIconsList variant="white" />
        </Box>
      </Container>
    </div>
  );
}
