import React from 'react';
import { PiGithubLogoFill } from 'react-icons/pi';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const socialLinks = [
  { href: 'https://github.com/newhoteng', icon: <PiGithubLogoFill className="w-6 h-6" /> },
  { href: 'https://www.linkedin.com/in/harriet-oteng/', icon: <BiLogoLinkedin className="w-6 h-6"/> },
  { href: 'https://twitter.com/HarrietOteng1', icon: <FaXTwitter className="w-6 h-6"/> },
];

const Footer = () => {
  return (
    <>
      <div>&copy; Harriet Oteng 2023</div>
      <div className='flex items-center justify-center gap-2'>
        {socialLinks.map((social) => (
          <Social key={social.href} href={social.href} icon={social.icon} />
        ))}
      </div>
    </>
  )
}

export const Social = ({ href, icon } : { href: string; icon: JSX.Element}) => {
  return (
    <Link href={href} target="_blank" className='border border-accent rounded w-8 h-8 flex items-center justify-center'>
      {icon}
    </Link>
  )
}

export default Footer