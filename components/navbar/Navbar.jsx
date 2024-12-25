"use client"

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import Links from './links/Links';
import styles from './navbar.css';
import Dropdown from './dropdown/Dropdown';
import Button from '@/components/button/Button';
import Logo from '@/public/assets/icons/logo.svg';
import BgMob from '@/public/assets/images/hero-bg-mob.webp';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='navbar bg-transparent fixed mx-auto top-0 left-0 z-50 w-full topShade'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image 
              src={Logo} 
              alt="Memoland Mayhem" 
              className='w-[91px] h-auto lg:w-[147px]'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='relative hidden lg:flex flex-row flex-nowrap items-center ml-auto'>
            <p className='pressKit'>Press Kit</p>
            <span className='relative v-divider mx-6' />
            <Links />
            <span className='relative v-divider mx-6' />
            <Dropdown />
            <span className='relative v-divider mx-6' />
            <Button 
              // href={'#'} 
              containerClass=""
            >
              Buy now
            </Button>
          </div>

          {/* <ul className='hidden lg:flex'>
            <Link className='btn text-[16px] rounded-[30px] text-[#34313A] hover:text-[#ffffff] bg-[#E7DBED] hover:bg-[#AD89B1] transition-all font-SegoeUISemiBold' href="#" alt="Connect Wallet">Buy Now</Link>
          </ul> */}

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className='block lg:hidden z-50 cursor-pointer'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul 
            className={
              nav
                ? 'fixed lg:hidden left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#36343C] ease-in-out duration-500 px-10 py-8 z-40'
                : 'ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }>
              
              {/* Mobile Logo */}
              <Link href="/" className={styles.logo}>
                <Image src={Logo} alt="Memoland Mayhem" className='h-auto' />
              </Link>

              {/* Mobile Navigation Items */}
              <Links />

              <Link className='btn text-[16px] rounded-[30px] text-[#34313A] hover:text-[#ffffff] bg-[#E7DBED] hover:bg-[#AD89B1] transition-all relative z-10 font-SegoeUISemiBold' href="#" alt="Connect Wallet">Buy Now</Link>
              {/* <li className='absolute bottom-0 left-0'>
                <Image 
                  src={BgMob}
                  alt=""
                  className="relative z-40"
                />
              </li> */}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;