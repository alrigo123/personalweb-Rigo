import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
                <div>
                    {/* <Image
                        src="/../public/assets/rigo.jpg"
                        className="sm:w-[20%] h-[10%] border-lime-50 mx-auto my-4 rounded-2xl"
                        alt="Imagen circular"
                        width='2000'
                        height='2000'
                    /> */}
                    <h1><span className='text-[#417e2b]'>Rigoberto Estrada Zuniga</span></h1>
                    <h1 className='py-4 text-gray-900'>Ingeniero Agronomo</h1>
                    <p className='py-4 text-gray-800 max-w-[70%] m-auto'>Me desempeño como investigador agrario en el Instituto Nacional de Innovación Agraria desde 1997 habiendo generado tecnologías y variedades mejoradas en granos andinos y cereales, actualmente está a mi responsabilidad el Programa Nacional de Cereales, Granos Andinos y Leguminosas del INIA.</p>
                    <p className='uppercas tracking-widest text-gray-600 my-3'>CUSCO - PERÚ 2023</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <Link href='https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=135' target="_blank">
                                <BsFillPersonLinesFill />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <Link href='https://www.facebook.com/rigoberto.estradazuniga' target="_blank">
                                <FaFacebook />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <Link href='https://www.instagram.com/rigobertoestradazuniga/' target="_blank">
                                <FaInstagram />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <Link href='https://www.linkedin.com/in/rigoberto-estrada-zuniga-7b0506b1/' target="_blank">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="flex flex-wrap my-4 content-center justify-center align-center items-center place-content-center place-items-center">
        //     <div className="w-full md:w-1/2">
        //         <h1 className='flex flex-wrap justify-center items-center m-auto max-w-[80%]'>Hola, Soy <span className='text-[#5651e5] max-w[100%]'>Rigoberto Estrada Zuniga</span></h1>
        //         <h1 className='flex flex-wrap justify-center items-center py-4 text-gray-700 m-auto max-w-[70%]'>Ingeniero Agronomo</h1>
        //         <p className='flex flex-wrap justify-center items-center py-4 text-gray-600 max-w-[70%] m-auto'>Me desempeño como investigador agrario en el Instituto Nacional de Innovación Agraria desde 1997 habiendo generado tecnologías y variedades mejoradas en granos andinos y cereales, actualmente está a mi responsabilidad el Programa Nacional de Cereales, Granos Andinos y Leguminosas del INIA.</p>
        //         <p className='flex flex-wrap justify-center items-center uppercas tracking-widest text-gray-600 m-auto max-w-[40%]'>CUSCO - PERÚ 2023</p>
        //         <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
        //             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        //                 <BsFillPersonLinesFill />
        //             </div>
        //             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        //                 <FaFacebook />
        //             </div>
        //             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        //                 <FaInstagram />
        //             </div>
        //             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        //                 <FaTwitter />
        //             </div>
        //         </div>
        //     </div>
        //     <div class="w-full md:w-1/2">
        //         <Image
        //             src="/../public/assets/rigo.jpg"
        //             className="w-[50%] h-[50%] border-lime-50 mx-auto my-4 rounded-2xl"
        //             alt="Imagen circular"
        //             width='600'
        //             height='600'
        //         />
        //     </div>
        // </div>

    )
}

export default Main