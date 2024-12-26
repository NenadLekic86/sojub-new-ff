"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

import BulletOne from '@/public/assets/images/bullet-1.svg'
import BulletTwo from '@/public/assets/images/bullet-2.svg'
import BulletThree from '@/public/assets/images/bullet-3.svg'
import BulletFour from '@/public/assets/images/bullet-4.svg'

const BulletHoles = () => {
  const bulletRefs = useRef([]);

  useEffect(() => {
    bulletRefs.current.forEach((bullet, index) => {
      const parentRect = bullet.parentElement.getBoundingClientRect();
      const randomX = Math.random() * parentRect.width;
      const randomY = Math.random() * parentRect.height;
      const randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds

      gsap.set(bullet, { x: randomX, y: randomY, opacity: 0 });

      gsap.timeline({ repeat: -1, repeatDelay: 1 })
        .to(bullet, { opacity: 1, duration: 0.1, delay: randomDelay }) // Quick "shoot" effect
        .to(bullet, { opacity: 0, duration: 2, delay: 1 }) // Smooth fade-out effect
        .call(() => {
          const newRandomX = Math.random() * parentRect.width;
          const newRandomY = Math.random() * parentRect.height;
          gsap.set(bullet, { x: newRandomX, y: newRandomY });
        });
    });
  }, []);

  return (
    <div className='relative w-full h-full overflow-hidden'>
      {[BulletOne, BulletTwo, BulletThree, BulletFour].map((Bullet, index) => (
        <Image
          key={index}
          src={Bullet}
          alt={`Bullet ${index + 1}`}
          ref={el => bulletRefs.current[index] = el}
          className='absolute opacity-0 z-[4] bullet'
        />
      ))}
    </div>
  )
}

export default BulletHoles