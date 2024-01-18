import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

const StickyHeader = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <header className=' w-full sticky top-0 z-50 p-8'>
        <section className='hidden w-full lg:flex items-center justify-around px-6'>
            <div className='w-full text-center'>
                <h1 className='text-3xl font-bold '>
                    <Link to='home' smooth={true} duration={500}>
                        &lt;tharun/&gt;
                    </Link>
                </h1>
            </div>
            
            <ul className='hidden md:flex gap-3 py-[6px] px-10 text-lg font-medium border-[#ede9e91a] rounded-l-full rounded-r-full bg-[#f2f2f20d]'>
                <li className='p-4 cursor-pointer'>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='p-4 cursor-pointer'>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='p-4 cursor-pointer'>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='p-4 cursor-pointer'>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='w-full px-2 flex justify-end'>
                <NavLink to="/assignments" className="w-[200px] cursor-pointer text-xl font-semibold hover:bg-[#f2f2f20d] hover:scale-110 md:my-1 mx-auto md:mx-0 py-2 text-center rounded-md md:ml-3">
                    Assignments &rarr;
                </NavLink>
            </div>
        </section>
        <div onClick={handleNav} className='sticky cursor-pointer lg:hidden z-50'>
                {!nav ? <AiOutlineMenu className='text-white absolute right-0' size={23} /> : <AiOutlineClose className='text-white absolute right-0' size={23} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-full h-1/2 border-2 border-r-gray-900 bg-[#000300] opacity-80 ease-in-out duration-500' : 'ease-in-out duration-500 w-full fixed top-[-100%] left-0'}>
                <h1 className='w-full text-3xl font-bold mt-8 mb-4 px-4'>&lt;tharun/&gt;</h1>
                <ul className='uppercase p-4 text-white'>
                    <li className='p-4 border-b border-gray-500 cursor-pointer text-white'><Link smooth={true} duration={500} to="about" >About</Link></li>
                    <li className='p-4 border-b border-gray-500 cursor-pointer text-white'><Link smooth={true} duration={500} to="skills" >Skills</Link></li>
                    <li className='p-4 border-b border-gray-500 cursor-pointer text-white'><Link smooth={true} duration={500} to="projects" >Projects</Link></li>
                    <li className='p-4 border-b border-gray-500 cursor-pointer text-white'><Link smooth={true} duration={500} to="contact" >Contact</Link></li>
                    <li className='text-green-600 p-4 text-sm font-medium'>
                    <NavLink to="/assignments" className="w-[200px] cursor-pointer text-xl font-semibold hover:bg-[#f2f2f20d] hover:scale-110 md:my-1 mx-auto md:mx-0 py-2 text-center rounded-md md:ml-3">
                    Assignments &rarr;
                    </NavLink>
                    </li>
                </ul>
            </div>
    </header>
  )
}

export default StickyHeader