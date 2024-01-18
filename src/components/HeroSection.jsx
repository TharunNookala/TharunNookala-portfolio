import { IoIosCloseCircleOutline } from "react-icons/io";

const HeroSection = ({children}) => {
  return (
    <section className='bg-[#f2f2f20a] outline-1 outline-[rbga(242,242,242,0.05)] shadow-[0_40_80_rgba(0,0,0,0.5)] w-4/5 h-full sm:min-h-[80%] rounded-2xl window-outline'>
            <div className='w-full h-full window-main flex flex-col'>
                <div className='window-bar'>
                    <div className="flex gap-3">
                        <span className='w-3 h-3 rounded-full red-dot'></span>
                        <span className='w-3 h-3 rounded-full yellow-dot'></span>
                        <span className='w-3 h-3 rounded-full green-dot'></span>
                    </div>
                    <IoIosCloseCircleOutline fill="gray" size={20}/>
                </div>
                <div className="bg-[rbga(16,16,16,0.7)]">
                    {children}
                </div>
            </div>
    </section>
  )
}

export default HeroSection