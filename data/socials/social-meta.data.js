import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const socials = [
  {
    id: 1,
    name: 'Twitter',
    link: 'https://twitter.com/amromoorie',
    icon: <FontAwesomeIcon color='#00798F' size='2x' icon={faTwitter} />,
    ariaLabel: 'Link to Twitter profile page',
  },
  {
    id: 2,
    name: 'Instagram',
    link: 'https://instagram.com/amromoorie',
    icon: <FontAwesomeIcon color='#00798F' size='2x' icon={faInstagram} />,
    ariaLabel: 'Link to Instagram profile page',
  },
  {
    id: 3,
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/amromoorie',
    icon: <FontAwesomeIcon color='#00798F' size='2x' icon={faLinkedin} />,
    ariaLabel: 'Link to LinkedIn profile page',
  },
  {
    id: 4,
    name: 'Github',
    link: 'https://github.com/amromoorie',
    icon: <FontAwesomeIcon color='#00798F' size='2x' icon={faGithub} />,
    ariaLabel: 'Link to Github profile page',
  },
];
