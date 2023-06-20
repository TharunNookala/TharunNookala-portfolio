import { ProjectsData } from "../data/ProjectsData";

const Projects = () => {
    return (

        <div name="projects" className='w-full py-[10rem] px-4 text-white' data-aos='fade-up' data-aos-delay="400">
            <div className='mx-auto sm:flex sm:flex-col md:flex-row gap-4 md:items-end py-4'>
                {ProjectsData.map((project, index) => (
                    <div key={index} className='w-[350px] md:w-[400px] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-[5px] sm:mb-2'>
                        <div style={{ backgroundImage: `url(${project.image})` }} className="bg-contain bg-no-repeat bg-center h-[150px]"></div>
                        <h2 className='text-[#ff7b9e] text-2xl font-bold text-center pt-6 pb-2 border-b'>{project.name}</h2>
                        <div className='text-center font-medium'>
                            <p className='text-center text-xl font-bold mt-2'>Tech stack used</p>
                            <p className='py-2 border-b mx-8'>
                                {project.techstack}
                            </p>
                            <p className='text-center text-xl font-bold mt-2'>Description</p>
                            <p className='py-2 border-b mx-8'>
                                {project.description}
                            </p>
                        </div>
                        <a href={project.github} className="text-center font-bold py-2">View Code🔗</a>
                        <button className='text-black bg-[#ff7b9e] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href={project.live} >Live</a></button>
                    </div>

                ))
                }

            </div>
        </div>
    )
}

export default Projects