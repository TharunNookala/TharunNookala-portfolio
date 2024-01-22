import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSection'
import { ProjectsData } from '../data/ProjectsData'

const Projects = () => {
  const [data, setData] = useState();

  useEffect(()=>{
    setData(ProjectsData);
  },[])
  if(!data) return  <div className='w-screen h-screen items-center justify-center bg-gray-500'>Loading...</div>
  return (
    <HeroSection>
       <div name="projects" className='w-[90%] max-h-[80vh] grid  md:items-end overflow-y-scroll overflow-x-hidden no-scrollbar scrollbar-hide scroll-smooth p-2'>
                {data.map((project, index) => (
                    <div key={index}  className='w-full h-full sm:min-w-[600px] relative md:w-auto sm:min-h-[600px] shadow-xl flex flex-col p-4 my-4 mx-2 rounded-lg duration-300 border-2 sm:mb-2'>
                        <img src={`${project.image}`} alt={project.name} className='object-contain sm:bg-cover w-full h-full'/>
                        <button className='lg:hidden block self-center bg-[#1d1d1d] w-40 rounded-md font-medium my-6  px-6 py-3'><a href={project.live} >Live</a></button>
                        <div className='hidden absolute top-0 left-0 right-0 bottom-0 opacity-0  hover:text-white hover:bg-[rgb(1,1,76)] hover:opacity-90 p-4 w-full h-full lg:flex flex-col items-center justify-center'>
                        <h2 className=' text-5xl font-extrabold text-center pt-6 pb-2 mt-10'>{project.name}</h2>
                            <p className='text-center w-4/5 flex justify-center items-center text-xl font-bold mt-2'>
                              Tech stack used&rarr;
                              <span className='py-2 mx-8'>
                                  {project.techstack}
                              </span>
                            </p>
                            <p className='text-center w-4/5 flex justify-center items-center text-xl font-bold mt-2'>
                              Description&rarr;
                            <span className='py-2 mx-10 text-base font-medium'>
                                {project.description}
                            </span>
                            </p>
                            <div className='flex items-center justify-between w-1/2'>
                              <a href={project.github} className="text-center underline font-bold py-2">View Code🔗</a>
                              <button className='text-black bg-[#ff7b9e] w-40 rounded-md font-medium my-6  px-6 py-3'><a href={project.live} >Live</a></button>
                            </div>
                        </div>
                    </div>

                ))
                }
            </div>
    </HeroSection>
  )}
export default Projects