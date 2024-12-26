"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import BulletHoles from '../bulletHoles/BulletHoles';

import Image from 'next/image';
import DogeBg from '@/public/assets/images/dogeBg.webp'
import DogeBgMob from '@/public/assets/images/dogeBgMob.webp'
import Doge from '@/public/assets/images/doge.webp'
import DogeSectionBg from '@/public/assets/images/dogeSectionBg.webp'
import DogeSectionBgMob from '@/public/assets/images/dogeSectionBgMob.webp'
import DogeSectionBgTablet from '@/public/assets/images/dogeTitleBgTabletTopV3.webp'
import TitleBgRed from '@/public/assets/images/titleBgRed.svg'

const OwnLand = () => {
  const text = [
    "OWN LAND ",
    <br key="br1" />,
    " PWN NOOBS"
  ];

  const dogeDesktopRef = useRef(null);
  const dogeMobileRef = useRef(null);
  const titleRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const fadeInAnimation = (element) => {
      gsap.to(element, { opacity: 1, duration: 1 });
    };

    const fadeOutAnimation = (element) => {
      gsap.to(element, { opacity: 0, duration: 1 });
    };

    const bounceInAnimation = (elements) => {
      gsap.fromTo(elements, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: "bounce.out" }
      );
    };

    const handleScroll = () => {
      const desktopImage = dogeDesktopRef.current;
      const mobileImage = dogeMobileRef.current;
      const titleSpans = titleRef.current.querySelectorAll('.stackWrapper');
      const section = document.querySelector('.ownLand');
      const sectionTop = section.getBoundingClientRect().top;
      const threshold = window.innerWidth < 768 ? 50 : 200;

      if (sectionTop < window.innerHeight - threshold && !hasAnimated) {
        if (desktopImage) fadeInAnimation(desktopImage);
        if (mobileImage) fadeInAnimation(mobileImage);
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
    <section className='ownLand relative bg-gray-100 -mt-28 lg:mt-auto bg-green-300'>
      <div className="absolute top-0 left-0 w-full h-full">
        <BulletHoles />
      </div>

      <Image 
        src={DogeSectionBg} 
        alt='Doge Section Background' 
        className='dogeSectionBgBig absolute w-[100dvw] top-[5.4rem] right-0 z-[3] object-cover hidden lg:block'
      />
      <Image 
        src={DogeSectionBgTablet} 
        alt='Doge Section Background Tablet' 
        className='absolute -top-8 left-16 w-full h-auto z-[3] object-cover hidden sm:block lg:hidden'
      />
      <Image 
        src={DogeSectionBgMob} 
        alt='Doge Section Background Mobile' 
        className='absolute top-0 left-0 w-full h-auto z-[3] object-cover lg:hidden'
      />

      <div className='DogeContainer absolute top-44 right-0 w-full h-full min-h-[851px] z-[3] hidden lg:block'>
        <Image 
          src={DogeBg} 
          alt='Doge Background' 
          className='absolute right-0 w-auto max-h-[851px]'
        />
        <Image 
          ref={dogeDesktopRef}
          src={Doge} 
          alt='Doge' 
          className='absolute w-[651px] max-w-[651px] -top-[2.6rem] right-28 opacity-0'
        />
      </div>

      <div className='relative w-full pt-52 lg:pt-0 lg:h-[851px] lg:top-[5.8rem] lg:bg-red-100'>
        <div className='container h-full'>
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-center h-full'>
            <div className='basis-full lg:basis-1/2 relative z-[3]'>
              <div className='relative flex items-center justify-start'>
                <div className='relative flex items-center justify-start top-0'>
                  <Image 
                    src={TitleBgRed} 
                    alt='Title Background' 
                    className='absolute -top-[1.5rem] -left-28 lg:-left-20  w-[554px] md:w-[728px] max-w-[554px] md:max-w-[728px]'
                  />
                  <div className="relative w-full">
                    <h2 ref={titleRef} className='h2-heading yellowHeadingTwo text-[44px] md:text-[4.5rem] lg:pl-20 relative w-full z-[5]'>
                    {text.map((part, index) => (
                      typeof part === "string" ? (
                        part.split("").map((letter, letterIndex) => (
                          <span 
                            key={`${index}-${letterIndex}`}
                            className="relative inline-block stackWrapper"
                          >
                            <span className="absolute inset-0 shadowEffectOwn">
                              {letter === " " ? "\u00A0" : letter}
                            </span>
                            <span className="relative threeDEffect">
                              {letter === " " ? "\u00A0" : letter}
                            </span>
                          </span>
                        ))
                      ) : (
                        part
                      )
                    ))}
                    </h2>
                  </div>
                </div>
              </div>

              <p className='regular-text mt-6 lg:mt-0 lg:pl-20'>Earn a cut of all the action that happens on your land and relish the sweet tears (and gains) of your enemies</p>
            </div>
            <div className='basis-full lg:basis-1/2'>
              <div className='Doge-container relative left-0 sm:-left-auto bg-red-100 lg:hidden'>
                <Image 
                  ref={dogeMobileRef}
                  src={Doge} 
                  alt='Doge' 
                  className='relative w-[374px] sm:-right-40 max-w-[374px] z-[5] md:z-[4] opacity-0'
                />
                <Image 
                  src={DogeBgMob} 
                  alt='Doge Background' 
                  className='absolute top-0 -right-4 sm:-right-56 lg:right-0 w-full min-w-[107vw] sm:min-w-[100%] z-[4] md:z-[3]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OwnLand