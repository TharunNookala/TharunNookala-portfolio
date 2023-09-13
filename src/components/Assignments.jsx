import AssignmentCard from './AssignmentCard';
import { NavLink } from 'react-router-dom';
import {assignmentsData} from '../data/assignmentsData';

const Assignments = () => {
return (
        <div className='p-2 w-screen min-h-screen font-mono border-[15px] border-white flex flex-col gap-2'>
            <NavLink to='/' className="text-white w-[200px] text-xl sm:text-2xl font-bold md:my-6 mx-auto md:mx-0 py-5 text-center rounded-md border">
                &larr; Back
            </NavLink>
            <div className='h-full font-anto font-extrabold text-4xl sm:text-6xl text-white py-2 px-4 mb-2'>
                <span className='text-5xl md:text-7xl'> F</span>or the past few months I have been doing a couple of assignments as part of hiring process of various companies.
            </div>
            <div className='p-2 h-3/5 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2 items-start justify-evenly'>
            {assignmentsData.map(assignment => <AssignmentCard 
                                    key={assignment.id}
                                    name={assignment.name} 
                                    image={assignment.image} 
                                    techstack={assignment.techstack}
                                    description={assignment.description}
                                    github={assignment.github} 
                                    live={assignment.live} 
                                    />)}

            </div>
        </div>
    )
}

export default Assignments