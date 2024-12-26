"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import BulletHoles from '../bulletHoles/BulletHoles';

import Image from 'next/image';
import PonkeBg from '@/public/assets/images/ponkeBgWithSmoke-v2.webp'
import Ponke from '@/public/assets/images/ponkeWithoutSmoke.webp'
import PonkeSectionBg from '@/public/assets/images/ponkeSectionBg.webp'
import PonkeSectionBgMob from '@/public/assets/images/ponkeSectionBgMob.webp'
import PonkeSectionBgTablet from '@/public/assets/images/ponkeSectionBgTabletTop.webp'
import TitleBgGreen from '@/public/assets/images/titleBgGreen.svg'

const GearUp = () => {
  const text = [
    "GEAR UP FOR  ",
    <br key="br1" />,
    " EPIC CLASHES"
  ];

  const ponkeDesktopRef = useRef(null);
  const ponkeMobileRef = useRef(null);
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
      const desktopImage = ponkeDesktopRef.current;
      const mobileImage = ponkeMobileRef.current;
      const titleSpans = titleRef.current.querySelectorAll('.stackWrapper');
      const section = document.querySelector('.gearUp');
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < window.innerHeight - 200 && !hasAnimated) {
        if (desktopImage) fadeInAnimation(desktopImage);
        if (mobileImage) fadeInAnimation(mobileImage);
        if (titleSpans) bounceInAnimation(titleSpans);
        setHasAnimated(true);
      } else if (sectionTop >= window.innerHeight - 200) {
        setHasAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <section className='gearUp relative '>
      <div className="absolute top-0 left-0 w-full h-full">
        <BulletHoles />
      </div>

      <Image 
        src={PonkeSectionBg} 
        alt='Ponke Background' 
        className='absolute w-[100dvw] top-[1.5rem] right-0 z-[3] object-cover hidden lg:block'
      />
      <Image 
        src={PonkeSectionBgTablet} 
        alt='Doge Section Background Tablet' 
        className='absolute -top-8 left-0 w-full z-[5] object-cover hidden sm:block lg:hidden'
      />
      <Image 
        src={PonkeSectionBgMob} 
        alt='Ponke Background Mobile' 
        className='absolute top-0 left-0 w-full h-auto z-[3] object-cover lg:hidden'
      />

      <div className='PonkeContainer absolute -top-4 left-0 w-full h-full min-h-[841px] z-[4] hidden lg:block'>
        <Image 
          src={PonkeBg} 
          alt='Ponke Background' 
          className='w-auto max-h-[841px]'
        />
        <Image 
          ref={ponkeDesktopRef}
          src={Ponke} 
          alt='Ponke' 
          className='absolute w-[485px] max-w-[485px] top-[1.25rem] opacity-0'
        />
      </div>

      <div className='relative pt-28 lg:pt-0 w-full lg:h-[733px] lg:top-[3.8rem] bg-green-300'>
        <div className='container h-full'>
          <div className='flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center justify-center h-full'>
            <div className='basis-full lg:basis-1/2 relative'>
              <div className='Ponke-container bg-green-300 lg:hidden'>
                <Image 
                  ref={ponkeMobileRef}
                  src={Ponke} 
                  alt='Ponke' 
                  className='ponkeCharMob relative top-4 sm:top-8 -left-4 sm:-left-[17rem] w-full max-w-[330px] z-[4] opacity-0'
                />
                <Image 
                  src={PonkeBg} 
                  alt='Ponke Background' 
                  className='ponkeCharMobBg absolute -top-8 sm:top-0 -left-12 sm:-left-72 w-full min-w-[130vw] sm:min-w-[70vw] z-[3]'
                />
              </div>
            </div>
            <div className='basis-full lg:basis-1/2 z-[4]'>
              <div className='relative flex items-center justify-start'>
                <div className='relative flex items-center justify-start w-full top-0'>
                  <Image 
                    src={TitleBgGreen} 
                    alt='Title Background' 
                    className='absolute -top-[1.5rem] -left-28 lg:-left-8 w-[554px] md:w-[728px] max-w-[554px] md:max-w-[728px]'
                  />
                  <div className='relative w-full'>
                    <h2 ref={titleRef} className='h2-heading orangeHeading text-[44px] md:text-[4.5rem] lg:pl-20 relative w-full z-[5]'>
                      {text.map((part, index) => (
                        typeof part === "string" ? (
                          part.split("").map((letter, letterIndex) => (
                            <span 
                              key={`${index}-${letterIndex}`} 
                              className="relative inline-block stackWrapper"
                            >
                              <span className="absolute inset-0 shadowEffectGearUp">
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

              <p className='regular-text mt-6 lg:mt-0 lg:pl-20'>Seize coveted territories and pilfer valuable assets to rise as the ultimate memecoin faction!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GearUp