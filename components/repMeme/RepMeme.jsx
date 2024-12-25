"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import Image from 'next/image';
import GigaChad from '@/public/assets/images/gigachad.webp'
import GigaChadBg from '@/public/assets/images/gigachadBg.webp'
import RepMemeBg from '@/public/assets/images/repMemeBgDesktop.webp'
import RepMemeBgMob from '@/public/assets/images/repMemeBgMob.webp'
import TitleBgBlue from '@/public/assets/images/titleBgBlue.svg'
import BulletHoles from '../bulletHoles/BulletHoles';
// import AnimatedTitle from '../animatedTitle/AnimatedTitle'

const RepMeme = () => {
  const text = [
    "REP YOUR ",
    <br key="br1" />,
    " MEME FACTION"
  ];

  const gigaChadDesktopRef = useRef(null);
  const gigaChadMobileRef = useRef(null);
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
      const desktopImage = gigaChadDesktopRef.current;
      const mobileImage = gigaChadMobileRef.current;
      const titleSpans = titleRef.current.querySelectorAll('.stackWrapper');
      const section = document.querySelector('.repMeme');
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
    <section className='repMeme relative overflow-hidden lg:overflow-visible bg-gray-100 -mt-24 lg:mt-auto'>
      <div className="absolute top-0 left-0 w-full h-full">
        <BulletHoles />
      </div>

      <Image 
        src={RepMemeBg} 
        alt='Rep Meme Background' 
        className='absolute w-[100dvw] -top-36 right-0 z-[3] object-cover hidden lg:block'
      />
      <Image 
        src={RepMemeBgMob}
        alt='Rep Meme Background Mobile'
        className='absolute top-0 left-0 w-full h-auto z-[3] object-cover lg:hidden'
      />

      <div className='GigaChadContainer absolute top-32 left-0 w-full h-full min-h-[784px] z-[3] hidden lg:block'>
        <Image 
          src={GigaChadBg} 
          alt='Giga Chad Background' 
          className='w-auto max-h-[784px]'
        />
        <Image 
          ref={gigaChadDesktopRef}
          src={GigaChad} 
          alt='Giga Chad' 
          className='absolute w-[706px] max-w-[706px] -top-[2.6rem] opacity-0'
        />
      </div>
      
      <div className='relative w-full pt-52 lg:pt-0 lg:h-[733px] lg:top-32 lg:bg-orange-100'>
        <div className='container h-full'>
          <div className='flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center justify-center h-full'>
            <div className='basis-full lg:basis-1/2 relative'>
              <div className='GigaChad-container relative left-0 sm:-left-[45%] bg-orange-100 lg:hidden'>
                <Image 
                  ref={gigaChadMobileRef}
                  src={GigaChad} 
                  alt='Giga Chad' 
                  className='GigaChadChar relative w-[444px] max-w-[444px] -top-[11px] sm:-top-[35px] z-[4] opacity-0'
                />
                <Image 
                  src={GigaChadBg} 
                  alt='Giga Chad Background' 
                  className='GigaChadCharBg absolute -top-[1.5rem] left-0 w-full min-w-[115vw] sm:min-w-[455px] z-[3]'
                />
              </div>
            </div>
            <div className='basis-full lg:basis-1/2 z-[3]'>
              <div className='relative flex items-center justify-start'>
                <div className='relative flex items-center justify-start w-full top-0'>
                  <Image 
                    src={TitleBgBlue} 
                    alt='Title Background' 
                    className='absolute -top-[1.5rem] -left-28 lg:-left-8 w-[554px] md:w-[728px] max-w-[554px] md:max-w-[728px]'
                  />

                  <div className="relative w-full">
                    <h2 ref={titleRef} className='h2-heading orangeHeading text-[44px] md:text-[4.5rem] lg:pl-20 relative w-full z-[5]'>
                    {text.map((part, index) => (
                      typeof part === "string" ? (
                        part.split("").map((letter, letterIndex) => (
                          <span 
                            key={`${index}-${letterIndex}`}
                            className="relative inline-block stackWrapper"
                          >
                            <span className="absolute inset-0 shadowEffect">
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
              
              <p className='regular-text mt-6 lg:mt-0 lg:pl-20'>Team up with fellow meme faction members and fight to dominate through the battlegrounds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RepMeme