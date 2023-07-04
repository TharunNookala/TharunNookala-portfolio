import { ProjectsData } from "../data/ProjectsData";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Projects = () => {
    const sliderLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 320
    }
    const sliderRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 320
    }
    return (
        <div name='projects' className='w-full h-screen relative p-4 flex items-center text-white group'>
            <MdChevronLeft
                onClick={sliderLeft}
                className='rounded-full absolute opacity-60 hover:opacity-100 cursor-pointer z-10 text-black bg-white hidden group-hover:block'
                size={40}
            />
            <div id='slider' className='w-full h-full flex md:items-end overflow-x-scroll no-scrollbar scrollbar-hide scroll-smooth p-2'>
                {ProjectsData.map((project, index) => (
                    <div key={index} className='min-w-[300px] md:w-[400px] shadow-xl flex flex-col p-4 my-4 mx-2 rounded-lg hover:scale-105 duration-300 border-[5px] sm:mb-2'>
                        <div style={{ backgroundImage: `url(${project.image})` }} className="bg-contain bg-no-repeat bg-center h-[150px]"></div>
                        <h2 className='text-[#ff7b9e] text-2xl font-bold text-center pt-6 pb-2 border-b'>{project.name}</h2>
                        <div className='text-center font-medium'>
                            <p className='text-center text-xl font-bold mt-2'>Tech stack used</p>
                            <p className='py-2 border-b mx-8'>
                                {project.techstack}
                            </p>
                            <p className='text-center text-xl font-bold mt-2'>Description</p>
                            <p className='py-2 border-b mx-8 '>
                                {project.description}
                            </p>
                        </div>
                        <a href={project.github} className="text-center font-bold py-2">View Code🔗</a>
                        <button className='text-black bg-[#ff7b9e] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href={project.live} >Live</a></button>
                    </div>

                ))
                }
            </div>
            <MdChevronRight
                onClick={sliderRight}
                className='rounded-full opacity-60 hover:opacity-100 cursor-pointer z-10 text-black bg-white'
                size={40}
            />
        </div>

    )
}

export default Projects