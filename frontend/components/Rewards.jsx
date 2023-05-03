import Image from 'next/image'
import React, { useState } from 'react'
//PROPS AND MORE COMPONENTS
const Rewards = () => {

    const [isHovered, setIsHovered] = useState(true);
    const textHoverStyle = isHovered ? 'visible' : 'invisible';

    const [hover, setHover] = useState(false);

    return (
        <div id='rewards' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

                <p className='uppercase text-lg font-bold tracking-widest text-[#316523]'>Premios</p>
                <h2 className='py-4'>Mis Logros</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>

                    <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col items-center text-center justify-center pt-3'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <h3 className="uppercase text-green-700">Reconocimiento por la labor de investigador agrario</h3>
                                <p className={`${!textHoverStyle} text-gray-700 pt-3`}> <strong>Julio 2012</strong> Certificados de reconocimiento por el desarrollo de variedades</p>
                            </div>
                        </div>
                        {/* <div
                            className="p-4 bg-gray-200 hover:bg-gray-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <p className={`${textHoverStyle} text-gray-700`}>Texto que se muestra al pasar el mouse</p>
                        </div> */}
                    </div>

                    <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col text-center items-center justify-center pt-3'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <h3 className="uppercase text-green-700">la chaquitaklla al investigador del año 2015</h3>
                                <p className={`${!textHoverStyle} text-gray-700 py-3`}> <strong>Marzo 2016</strong> Reconocimiento a la labor de investigación y la generación de tecnologías en granos andinos en el INIA</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col text-center items-center justify-center pt-3'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <h3 className="uppercase text-green-700">merito a la labor de investigador agrario</h3>
                                <p className={`${!textHoverStyle} text-gray-700 py-3`}> <strong>Julio 2015</strong> Reconocimiento por la liberación de la variedades de cultivos andinos</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col text-center items-center justify-center pt-3'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <h3 className="uppercase text-green-700">RECONOCIMIENTO POR DIFUSION DE TRABAJOS DE INVESTIGACION</h3>
                                <p className={`${!textHoverStyle} text-gray-700 py-3`}> <strong>Mayo 2019</strong> Presentacion de artículo científico en el VII congreso mundial de la Quinua</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image alt="/" src="/../public/assets/skills/html.png" width='64' height='64' />
                            </div>
                            <div className='flex flex-col text-center items-center justify-center pt-3'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <h3 className="uppercase text-green-700">RECONOCIMIENTO</h3>
                                <p className={`${!textHoverStyle} text-gray-700 py-3`}> <strong>Julio 2022</strong> 	Reconocimiento a los investigadores más destacados que vienen contribuyendo significativamente en el fortalecimiento de la Investigación e Innovación Agraria</p>
                            </div>
                        </div>
                    </div>

                    {/* --- TRY */}
                    {/* <div className="relative w-64 h-64">
                        <h1
                            className={`text-2xl font-bold absolute left-0 bottom-0 transition-all duration-500 ${hover ? "-translate-y-52" : ""
                                }`}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            la chaquitaklla al investigador del año 2015
                        </h1>
                        <div
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${hover ? "opacity-100" : "opacity-0"
                                } transition-all duration-500`}
                        >
                            <p className="text-sm"><strong>Marzo 2016</strong> Reconocimiento a la labor de investigación y la generación de tecnologías en granos andinos en el INIA</p>
                        </div>
                    </div> */}
                    {/* -- */}

                </div>

            </div>



        </div>
    )
}

export default Rewards