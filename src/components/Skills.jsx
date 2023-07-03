import HTML from '../assets/html5.png'
import CSS from '../assets/css3.png'
import JavaScript from '../assets/js.png'
import React from '../assets/react.png'
import SASS from '../assets/sass.png'
import Git from '../assets/git.png'
import TailwindCss from '../assets/tailwind-css.png'
import Firebase from '../assets/firebase.png'

const list = [
    'VS Code', 'Adobe Photoshop', 'Agile', 'Scrum', 'Figma', 'Ms Word', 'Ms Excel', 'Github', 'Collaborative', 'Positive Attitude', 'Self-taught'
]

const Skills = () => {
    return (
        <div name="skills" className='w-full h-screen font-bold items-center justify-center py-4'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='overflow-hidden items-center whitespace-nowrap'>
                    <ul className='flex md:gap-4 text-white  items-center animate-marquee-infinite px-4 mx-2'>
                        {
                            list.map((item) => (
                                <li key={item} className='inline-block px-4 py-1 bg-gray-800 rounded-full items-center mx-4'>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <p className='py-4 font-semibold text-xl md:text-3xl text-white'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-8' data-aos='fade-up'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-white rounded'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-white rounded'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-white rounded'>
                        <img className='w-20 mx-auto mt-6' src={SASS} alt="SCSS icon" />
                        <p className='my-4'>SASS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-white rounded'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-white rounded'>
                        <img className='w-20 mx-auto' src={React} alt="React icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-white rounded'>
                        <img className='w-20 mx-auto mt-6' src={TailwindCss} alt="TailwindCss icon" />
                        <p className='my-4'>TAILWIND CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-white rounded'>
                        <img className='w-20 mx-auto mt-6' src={Git} alt="Git icon" />
                        <p className='my-4'>GIT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-white rounded'>
                        <img className='w-20 mx-auto' src={Firebase} alt="Firebase icon" />
                        <p className='my-4'>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills