"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import BulletHoles from '../bulletHoles/BulletHoles';

import Image from 'next/image';
import SliderImgOne from '@/public/assets/images/SS-image-1.webp'
import SliderImgTwo from '@/public/assets/images/SS-image-2.webp'
import SliderImgThree from '@/public/assets/images/SS-image-3.webp'
import SliderImgFour from '@/public/assets/images/SS-image-4.webp'
import ArrowLeft from '@/public/assets/icons/sojub-arrow-left.webp'
import ArrowRight from '@/public/assets/icons/sojub-arrow-right.webp'
import ScreenshotsBottomBg from '@/public/assets/images/screenshots-bottom-bg.webp'
import ScreenshotsTopBg from '@/public/assets/images/screenshots-top-bg.webp'

const images = [SliderImgOne, SliderImgTwo, SliderImgThree, SliderImgFour, SliderImgOne, SliderImgTwo, SliderImgThree, SliderImgFour]

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const ScreenShots = () => {
  const text = [
    "Screenshots"
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
      const section = document.querySelector('.screenShots');
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
    <section className='screenShots relative bg-brown-100 pt-20 pb-28 sm:py-36 md:py-40 lg:pt-16 lg:pb-20 z-[5]'>
      <div className="absolute top-0 left-0 w-full h-full">
        <BulletHoles />
      </div>

      <div className='top-bottom-bg z-[4]'>
        <Image 
          src={ScreenshotsTopBg} 
          alt='Screenshots Top Background' 
          className='absolute -top-[0.5rem] lg:-top-12 left-0 w-full h-8 lg:h-auto z-[4]'
        />
        <Image 
          src={ScreenshotsBottomBg} 
          alt='Screenshots Bottom Background' 
          className='absolute -bottom-[0.5rem] lg:-bottom-12 left-0 w-full h-16 lg:h-auto z-[4]'
        />
      </div>

      <div className='container'>
        <div className='relative text-center lg:text-left z-[1] flex flex-col lg:flex-row items-center justify-center'>
          <div className='basis-full lg:basis-10/12'>
            <h2 ref={titleRef} className='h2-heading orangeHeading text-[44px] md:text-[4.5rem] relative w-full z-[5]'>
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
          <div className='basis-full lg:basis-2/12 hidden lg:block'>
            <div className="screenShots-arrows flex flex-row flex-nowrap items-center justify-end relative">
              <div className="swiper-button-prev relative flex flex-row items-center justify-center bg-transparent w-[48px] h-[48px] min-w-[48px] min-h-[48px] ml-14">
                <Image 
                  src={ArrowLeft}
                  alt='arrow-left'
                />
              </div>
              <div className="swiper-button-next relative flex flex-row items-center justify-center bg-transparent w-[48px] h-[48px] min-w-[48px] min-h-[48px]">
                <Image 
                  src={ArrowRight}
                  alt='arrow-right'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='screenShots-container mt-4'>
        <Swiper
          modules={[Navigation]}
          navigation= {{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={1}
          initialSlide={2}
          spaceBetween={30}
          loop={false}
          centeredSlides={false}
          onSwiper={swiper => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className='screenShots w-full'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image 
                src={image} 
                alt={`Screen Shot ${index + 1}`} 
                className='w-full'
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='flex flex-row flex-nowrap items-center justify-center relative mt-20 lg:hidden'>
          <div className="screenShots-arrows relative w-[30%]">
            <div className="swiper-button-prev relative flex flex-row items-center justify-center bg-transparent w-[48px] h-[48px] min-w-[48px] min-h-[48px]">
              <Image 
                src={ArrowLeft}
                alt='arrow-left'
              />
            </div>
            <div className="swiper-button-next relative flex flex-row items-center justify-center bg-transparent w-[48px] h-[48px] min-w-[48px] min-h-[48px]">
              <Image 
                src={ArrowRight}
                alt='arrow-right'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScreenShots