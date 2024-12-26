"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import Image from 'next/image';
import Pepe from '@/public/assets/images/pepe.webp'
import VideoCoverFrame from '@/public/assets/images/videoCoverFrame.webp'
import VideoBg from '@/public/assets/images/videoBg.webp'
import VideoBgMob from '@/public/assets/images/videoBgMob.webp'
import PlayBtn from '@/public/assets/images/video-play-btn.svg'
import BgDots from '@/public/assets/images/bg-dots.webp'
import WatchTrailerTitleLines from '../svg/WatchTrailerTitleLines'
import BulletHoles from '../bulletHoles/BulletHoles'
import VideoFile from '@/public/assets/videos/MLM_TRAILER_720.mp4'

const Trailer = () => {
  const text = "Watch Trailer";

  const pepeRef = useRef(null);
  const videoRef = useRef(null);
  const playBtnRef = useRef(null);
  const muteBtnRef = useRef(null);

  useEffect(() => {
    const pepeElement = pepeRef.current;
    const videoElement = videoRef.current;
    const playBtnElement = playBtnRef.current;
    const muteBtnElement = muteBtnRef.current;

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

    const handlePlay = () => {
      videoElement.play();
      playBtnElement.style.display = 'none';
    };

    const handleEnded = () => {
      playBtnElement.style.display = 'flex';
    };

    const handleMute = () => {
      videoElement.muted = !videoElement.muted;
      muteBtnElement.textContent = videoElement.muted ? 'Unmute' : 'Mute';
    };

    if (playBtnElement) {
      playBtnElement.addEventListener('click', handlePlay);
    }

    if (videoElement) {
      videoElement.addEventListener('ended', handleEnded);
    }

    if (muteBtnElement) {
      muteBtnElement.addEventListener('click', handleMute);
    }

    return () => {
      if (pepeElement) {
        observer.unobserve(pepeElement);
      }

      if (playBtnElement) {
        playBtnElement.removeEventListener('click', handlePlay);
      }

      if (videoElement) {
        videoElement.removeEventListener('ended', handleEnded);
      }

      if (muteBtnElement) {
        muteBtnElement.removeEventListener('click', handleMute);
      }
    };
  }, []);

  return (
    <section 
      className='trailer relative bg-gray-100 pt-12 pb-32 lg:py-36 overflow-hidden'
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <BulletHoles />
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

      <div className='relative trailer-video-container w-full max-w-[1218px] mx-auto mt-12 z-[2]'>
        <div className='relative w-full h-[380px] sm:h-[700px] lg:h-[811px]'>
          {/* Video Background */}
          <Image 
            src={VideoBg} 
            alt='Video Background' 
            className='absolute top-0 left-0 w-full h-full object-cover hidden lg:block' 
          />
          <Image 
            src={VideoBgMob} 
            alt='Video Background' 
            className='absolute top-0 left-0 w-full h-full object-cover lg:hidden' 
          />
          {/* Video Cover Frame */}
          <div className='video-cover-frame absolute top-[16%] lg:top-[14%] left-[2%] lg:left-[18%] w-[95.5%] lg:w-[72.5%] h-auto'>
            <Image 
              src={VideoCoverFrame} 
              alt='Video Background' 
              className='relative w-full h-auto z-[1]' 
            />
            <video 
              ref={videoRef}
              src={VideoFile} 
              className='absolute top-0 w-[99%] left-[3px] h-auto rounded-3xl'
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Play Button */}
          <div
            ref={playBtnRef}
            id='video-play-btn'
            className='play-btn absolute top-[47%] left-[50%] lg:left-[55%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-row items-center justify-center w-[45px] lg:w-[100px] h-[45px] lg:h-[100px] rounded-full bg-black z-[2]'>
            <Image 
              src={PlayBtn} 
              alt='Play Button' 
              className='w-[22px] lg:w-[48px] h-[22px] lg:h-[48px] hover:scale-125 transition-all duration-300' 
            />
          </div>
          {/* Mute Button */}
          <button
            ref={muteBtnRef}
            className='mute-btn absolute top-[25%] right-0 lg:right-[10%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-row items-center justify-center w-[45px] lg:w-[80px] h-[45px] lg:h-[80px] rounded-full bg-black text-white z-[2]'
          >
            Mute
          </button>
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