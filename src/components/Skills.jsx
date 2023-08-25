import HTML from '../assets/html5.png'
import CSS from '../assets/css3.png'
import JavaScript from '../assets/js.png'
import React from '../assets/react.png'
import Nextjs from '../assets/Nextjs.png'
import SASS from '../assets/sass.png'
import GIT from '../assets/git.png'
import TailwindCss from '../assets/tailwind-css.png'
import Firebase from '../assets/firebase.png'
import Nodejs from '../assets/nodejs.png'
import SkillCard from './SkillCard'

const list = [
    'VS Code', 'Context API', 'Reducers', 'Redux', 'Redux Tool Kit', 'React-Router', 'Node JS', 'Mongo DB', 'Figma', 'Github', 'Agile', 'Scrum', 'Collaborative', 'Positive Attitude', 'Self-taught'
]

const Skills = () => {
    return (
        <div name="skills" className='w-full md:h-screen font-bold items-center justify-center py-4'>
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

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-2 text-center py-8' data-aos='fade-up'>
                    <SkillCard src={Nextjs} alt="Next icon" imgStyles={"w-30 my-10 mx-auto h-10"} name={"NEXT JS"}></SkillCard>
                    <SkillCard src={React} alt="React icon" imgStyles={"w-20 mx-auto mt-4"} name={"React JS"}></SkillCard>
                    <SkillCard src={JavaScript} alt="JS icon" imgStyles={"w-20 mx-auto"} name={"JavaScript"}></SkillCard>
                    <SkillCard src={Nodejs} alt="Node icon" imgStyles={"w-20 mx-auto mt-4"} name={"Node JS"}></SkillCard>
                    <SkillCard src={TailwindCss} alt="Tailwind icon" imgStyles={"w-20 mx-auto mt-7"} name={"Tailwind CSS"}></SkillCard>
                    <SkillCard src={GIT} alt="Git icon" imgStyles={"w-20 mx-auto mt-6"} name={"GIT"}></SkillCard>
                    <SkillCard src={Firebase} alt="Firebase icon" imgStyles={"w-20 mx-auto"} name={"Firebase"}></SkillCard>
                    <SkillCard src={SASS} alt="SCSS icon" imgStyles={"w-20 mx-auto mt-6"} name={"SCSS"}></SkillCard>
                    <SkillCard src={HTML} alt="HTML icon" imgStyles={"w-20 mx-auto"} name={"HTML"}></SkillCard>
                    <SkillCard src={CSS} alt="CSS icon" imgStyles={"w-20 mx-auto"} name={"CSS"}></SkillCard>
                </div>
            </div>
        </div>
    )
}

export default Skills