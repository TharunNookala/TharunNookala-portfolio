import {
    FaInstagram,
    FaLinkedinIn,
    FaGithubSquare,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'

const Contact = () => {
    return (
        <div name="contact" className='max-w-[1240px] w-full p-8 min-h-[300px] flex flex-col-reverse justify-between items-center sm:flex-row border-t'>
            <div className='flex flex-col-reverse justify-center items-center text-center gap-4'>
                <p className='py-4 font-bold text-xl'>Tharun Nookala | &copy; {new Date().getFullYear()}</p>
                <h1 className='w-full text-3xl font-bold'>&lt;tharun/&gt;</h1>
            </div>
           
            <div className='flex flex-col  justify-between items-center gap-4'>
                <div className='flex w-full justify-between md:w-[75%] my-6'>
                    <a target="_blank" rel="noreferrer" href="mailto:iamtharun7799@gmail.com">
                        <FiMail size={30} />
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tharun-nookala-974031196/">
                        <FaLinkedinIn size={30} />
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://github.com/TharunNookala">
                        <FaGithubSquare size={30} />
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://instagram.com/tharun_pn_?igshid=OGQ5ZDc2ODk2ZA==">
                        <FaInstagram size={30} />
                    </a>
                </div>
                <p className='text-sm font-medium'> Built with love and cup of self made coffee along!</p>
            </div>

        </div >
    )
}

export default Contact