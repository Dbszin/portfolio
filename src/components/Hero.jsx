import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroimage from '../assets/heroimage.png'


const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 '>
      
        <div className='my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
              <img src={heroimage} alt="hero image" />
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="bg-primary-gradient text-transparent bg-clip-text">
            I'm a 
            </span> <br/>
            <TypeAnimation
              sequence={[
                "Full Stack Dev",
                1000,
                "Webdesigner",
                1000,
                "Consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
            Meu nome é Douglas, sou estudante de Bacharelado em Engenharia de Software e atualmente estou no 5º semestre, aprofundando-me em conceitos avançados de desenvolvimento de software, arquitetura de sistemas e engenharia de requisitos.
            </p>
            
            <div className='my-8'>
                    <a href="/" className="px-6 py-3 w-full rounded-xl mr-4 
                    bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-white font-bold ">
                        Download Cv
                    </a>
                    <a href="#contact" className="px-6 py-3 w-full rounded-xl 
                            border border-gray-400 hover:bg-gradient-to-r from-[#007cf0] to-[#00dfd8]
                            text-white font-bold hover:border-none">
                        Contato
                    </a>

            </div>

        </div>
    </div>
  )
}

export default Hero
