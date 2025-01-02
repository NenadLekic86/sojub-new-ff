"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import BulletHoles from '../bulletHoles/BulletHoles';

import Image from 'next/image';
import MMMBg from '@/public/assets/images/mmmBg.webp'
import MMMCoin from '@/public/assets/images/$MMMCoin.svg'
import MMMCoinBg from '@/public/assets/images/$MMMCoinBg-v2.svg'
import MMMCrossLineTop from '@/public/assets/images/mmmCrossLineTop.svg'
import MMMCrossLineBottom from '@/public/assets/images/mmmCrossLineBottom.svg'



const Mmm = () => {
  const text = [
    "$MMM: Fuel   ",
    <br key="br1" />,
    " Your Mayhem"
  ];

  const desktopTitleRef = useRef(null);
  const mobileTitleRef = useRef(null);
  const coinBgRef = useRef(null);
  const coinRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const bounceInAnimation = (elements) => {
      gsap.fromTo(elements, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.05, ease: "bounce.out" }
      );
    };

    const handleScroll = () => {
      const desktopTitleSpans = desktopTitleRef.current.querySelectorAll('.stackWrapper');
      const mobileTitleSpans = mobileTitleRef.current.querySelectorAll('.stackWrapper');
      const section = document.querySelector('.mmm');
      const sectionTop = section.getBoundingClientRect().top;
      const threshold = window.innerWidth < 768 ? 50 : 200;

      if (sectionTop < window.innerHeight - threshold && !hasAnimated) {
        if (desktopTitleSpans) bounceInAnimation(desktopTitleSpans);
        if (mobileTitleSpans) bounceInAnimation(mobileTitleSpans);
        setHasAnimated(true);
      } else if (sectionTop >= window.innerHeight - threshold) {
        setHasAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  useEffect(() => {
    gsap.to(coinBgRef.current, {
      rotation: 360,
      scale: 1.5,
      repeat: -1,
      yoyo: true,
      duration: 100,
      ease: "linear"
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = coinRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const rotateX = deltaY / height * 20;
      const rotateY = -deltaX / width * 20;

      gsap.to(coinRef.current, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(coinRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const section = document.querySelector('.mmm');
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className='mmm relative'>
      <div className="absolute top-0 left-0 w-full h-full">
        <BulletHoles />
      </div>

      <div className='absolute top-0 left-0 w-full h-full z-[4]'>
        <Image
          src={MMMBg}
          alt='MMM Background'
          className='w-full object-cover'
        />
      </div>

      <div className="container top-20 sm:top-60 lg:top-0 h-[1086px] z-[4]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-full">
          <div className="basis-full basis-1/2">
            <div className='relative z-10'>
              <h2 ref={desktopTitleRef} className='h2-heading orangeHeadingMmm text-[44px] md:text-[4.5rem] relative w-full z-[5] hidden lg:block'>
                {text.map((part, index) => (
                  typeof part === "string" ? (
                    part.split("").map((letter, letterIndex) => (
                      <span 
                        key={`${index}-${letterIndex}`} 
                        className="relative inline-block stackWrapper"
                      >
                        <span className="absolute inset-0 shadowEffectMmm">
                          {letter === " " ? "\u00A0" : letter}
                        </span>
                        <span className="relative orangeHeadingMmm">
                          {letter === " " ? "\u00A0" : letter}
                        </span>
                      </span>
                    ))
                  ) : (
                    part
                  )
                ))}
              </h2>
              <p className='regular-text lg:pr-10 text-center lg:text-left'>Supercharge your gameplay with $MMM — a deflationary, high-utility token driving Memeland Mayhem’s explosive economy! Upgrade avatars, fortify bases, snap up rare NFTs, and dominate rival Factions, all while every transaction boosts $MMM’s long-term value! Enter the ultimate Web3 battlegrounds, seize massive rewards, and let $MMM unleash your full potential!</p>
            </div>
          </div>
          <div className="basis-full basis-1/2">
            <div className='relative z-[1] lg:hidden'>
              <h2 ref={mobileTitleRef} className='h2-heading orangeHeadingMmm text-[44px] md:text-[4.5rem] sm:-top-48 lg:top-0 relative w-full z-[5]'>
                {text.map((part, index) => (
                  typeof part === "string" ? (
                    part.split("").map((letter, letterIndex) => (
                      <span 
                        key={`${index}-${letterIndex}`} 
                        className="relative inline-block stackWrapper"
                      >
                        <span className="absolute inset-0 shadowEffectMmm">
                          {letter === " " ? "\u00A0" : letter}
                        </span>
                        <span className="relative orangeHeadingMmm">
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

            <Image 
              ref={coinBgRef}
              src={MMMCoinBg}
              alt='$MMM Coin Background'
              className='mmmCoinBg absolute bottom-[33rem] sm:bottom-[25rem] lg:bottom-0 -right-20 lg:-right-[20rem] w-full min-w-[140vw] sm:min-w-[120vw] lg:min-w-[1150px] h-auto z-[4]'
            />
            <Image 
              ref={coinRef}
              src={MMMCoin}
              alt='$MMM Coin'
              className='mmmCoin absolute bottom-[38rem] lg:bottom-[15rem] right-8 sm:right-48 lg:-right-8 w-full max-w-[292px] sm:max-w-[380px] lg:max-w-[586px] h-auto z-[5]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mmm