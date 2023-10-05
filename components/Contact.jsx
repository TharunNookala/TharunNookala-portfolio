import {
    FaInstagram,
    FaLinkedinIn,
    FaGithubSquare,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'

const Contact = () => {
    return (
        <div name="contact" className='max-w-[1240px] mx-auto text-white py-16 px-4 grid lg:grid-cols-3 gap-8 items-center'>

            <p className='py-4 font-bold text-xl'>Tharun Nookala | &copy; {new Date().getFullYear()}</p>
            <h1 className='w-full text-3xl font-bold text-[#ff7b9e]'>&lt;tharun/&gt;</h1>
            <div className='flex justify-between md:w-[75%] my-6'>

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

        </div >
    )
}

export default Contact