import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'; // FaHome, FaUser are example icons


const Footer = () => {
  return (
    <>
    <div className=" bg-rose-300 flex flex-col justify-center gap-2.5 border-slate-900/10 border-t-2 relative" id='project'>
        <div className='flex flex-row justify-center gap-2.5 mt-16'>
        
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className=' text-pink-700 hover:text-pink-950  self-center'>
        <FaInstagram size={50}  />
      </a>
      <a href="https://linkedin.com/Zubayda_zk" target="_blank" rel="noopener noreferrer"  className=' text-blue-700 hover:text-blue-900  self-center'>
        <FaLinkedin size={50} />
      </a>
      <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer"  className=' text-blue-600 hover:text-blue-800  self-center'>
        <FaFacebook size={50} />
      </a>
      <a href="https://github.com/Zubaida23" target="_blank" rel="noopener noreferrer"  className=' text-black hover:text-gray-800 self-center'>
        <FaGithub size={50} />
      </a>
      </div>
      <p className="text-center  mt-4">Copyright &copy; 2024 Zubaida_zk. All rights reserved.</p>
        </div>
    </>
  )
}

export default Footer