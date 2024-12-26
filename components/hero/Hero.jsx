"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import LogoBig from '@/public/assets/images/logo_big.webp'
import RocksImg from '@/public/assets/images/RocksImg.webp'
import BottomBigRocksMob from '@/public/assets/images/hero-rocks-mob.webp'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const logoRef = useRef(null)

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
      })

      // Apply animation for devices with a minimum width of 768px
      gsap.set("#hero", {
        clipPath: "polygon(14% 0px, 72% 0px, 100% 100%, -30px 100%)",
        borderRadius: "0% 0% 40% 20%",
      })
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
      })
    })

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
    })

    return () => {
      // Cleanup matchMedia instances
      mm.revert()
    }
  }, [])

  return (
    <section 
      id='hero'
      className='hero relative flex items-center justify-center' 
    >
      <div className='rockImagesContainer absolute -bottom-[5px] left-0 w-full z-10'>
        <div className='desktopRockImagesContainer relative bottom-0 hidden lg:block'>
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
            className='absolute bottom-0 w-full'
          />
        </div>
      </div>
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