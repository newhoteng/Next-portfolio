import React from 'react';
import Link from 'next/link';
import { User, SampleIcon } from '@/public/icons';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: User },
  {
    name: 'Works',
    href: '/works',
    icon: SampleIcon,
  },
  { name: 'About', href: '/about', icon: SampleIcon },
  { name: 'Contact', href: '/contact', icon: SampleIcon },
];

const NavLinks = () => {
  return (
    <div>NavLinks</div>
  )
}

const NavLink = ({ name, href, Icon }: {
  name: string;
  href: string;
  Icon: () => React.JSX.Element;
}) => {
  return (
    <Link href={href}>
      <Icon />
      <p>{name}</p>
    </Link>
  )
}

export default NavLinks
