import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { User, SampleIcon } from '@/public/icons';

// Map of links to display in the header.
const links = [
  { name: 'Home', href: '/', imageSource: '/home.svg' },
  {
    name: 'Works',
    href: '/works',
    imageSource: '/home.svg'
  },
  { name: 'About', href: '/about', imageSource: '/home.svg' },
  { name: 'Contact', href: '/contact', imageSource: '/home.svg' },
];

const NavLinks = () => {
  return (
    <>
    {links.map((link) => {
      const { name, href, imageSource } = link;
      return (
        <NavLink
          key={name}
          name={name}
          href={href}
          imageSource={imageSource}
        />
      )
    })}
    </>
  )
}

const NavLink = ({ name, href, imageSource }: {
  name: string;
  href: string;
  imageSource: string;
}) => {
  return (
    <Link
      href={href}
      className="border-2 border-blue-500 flex items-center justify-center gap-1"
    >
      <Image
        src={imageSource}
        alt="Vercel Logo"
        // className="dark:invert"
        width={25}
        height={25}
        priority
      />
      <p>{name}</p>
    </Link>
  )
}

export default NavLinks
