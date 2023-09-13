import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-full md:h-screen rounded-lg flex flex-col md:flex-row items-center justify-center p-2">
            <div className=' py-2 my-2 mx-4 border-2 rounded-lg' data-aos='fade-up'>
                <p className='lg:text-2xl text-[15px] lg:font-semibold md:w-72 md:text-xl lg:w-[400px] text-white p-4'>
                    I am a Full Stack(MERN) Developer, passionate about Front End Web Development, with 2 years of proven professional experience in front end. I'm skilled in technologies such as  
                    <span className='italic text-gray-500'> React JS, Next JS, JavaScript, Redux, Redux Toolkit, 
                    Tailwind CSS</span> which are the most used tech stack for beautiful responsive UI built today. I am also skilled in backend technologies such as
                    <span className='italic text-gray-500'> Node.js and express, can handle databases with MongoDB.</span> <br/>
                    <span>&nbsp;&nbsp;&nbsp;Also I have built myself few projects using Next JS, React JS, Redux, Redux Tool Kit, Node JS, Mongo DB. I am also Web3
                    enthusiast. Out of Office you'll find me spending time with friends, binge watching movies, playing badminton, less-often reading books.</span>
                </p>
            </div >
            <div className='p-4 md:max-w-[600px]'>
                <div className="p-4 bg-white rounded-lg shadow-lg my-2">
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className='font-bold'>July, 2021 - May, 2023</p>
                    <p className='font-semibold'>Systems Engineer, Infosys Ltd.</p>
                    <ul className="list-disc pl-6">
                        <li>Worked on technologies such as JavaScript, React functional components, CSS for developing various websites.</li>
                        <li>Built several components from scratch for the designs from figma and styled them using Tailwind CSS.</li>
                        <li>Implemented Routing for sub-pages. Used Context API and useReducer for managing state.</li>
                        <li>Created new features, functionalities and capabilities on the e-commerce sites using React functional components and managed state
                            using redux.
                        </li>
                        <li>Performed quality assurance tests on various sites to ensure cross browser compatibility and mobile
                            responsiveness.</li>
                        <li>Collaborated with back-end developers to ensure seamless integration of front-end and back-end
                            functionality.
                        </li>
                    </ul>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <ul className="list-disc pl-6">
                        <li>Bachelor of Technology in Information Technology,
                            <br />Sreenidhi Institute of Science and Technology, Hyderabad.</li>
                        <li>CGPA : 7.14</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default About