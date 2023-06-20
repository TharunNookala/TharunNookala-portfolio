import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4' data-aos='fade-down' data-aos-delay="400">
            <h1 className='text-4xl font-bold text-[#ff7b9e]'>
                <Link to='home' smooth={true} duration={500}>
                    &lt;tharun/&gt;
                </Link>
            </h1>

            <ul className='hidden md:flex gap-3 text-xl text-white'>
                <li className='p-4 cursor-pointer'>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
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

            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu className='text-white' size={23} /> : <AiOutlineClose className='text-white' size={23} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-screen border-2 border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#ff7b9e] mt-8 mb-4 px-4'>&lt;tharun/&gt;</h1>
                <ul className='uppercase p-4 text-white'>
                    <li className='p-4 border-b border-gray-500 cursor-pointer text-white'><Link smooth={true} duration={500} to="home" >Home</Link></li>
                    <li className='p-4 border-b border-gray-500 cursor-pointer text-white'><Link smooth={true} duration={500} to="about" >About</Link></li>
                    <li className='p-4 border-b border-gray-500 cursor-pointer text-white'><Link smooth={true} duration={500} to="skills" >Skills</Link></li>
                    <li className='p-4 border-b border-gray-500 cursor-pointer text-white'><Link smooth={true} duration={500} to="projects" >Projects</Link></li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar