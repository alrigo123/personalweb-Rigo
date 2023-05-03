import Link from 'next/link'
import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='uppercase text-lg font-bold tracking-widest text-[#316523]'>Contacto</p>
        <h2 className='py-4'>Estamos en Contacto</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://www.inia.gob.pe/wp-content/uploads/2019/03/036-2019-1200x642.jpg" alt="" />
                {/* <img className='rounded-xl hover:scale-105 ease-in duration-300' src="/../public/assets/contact1.png" alt="" /> */}
              </div>
              <div>
                <h2 className='pt-3 font-bold text-2xl '>Ing. M.Sc. Rigoberto Estrada Zuniga</h2>
                <p className='pt-3 text-black'>Si deeseas contactarte conmigo escribeme a:</p>
                <p className='py-3 text-black font-bold'>Correos <br /> <strong className='text-blue-500'> restrada@inia.gob.pe <br /> zestradar@gmail.com </strong></p>
                <p className='py-3 text-black font-bold'>Celular <br /> <strong className='text-blue-500'>+51 984045865 </strong></p>
                <p className='py-3 text-black font-bold'>Institucion <br /> <strong className='text-blue-500'> INIA <br /> Av. Micaela Abastidas 310-314 </strong></p>
              </div>
              <div>
                <p className='uppercase pt-3 text-black font-bold'>Contactame tambien por</p>
                <div className='flex items-center justify-between py-4'>
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
          {/* right */}

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form action="/page404">
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nombre</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Numero Celular</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Tema</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensaje</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4 bg-green-400'><Link href='/page404'>Enviar Mensaje</Link></button>
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