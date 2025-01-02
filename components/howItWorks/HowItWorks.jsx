"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import BulletHoles from '../bulletHoles/BulletHoles';

import Image from 'next/image';
import HowItWorksBg from '@/public/assets/images/howItWorksBg.webp'
import HowItWorksBgMob from '@/public/assets/images/howItWorksBgMob.webp'
import FlowChart from '@/public/assets/images/flowchart2.webp'
import FlowChartBg from '@/public/assets/images/flowchartBg.webp'
import HowItWorksTitleSplash from '@/public/assets/images/HowItWorksTitleSplash.webp'



const HowItWorks = () => {
  const text = [
    "How this works"
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
      const section = document.querySelector('.howItWorks');
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
    <section className='howItWorks relative min-h-[890px] md:min-h-[1600px] lg:min-h-[1038px]'>
      <div className="absolute top-0 left-0 w-full h-full">
        <BulletHoles />
      </div>

      <Image
        src={HowItWorksBg}
        alt='How It Works Background'
        className='howItWorksBgDesktop absolute -top-20 left-0 w-full z-[4] hidden lg:block'  
      />
      <Image
        src={HowItWorksBgMob}
        alt='How It Works Background'
        className='absolute -top-20 left-0 w-full z-[4] lg:hidden'  
      />

      <div className='container z-10'>
        <div className='relative z-[1] text-center'>
          <Image 
            src={HowItWorksTitleSplash}
            alt='How It Works Title Splash'
            className='splashTitle absolute -top-[1.5rem] sm:-top-[1.7rem] lg:-top-8 left-8 sm:left-32 lg:left-[21rem] w-full max-w-[341px] sm:max-w-[507px] z-[4]'
          />
          <h2 ref={titleRef} className='h2-heading orangeHeading text-[44px] md:text-[4.5rem] relative w-full z-[5] !tracking-[5px]'>
            {text.map((part, index) => (
              typeof part === "string" ? (
                part.split("").map((letter, letterIndex) => (
                  <span 
                    key={`${index}-${letterIndex}`} 
                    className="relative inline-block stackWrapper"
                  >
                    <span className="absolute inset-0 shadowEffectHowItWorks">
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

      <div className='relative z-[4] top-40 lg:top-0 max-w-[1310px] mx-auto'>
        <Image
          src={FlowChartBg}
          alt='Flow Chart Background'
          className='absolute top-0 -left-12 lg:left-0 w-full min-w-[120vw] lg:min-w-full z-[4]'
        />
        <Image
          src={FlowChart}
          alt='Flow Chart'
          className='flowChart absolute top-12 lg:top-14 left-[1.5rem] lg:left-14 w-full max-w-[370px] md:max-w-[1192px] z-[5]'
        />
      </div>
    </section>
  )
}

export default HowItWorks