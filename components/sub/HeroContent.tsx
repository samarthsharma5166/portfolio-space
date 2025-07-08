'use client'
import { resume } from '@/constants'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'
function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border-[#7o42f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Full Stack Developer Porfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I&apos;m Samarth Sharma, a self-taught Full-Stack Developer passionate about building clean, scalable web applications and real-world tools. With experience in React, Next.js, Node.js, MongoDB, and DevOps tools like Docker and CI/CD, I specialize in turning ideas into production-ready solutions. Whether it&apos;s crafting user-focused interfaces or deploying secure, performant backends — I love solving meaningful problems through code.
        </motion.p>
        <motion.a
          href={resume}
          target="_blank"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
      >
        <Image
        src={"/mainIconsdark.svg"}
        alt='work icons'
        height={650}
        width={650}
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent