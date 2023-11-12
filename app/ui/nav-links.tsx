import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

// Map of links to display in the header.
const links = [
  { name: 'Home', href: '/', imageSource: '/home.svg' },
  {
    name: 'Projects',
    href: '/projects',
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
      className="flex items-center justify-center gap-1"
    >
      {/* <Image
        src={imageSource}
        alt=""
        // className="dark:invert"
        width={25}
        height={25}
        priority
      /> */}
      <p className='font-medium text-secondary md:text-xl'>{name}</p>
    </Link>
  )
}

// hidden sm:block md:text-lg font-black

export default NavLinks
