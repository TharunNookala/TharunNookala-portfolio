import ProfileImage from '../assets/profile-img.JPG'
import Resume from '../assets/TharunNookala.pdf';
import HeroSection from './HeroSection';

const Home = () => {
    
    return (
        <HeroSection>
        <div name="home" className='h-full text-white py-4 px-4 flex flex-col'>
            <div className='max-w-[1240px] h-[75vh] mx-auto grid md:grid-cols-2 sm:gap-4 items-center'>
               <img className='w-[500px] mx-auto mt-[50px] md:mt-[30px] rounded-xl opacity-70 mix-blend-overlay hover:opacity-50' src={ProfileImage} alt='userphoto' />
                <div className='md:mt-[100px]'>
                    <p className='font-bold p-2 text-2xl'>Hello! I'm</p>
                    <h1 className='md:text-6xl lg:text-7xl text-4xl font-bold md:py-6 text-white'>
                        Tharun Nookala
                    </h1>
                    <p className='font-bold text-2xl'>A Frontend Developer <br /> Ex-Systems Engineer at Infosys</p>
                    <a href={Resume} download>
                        <button className='text-[#ff7b9e] bg-white w-[200px] hover:bg-black hover:text-white rounded-md font-medium my-6 mx-auto md:mx-0 py-5'>
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
        </div >
        </HeroSection>


    )
}

export default Home
