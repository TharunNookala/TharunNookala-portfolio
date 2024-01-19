import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const HeroSection = ({children}) => {
  const [clicked, setClicked] = useState(false);
  const handleClose = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    },5000)
  }
  return (
    <section data-aos='fade-up' className='bg-[#f2f2f20a] outline-1 outline-[rbga(242,242,242,0.05)] shadow-[0_40_80_rgba(0,0,0,0.5)] w-full lg:w-4/5 h-full sm:min-h-[80%] rounded-2xl window-outline'>
            <div className='w-full h-full window-main flex flex-col'>
                <div className='window-bar'>
                    <div className="flex gap-3">
                        <span className='w-3 h-3 rounded-full red-dot'></span>
                        <span className='w-3 h-3 rounded-full yellow-dot'></span>
                        <span className='w-3 h-3 rounded-full green-dot'></span>
                    </div>
                    {clicked && <p className="text-black text-xs sm:text-sm">Oops! This close button doesn't work.
                              <span className="hidden sm:inline"> Thanks for checking :)</span>
                            </p>}
                    <IoIosCloseCircleOutline fill="gray" size={20} onClick={handleClose}/>
                </div>
                <div className="bg-[rbga(16,16,16,0.7)]">
                    {children}
                </div>
            </div>
    </section>
  )
}

export default HeroSection