import Image from 'next/image'
import React from 'react'
//PROPS AND MORE COMPONENTS
const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I can do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt ="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt ="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PREMIO</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt ="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PREMIO</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt ="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PREMIO</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt ="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PREMIO</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt ="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PREMIO</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt ="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PREMIO</h3>
                            </div>
                        </div>
                    </div>

                    <a href="http://www.doi.org/10.1016/J.HELIYON.2022.E12712">
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt ="/" src="/../public/assets/skills/INIA440.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>REVISTA CIENTIFICA "New wheat variety INIA 440 - KANCHAREQ: Selection and agronomic and commercial characterization in Cusco, Peru"</h3>
                            </div>
                        </div>
                    </div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Skills