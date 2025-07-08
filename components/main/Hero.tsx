import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div id='aboutme' className='flex flex-col relative h-full w-full'>
        <video
            autoPlay
            muted
            loop
            className='rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover z-[-1]'
        >
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero