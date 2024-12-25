"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import Image from 'next/image';
import Pepe from '@/public/assets/images/pepe.webp'
import VideoCover from '@/public/assets/images/video-cover-bg-v2.webp'
import PlayBtn from '@/public/assets/images/video-play-btn.svg'
import BgDots from '@/public/assets/images/bg-dots.webp'
import RocksImg from '@/public/assets/images/RocksImg.webp'
import BottomBigRocksMob from '@/public/assets/images/hero-rocks-mob.webp'
import WatchTrailerTitleLines from '../svg/WatchTrailerTitleLines'
import BulletHoles from '../bulletHoles/BulletHoles';
// import AnimatedTitle from '../animatedTitle/AnimatedTitle'


const Trailer = () => {
  const text = "Watch Trailer";

  const pepeRef = useRef(null);

  useEffect(() => {
    const pepeElement = pepeRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(pepeElement, 
            { x: '100%', opacity: 0 }, 
            { x: '0%', opacity: 1, duration: 2, ease: 'bounce.out' }
          );
          observer.unobserve(pepeElement);
        }
      },
      { threshold: 0.1 }
    );

    if (pepeElement) {
      observer.observe(pepeElement);
    }

    return () => {
      if (pepeElement) {
        observer.unobserve(pepeElement);
      }
    };
  }, []);

  return (
    <section 
      className='trailer relative bg-gray-100 pt-12 pb-32 lg:py-36'
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <BulletHoles />
      </div>

      <div className='rockImagesContainer absolute top-0 left-0 w-full'>
        <div className='desktopRockImagesContainer relative -top-56 hidden lg:block'>
          <Image 
            src={RocksImg}
            alt='Rock Images'
            className=''
          />
        </div>
        <div className='mobileRockImagesContainer lg:hidden'>
          <Image 
            src={BottomBigRocksMob}
            alt='Rock Images'
            className='absolute -bottom-4 w-full z-10'
          />
        </div>
      </div>
      
      <div className="container">
        <h4 className='h4-heading text-center lg:px-28'>Step into the exhilarating world of Memeland Mayhem, the groundbreaking Web3 P2E battleground where the stakes are sky-high!</h4>
        
         <div className="absolute top-[10.5rem] lg:top-40 left-0 lg:left-12 w-full h-full flex items-center justify-center">
            <h2 className="h2-heading yellowHeading text-[44px] md:text-[4.5rem] text-center relative w-full z-[3]">
              {text.split("").map((letter, index) => (
                <span
                  key={index}
                  className=""
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h2>

            <h2 className="h2-shadow text-[44px] md:text-[4.55rem] text-center absolute w-full z-[2]">
              {text.split("").map((letter, index) => (
                <span
                  key={index}
                  className="shadow-text"
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h2>

            <WatchTrailerTitleLines containerClass="absolute z-[4] top-auto sm:top-[27px] lg:top-[7px] -left-4 sm:left-[15rem] lg:left-[435px]" />
          </div>

        <Image 
          ref={pepeRef}
          src={Pepe}
          alt='Pepe'
          className='absolute -right-8 sm:-right-20 lg:-right-40 -bottom-[33rem] sm:-bottom-[60rem] lg:-bottom-[70rem] max-w-[219px] sm:max-w-[410px] lg:max-w-[536px] z-[3]'
        />
      </div>

      <div className='relative trailer-video-container -left-20 sm:-left-[9.5rem] lg:left-auto mt-12 z-[2]'>
        <Image 
          src={VideoCover} 
          alt='Video Cover' 
          className='w-[131%] lg:w-full max-w-[1218px] mx-auto rounded-lg' 
        />
        <div className='play-btn absolute top-[47%] left-[70%] lg:left-[53%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-row items-center justify-center w-[45px] lg:w-[100px] h-[45px] lg:h-[100px] rounded-full bg-black'>
          <Image 
            src={PlayBtn} 
            alt='Play Button' 
            className='w-[22px] lg:w-[48px] h-[22px] lg:h-[48px] hover:scale-125 transition-all duration-300' 
          />
        </div>
      </div>

      <Image 
        src={BgDots}
        alt='Background Dots'
        className='absolute bottom-0 left-0 w-[100vw] z-[1]'
      />
    </section>
  )
}

export default Trailer