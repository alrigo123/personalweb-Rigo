import Image from 'next/image'
import React from 'react'
//PROPS AND MORE COMPONENTS
const Rewards = () => {
    return (
        <div id='rewards' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                
                <p className='uppercase text-lg font-bold tracking-widest text-[#316523]'>Premios</p>
                <h2 className='py-4'>Mis Logros</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className="uppercase">Reconocimiento por la labor de investigador agrario</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className="uppercase">la chaquitaklla al investigador del año 2015</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className="uppercase">merito a la labor de invetigador agrario</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className="uppercase">RECONOCIMIENTO POR DIFUSION DE TRABAJOS DE INVESTIGACION</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className="uppercase">RECONOCIMIENTO</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rewards