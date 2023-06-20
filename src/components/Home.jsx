import ProfileImage from '../assets/profile-img.JPG'
import Resume from '../assets/TharunNookala-Resume.pdf';

const Home = () => {
    return (

        <div name="home" className='w-full bg-transparent text-white py-16 px-4' data-aos='fade-up' data-aos-delay="400" >
            <div className='max-w-[1240px] h-[75vh] mx-auto grid md:grid-cols-2 sm:gap-4 group'>
                <img className='w-[500px] mx-auto sm:mt-[50px] md:mt-[100px] border-[15px] border-orange-100' data-aos='fade-down' data-aos-delay='500' src={ProfileImage} alt='/' />
                <div className='md:mt-[200px]'>
                    <p className='font-bold p-2 text-2xl'>Hello! I'm</p>
                    <h1 className='md:text-6xl lg:text-7xl text-4xl font-bold md:py-6 text-white' data-aos='fade-up' data-aos-delay='500'>
                        Tharun Nookala
                    </h1>
                    <p className='font-bold text-2xl' data-aos='fade-left' data-aos-delay='400'>A Frontend Developer <br /> Ex-Systems Engineer at Infosys</p>
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
