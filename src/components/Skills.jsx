import React from 'react'
import react from '../assets/react.png'
import java from '../assets/java.png'
import svelte from '../assets/svelte.png'
import python from '../assets/python.png'
import javascript from '../assets/javascript.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div className='border-gray-600  text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
                    place-items-center md:flex md:justify-between md:items-center'>



        <h2 className="text-white text-2xl md:text-4xl font-bold m-4">
            My <br/> Tech <br/> Stack
        </h2>               
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={react} alt="" />
            <p className="mt-2">REACT</p>

        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={css} alt="" width={100} height={100} />
            <p className="mt-2">CSS</p>

        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={html} alt="" width={100} height={100} />
            <p className="mt-2">HTML</p>

        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={javascript} alt="" width={100} height={100}/>
            <p className="mt-2">JAVASCRIPT</p>

        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={java} alt=""  width={100} height={100}/>
            <p className="mt-2">JAVA</p>

        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={python} alt=""  width={100} height={100}/>
            <p className="mt-2">PYTHON</p>

        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={svelte} alt=""  width={100} height={100}/>
            <p className="mt-2">SVELTE</p>

        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={tailwind} alt="" width={100} height={100} />
            <p className="mt-2">TAILWIND</p>

        </div>
        
        
        
        
    </div>
  )
}

export default Skills
