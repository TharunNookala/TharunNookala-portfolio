import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full md:h-screen rounded-lg flex flex-col md:flex-row items-center justify-center p-4">
            <div className=' py-2 my-2 mx-4 border-2 rounded-lg' data-aos='fade-up'>
                <p className='md:text-2xl text-[15px] md:font-semibold md:w-[400px] text-white p-4'>
                    I am a passionate Front End Web Developer, with 2 years of professional experience. I'm skilled in various front end technologies such as React JS, Redux,
                    Tailwind CSS which are the most used tech stack for beautiful responsive UI websites built today. Also I have built myself few projects using Next JS, React JS, Redux, Redux Tool Kit, Node JS, Mongo DB. I am also Full Stack(MERN)
                    enthusiast. Out of Office you'll find me spending time with friends, binge watching movies, playing badminton, less-often reading books.
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
                            using react-redux.
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