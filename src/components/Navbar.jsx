import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)

    }
  return (
    
        <div className='bg-black  text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>

            <h1 className='text-3xl font-bold text-[rgb(227,0,0)] ml-4'>Douglas</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'> <a href="#sobre">Sobre</a></li>
                <li className='p-5'><a href="#trabalho">Trabalho</a></li>
                <li className='p-5'><a href="#contato">Contato</a></li>
            </ul>
            <div onClick ={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>} 

            </div>

            <div className={nav ?'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500': 'fixed left-[-100%]'}>

                <h1 className='text-3xl primary-color m-4'>Douglas</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href="#home">Home</a></li>
                    <li className='p-2'><a href="#sobre">Sobre</a></li>
                    <li className='p-2'><a href="#trabalho">Trabalho</a></li>
                    <li className='p-2'><a href="#experiencia">Experiência</a></li>
                    <li className='p-2'><a href="#contato">Contato</a></li>
                </ul>

            </div>

        </div>
    
  )
}

export default Navbar
