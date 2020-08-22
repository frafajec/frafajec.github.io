import GA from 'core/ga';

export const urls = {
  EMAIL: 'filip.rafajec@gmail.com',
  GITHUB: 'https://github.com/frafajec',
  LINKEDIN: 'https://linkedin.com/in/frafajec',
  MEDIUM: 'https://medium.com/@frafajec',
};

type TScrollTo = { [key: string]: any };
export const scrollTo: TScrollTo = {
  contact: 'contact',
  experiences: 'experiences',
  profile: 'profile',
  top: 'top',
};

export enum headerLinkKey {
  email,
  linkedin,
  github,
  medium,
}
export const headerLinks = {
  [headerLinkKey.email]: {
    id: 'email',
    title: 'Send me an email',
    href: `mailto:${urls.EMAIL}`,
    icon: 'fas fa-envelope',
    onClick: GA.openEmail,
  },
  [headerLinkKey.linkedin]: {
    id: 'linkedin',
    title: 'Reach me on linkedin',
    href: urls.LINKEDIN,
    icon: 'fab fa-linkedin',
    onClick: GA.openLinkedin,
  },
  [headerLinkKey.github]: {
    id: 'github',
    title: 'Check my code on github',
    href: urls.GITHUB,
    icon: 'fab fa-github',
    onClick: GA.openGithub,
  },
  [headerLinkKey.medium]: {
    id: 'medium',
    title: 'Follow me on medium',
    href: urls.MEDIUM,
    icon: 'fab fa-medium',
    onClick: GA.openMedium,
  },
};
