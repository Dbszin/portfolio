import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'


const Work = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-5'>
            <div className='pb-8'>
                <p className='text-4xl mb-3 font-bold bg-primary-gradient text-transparent bg-clip-text'>Trabalhos</p>
                <p className='text-gray-400'>Confira alguns dos meus trabalhos recentes</p>
            </div>



            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                    <img src={proj1} layout="fill" objectFit="cover" alt="" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col
                                 justify-center items-center'>
                        <span className='text-2xl font-bold text-white trcking-wider'>Screenmatch sem Web</span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Dbszin/screenmatch-sem-web" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                            font-bold text-lg'>
                                    Project
                                </button>
                            </a>
                        </div>
                    </div>
                </div>




                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
            h-[200px] bg-cover relative'>
                    <img src={proj2} layout="fill" objectFit="cover" alt="" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col
                 justify-center items-center'>
                        <span className='text-2xl font-bold text-white trcking-wider'>Página de conversão</span>
                        <div className='pt-8 text-center'>
                            <a href="https://personallaurabernardi.com" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
            font-bold text-lg'>
                                    Project
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
            h-[200px] bg-cover relative'>
                    <img src={proj2} layout="fill" objectFit="cover" alt="" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col
                 justify-center items-center'>
                        <span className='text-2xl font-bold text-white trcking-wider'>Página de conversão</span>
                        <div className='pt-8 text-center'>
                            <a href="https://personallaurabernardi.com" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
            font-bold text-lg'>
                                    Project
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
            h-[200px] bg-cover relative'>
                    <img src={proj2} layout="fill" objectFit="cover" alt="" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col
                 justify-center items-center'>
                        <span className='text-2xl font-bold text-white trcking-wider'>Página de conversão</span>
                        <div className='pt-8 text-center'>
                            <a href="https://personallaurabernardi.com" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
            font-bold text-lg'>
                                    Project
                                </button>
                            </a>
                        </div>
                    </div>
                </div>



                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
            h-[200px] bg-cover relative'>
                    <img src={proj2} layout="fill" objectFit="cover" alt="" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col
                 justify-center items-center'>
                        <span className='text-2xl font-bold text-white trcking-wider'>Página de conversão</span>
                        <div className='pt-8 text-center'>
                            <a href="https://personallaurabernardi.com" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
            font-bold text-lg'>
                                    Project
                                </button>
                            </a>
                        </div>
                    </div>
                </div>



                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
            h-[200px] bg-cover relative'>
                    <img src={proj2} layout="fill" objectFit="cover" alt="" />
                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/30 absolute inset-0 flex flex-col
                 justify-center items-center'>
                        <span className='text-2xl font-bold text-white trcking-wider'>Página de conversão</span>
                        <div className='pt-8 text-center'>
                            <a href="https://personallaurabernardi.com" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
            font-bold text-lg'>
                                    Project
                                </button>
                            </a>
                        </div>
                    </div>
                </div>





















            </div>

        </div>
    )
}

export default Work
