import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '200 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse'
        },
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02
      }, 0)
    }, containerRef)

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title ${containerClass}`}>
      <h2 className="h2-heading yellowHeading text-[44px] md:text-[4.5rem] text-center relative w-[105%] z-[4]">
        {title.split('<br />').map((letter, index) => (
          <span
            key={index}
            className="animated-word"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h2>

      <h2 className="h2-shadow text-[44px] md:text-[4.55rem] text-center absolute w-[100.5%] left-[7px] -top-[27px] z-[3]">
        {title.split('<br />').map((letter, index) => (
          <span
            key={index}
            className="animated-word shadow-text"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h2>

      {/* {title.split('<br />').map((line, index) => (
        <div
          key={index}
          className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'
        >
          {line.split(' ').map((word , i) => (
            <span
              key={i}
              className='animated-word'
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))} */}
    </div>
  )
}

export default AnimatedTitle