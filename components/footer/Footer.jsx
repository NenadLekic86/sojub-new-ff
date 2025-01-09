"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Links from '../navbar/links/Links';
import Button from '@/components/button/Button';

import Image from 'next/image';
import FooterLogo from '@/public/assets/images/logo_footer.webp'
import FooterDots from '@/public/assets/images/footer-dots.svg'
import FooterBgMob from '@/public/assets/images/footerbgMob.webp'
import FooterBg from '@/public/assets/images/footerBg.webp'
import FooterContentBg from '@/public/assets/images/footerContentBg.webp'
import FooterBottomBg from '@/public/assets/images/bottom-footer-top-bg.webp'
import BulletOne from '@/public/assets/images/bullet-1.svg'
import BulletTwo from '@/public/assets/images/bullet-2.svg'



const Footer = () => {
  const text = [
    "JOIN THE MAYHEM NOW"
  ];

  const textMob = [
    "JOIN THE ",
    <br key="br1" />,
    " MAYHEM NOW"
  ];

  const titleRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const bounceInAnimation = (elements) => {
      gsap.fromTo(elements, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: "bounce.out" }
      );
    };

    const handleScroll = () => {
      const titleSpans = titleRef.current.querySelectorAll('.stackWrapper');
      const section = document.querySelector('.footer');
      const sectionTop = section.getBoundingClientRect().top;
      const threshold = window.innerWidth < 768 ? 50 : 200;

      if (sectionTop < window.innerHeight - threshold && !hasAnimated) {
        if (titleSpans) bounceInAnimation(titleSpans);
        setHasAnimated(true);
      } else if (sectionTop >= window.innerHeight - threshold) {
        setHasAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <footer className='footer relative overflow-hidden'>
      <div className='footer-top flex items-center justify-center bg-brown-100 text-center h-full min-h-[750px] lg:min-h-[810px]'>
        <Image 
          src={FooterBg}
          alt='Footer Background'
          className='absolute top-0 left-0 w-full h-auto z-0 hidden lg:block' 
        />
        <Image 
          src={FooterDots}
          alt='Footer Background Top'
          className='absolute -top-[18rem] left-0 w-full z-[1] hidden lg:block'
        />
        <Image 
          src={FooterBgMob}
          alt='Footer Background'
          className='footerBgMobImg absolute -top-[16rem] sm:-top-[37rem] left-0 w-full h-auto z-0 lg:hidden' 
        />

        <div className='relative flex flex-row items-center justify-center h-full z-[2] max-w-[1191px] w-full mx-auto 3xl:mt-80'>
          <Image
            src={FooterContentBg}
            alt='Footer Content Background'
            // className='absolute top-0 left-0 w-full z-[2] opacity-80 min-h-[495px] lg:min-h-full'
            className='absolute top-0 left-0 w-full z-[2] opacity-80 min-h-[565px] lg:min-h-full'
          />
          <div className='text-center relative px-10 lg:px-0 z-[3]'>
            <Image
              src={FooterLogo}
              alt='Memeland Mayhem logo'
              className='relative w-full max-w-[250px] mx-auto -mt-20 mb-8'
            />
            <h2 ref={titleRef} className='h2-heading yellowHeadingTwo text-[44px] md:text-[4.5rem] relative w-full z-[5] hidden lg:block'>
              {text.map((part, index) => (
                typeof part === "string" ? (
                  part.split("").map((letter, letterIndex) => (
                    <span 
                      key={`${index}-${letterIndex}`} 
                      className="relative inline-block stackWrapper"
                    >
                      <span className="absolute inset-0 shadowEffectFooter">
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                      <span className="relative yellowHeadingTwo">
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    </span>
                  ))
                ) : (
                  part
                )
              ))}
            </h2>

            <h2 ref={titleRef} className='h2-heading yellowHeadingTwo text-[44px] md:text-[4.5rem] relative w-full z-[5] lg:hidden'>
              {textMob.map((part, index) => (
                typeof part === "string" ? (
                  part.split("").map((letter, letterIndex) => (
                    <span 
                      key={`${index}-${letterIndex}`} 
                      className="relative inline-block stackWrapper"
                    >
                      <span className="absolute inset-0 shadowEffectFooter">
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                      <span className="relative yellowHeadingTwo">
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    </span>
                  ))
                ) : (
                  part
                )
              ))}
            </h2>

            <h3 className='h3-heading'>OUR SOCIALS</h3>
            <Links containerClass="justify-center fill-white !mt-2 !mb-6"/>
            <Button 
              // href={'#'} 
              containerClass=""
            >
              Play now
            </Button>
            <h3 className='h3-heading mt-6'>LAUNCHING ONLY ON PUMP.FUN</h3>
          </div>
        </div>
      </div>

      <div className='footer-bottom relative bg-brown-100 pt-[4.5rem] pb-[3.5rem] overflow-hidden'>
        <Image 
          src={FooterBottomBg}
          alt='Footer Bottom Background'
          className='absolute top-0 left-0 w-full h-12 lg:h-auto z-0'
        />
        <Image 
          src={BulletOne}
          alt='Bullet One'
          className='absolute top-16 left-8 z-[1] hidden md:block'
        />
        <Image 
          src={BulletTwo}
          alt='Bullet Two'
          className='absolute -bottom-4 right-[32rem] z-[1] hidden md:block'
        />

        <div className='container'>
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
            <div className='basis-full lg:basis-1/2'>
              <p className='copyright text-center lg:text-left'>© 2024 Memeland Mayhem</p>
            </div>
            <div className='basis-full lg:basis-1/2'>
              <Links 
                containerClass="justify-end fill-white !mt-0 !mb-10"
                BlackWhite
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer