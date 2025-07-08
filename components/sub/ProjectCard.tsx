import Image from 'next/image'
import React from 'react'

interface Props {
  src: string,
  title: string,
  description: string,
  url:string
}
const ProjectCard = ({ src, title, description,url }: Props) => {
  return (
    <a href={url} target='_blank' className='relative z-50 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61]/50 group'>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain group-hover:scale-105 transition-all duration-500 ease-in-out'
      />
      
      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </a>
  )
}

export default ProjectCard