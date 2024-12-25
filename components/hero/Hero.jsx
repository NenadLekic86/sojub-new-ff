"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Image from 'next/image';
import LogoBig from '@/public/assets/images/logo_big.webp'

const Hero = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Define animations for different screen sizes
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      // Animation for desktop and larger devices
      gsap.to(logoRef.current, {
        y: 700, // Adjust this value based on your section height
        ease: 'power1.inOut', // Add easing for smooth animation
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 10, // Increase scrub value for smoother transition
          pin: true,
          // markers: true,
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Animation for mobile devices
      gsap.to(logoRef.current, {
        y: 300, // Adjust this value for mobile
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top top',
          end: '+=500',
          scrub: 5,
          pin: true,
          // markers: true,
        },
      })
    });

    return () => {
      // Cleanup matchMedia instances
      mm.revert()
    }
  }, []);

  useGSAP(() => {
    gsap.set("#hero", {
      clipPath: "polygon(14% 0px, 52% 0px, 98% 75%, 0px 100%)",
      borderRadius: "0% 0% 40% 20%",
    });
    gsap.from("#hero", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section 
      id='hero'
      className='hero relative flex items-center justify-center' 
      
    >
      <div className='flex flex-row items-center justify-center mb-96 lg:mb-44'>
        <Image 
          src={LogoBig} 
          alt="Logo Big" 
          className='logoBig max-w-[315px] lg:max-w-[600px]'
          ref={logoRef}
        />
      </div>
    </section>
  )
}

export default Hero