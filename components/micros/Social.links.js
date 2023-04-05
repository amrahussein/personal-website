import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const socials = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/amromoorie',
    icon: <FontAwesomeIcon color='#00798F' size='2x' icon={faTwitter} />,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/amromoorie',
    icon: <FontAwesomeIcon color='#00798F' size='2x' icon={faInstagram} />,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/amromoorie',
    icon: <FontAwesomeIcon color='#00798F' size='2x' icon={faLinkedin} />,
  },
  {
    name: 'Github',
    link: 'https://github.com/amromoorie',
    icon: <FontAwesomeIcon color='#00798F' size='2x' icon={faGithub} />,
  },
];
