import { NAV_LINKS } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between mx-auto max-w-[1440px] px-6 relative z-30 py-5'>
      <div className='cursor pointer'>
        <Link href='/'>
          <Image
            src='/logo-built_white.svg'
            alt='logo'
            height={74}
            width={159}
          />
        </Link>
      </div>
      <ul className='flex justify-center items-center gap-10'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='regular-10 text-gray-500 pb-1.5 transition-all hover:font-semibold'
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='flex flex-row gap-5'>
        <Button
          type='button'
          title='Login'
          icon={<FaGoogle />}
        ></Button>
      </div>
    </nav>
  );
};

export default Navbar;
