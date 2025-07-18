import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
    id="skills"
    style={{transform:"scale(0.9)"}}
    className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20">
        <SkillText/>
          <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
              {
                  Skill_data.map((skill, index) => (
                      <SkillDataProvider
                          key={index}
                          src={skill.Image}
                          width={skill.width}
                          height={skill.height}
                          index={index}
                      />
                  ))
              }
          </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {
                Frontend_skill.map(( skill, index) => (
                    <SkillDataProvider
                        key={index}
                        src={skill.Image}
                        width={skill.width}
                        height={skill.height}
                        index={index}
                    />
                ))
            }
        </div>

          <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
              {
                  Backend_skill.map((skill, index) => (
                      <SkillDataProvider
                          key={index}
                          src={skill.Image}
                          width={skill.width}
                          height={skill.height}
                          index={index}
                      />
                  ))
              }
          </div>
          <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
              {
                  Full_stack.map((skill, index) => (
                      <SkillDataProvider
                          key={index}
                          src={skill.Image}
                          width={skill.width}
                          height={skill.height}
                          index={index}
                      />
                  ))
              }
          </div>
          <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
              {
                  Other_skill.map((skill, index) => (
                      <SkillDataProvider
                          key={index}
                          src={skill.Image}
                          width={skill.width}
                          height={skill.height}
                          index={index}
                      />
                  ))
              }
          </div>
          <div className='w-full h-full absolute'>
              <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                <video
                 className='w-full h-auto object-cover'
                 preload='false'
                 autoPlay
                 playsInline
                 loop
                 muted
                 src="/cards-video.webm"
                 />
              </div>
          </div>
    </section>
  )
}

export default Skills