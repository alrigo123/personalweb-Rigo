import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { useRouter } from 'next/router'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')

    const router = useRouter()

    useEffect(() => {
        //other pages more
        if (router.asPath === '/project') {
            setNavBg('transparent');
            setLinkColor('#ecf0f3')
        } else {
            setNav('#ecf0f3')
            setLinkColor('#1f2937')
        }
    }, [router]); //run everitme route changes



    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            {/* Default navbar */}
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image src="/../public/assets/a.png" alt='/' width='125' height='50' />
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex items-center justify-center content-center'>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Acerca de</li>
                        </Link>
                        <Link href="/#rewards">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Premios</li>
                        </Link>
                        <Link href="/#publications">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Publicaciones</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Proyectos</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contacto</li>
                        </Link>
                        {/* <button onClick={() => setTheme("light")} */}
                        {/* <button
                            className="ml-10 bg-slate-100 p-2 rounded-xl">
                            <RiSunLine size={25} color="black" />
                        </button> */}
                    </ul>

                    <div onClick={handleNav} className='md:hidden'>
                        {/* I think this is the burguer for menu responsive */}
                        <AiOutlineMenu size={25} />
                    </div>

                </div>
            </div>

            {/* Mobile menu */}
            {/* When menu pop up then the color will change acordding to width device */}
            <div onClick={handleNav} className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ?
                    ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>

                            <Image src='/../public/assets/a.png' width='87' height='35' alt='/' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                {/* ICON */}
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-3'>"QUOTES"</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Acerca de</li>
                            </Link>
                            <Link href='/#rewards'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Premios</li>
                            </Link>
                            <Link href='/#publications'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Publicaciones</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Proyectos</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contacto</li>
                            </Link>
                            {/* <button
                                className="py-4 w-[20%] bg-red-700 rounded-sm border-solid">
                                <RiSunLine size={25} color="black" />
                            </button> */}
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Contactame por</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://www.facebook.com/alex.estradacuba.9'>
                                        <FaFacebook />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaInstagram />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar