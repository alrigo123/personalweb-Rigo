import Link from 'next/link'
import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h2 className='py-4'>Get In touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://www.inia.gob.pe/wp-content/uploads/2019/03/036-2019-1200x642.jpg" alt="" />
                {/* <img className='rounded-xl hover:scale-105 ease-in duration-300' src="/../public/assets/contact1.png" alt="" /> */}
              </div>
              <div>
                <h2 className='py-2'>Rigoberto Estrada Zuniga</h2>
                <p>ALGOOOO de suc arear</p>
                <p className='py-4'>Imas sajasnjfnbsdjkfsdkjbvdfjkbsdjkbfsdkjbsd contact me in</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Conect with me</p>
                <div className='flex items-center justify-between py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaFacebook />
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
          {/* right */}

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form action="">
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4 bg-green-400'>Send Message</button>
              </form>

            </div>
          </div>
        </div>

        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 my-0 cursor-pointer hover:scale-105 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5615e5]' size={30} />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Contact