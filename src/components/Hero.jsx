import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroimage from '../assets/heroimage.png'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center max-w-[1100px] mx-auto py-12 min-h-screen gap-12 sm:gap-16'>

      {/* Imagem na esquerda */}
      <div className='w-[250px] sm:w-[300px] lg:w-[350px]'>
        <img 
          src={heroimage} 
          alt="hero" 
          className="w-full h-auto rounded-3xl"
        />
      </div>

      {/* Texto na direita */}
      <div className='flex flex-col items-center sm:items-start text-center sm:text-left px-4 sm:px-0'>

        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
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
            className="inline-block"
          />
        </h1>

        <p className='text-white text-lg sm:text-xl my-6 max-w-lg'>
          Meu nome é Douglas, sou estudante de Bacharelado em Engenharia de Software e atualmente estou no 5º semestre, aprofundando-me em conceitos avançados de desenvolvimento de software, arquitetura de sistemas e engenharia de requisitos.
        </p>

        {/* Botões */}
        <div className='flex gap-4 mt-6'>
          <a href="/" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-white font-bold text-center">
            Download Cv
          </a>
          <a href="#contact" className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-white font-bold text-center hover:border-none">
            Contato
          </a>
        </div>

      </div>

    </div>
  )
}

export default Hero
