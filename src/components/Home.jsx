import { useNavigate } from 'react-router-dom';
import ProfileImage from '../assets/profile-img.JPG'
import Resume from '../assets/TharunNookala.pdf';

const Home = () => {
    const navigate = useNavigate()
    function handleAssignments(){
        navigate("/assignments");
    }
    return (
        <div name="home" className='h-screen text-white py-4 px-4 flex flex-col'>
            <div className='w-full px-2 flex justify-end'>
            <button onClick={handleAssignments} className="text-white w-[200px] border text-xl font-semibold hover:bg-white hover:text-[#ff7b9e] hover:scale-110 md:my-6 mx-auto md:mx-0 py-5 text-center rounded-md md:ml-3 animate-pulse">
                Assignments &rarr;
            </button>
            </div>
            <div className='max-w-[1240px] h-[75vh] mx-auto grid md:grid-cols-2 sm:gap-4'>
                <img className='w-[500px] mx-auto mt-[50px] md:mt-[30px] border-[15px] border-orange-100' src={ProfileImage} alt='/' />
                <div className='md:mt-[100px]'>
                    <p className='font-bold p-2 text-2xl'>Hello! I'm</p>
                    <h1 className='md:text-6xl lg:text-7xl text-4xl font-bold md:py-6 text-white'>
                        Tharun Nookala
                    </h1>
                    <p className='font-bold text-2xl'>A Frontend Developer <br /> Ex-Systems Engineer at Infosys</p>
                    <a href={Resume} download>
                        <button className='text-[#ff7b9e] bg-white w-[200px] hover:bg-[#ff7b9e] hover:text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-5'>
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
        </div >


    )
}

export default Home
