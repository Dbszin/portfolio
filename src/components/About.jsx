import React from 'react'
import heroimage from '../assets/heroimage.png'


const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">

      <div className="md:grid md:grid-cols-2 sm:py-16">

          <div className="mt-4 md:mt-0 text-left flex">
            <div className="my-auto mx-6">
              <h2 className="text-4xl font-bold mb-4 bg-primary-gradient text-transparent bg-clip-text">Sobre mim</h2>
              <p className="text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur reiciendis explicabo! Odit quisquam cum nemo hic quibusdam recusandae harum enim autem dolorum quia! Quidem vero libero cupiditate aliquid? Obcaecati!
              </p>
            </div>
          </div>

          <img className="mx-auto rounded-3xl py-8 md:py-0" src={heroimage} width={300} height={300 }alt="" />

      </div>
    </div>
  )
}

export default About
