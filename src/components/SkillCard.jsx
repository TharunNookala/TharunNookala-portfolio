
const SkillCard = ({ src, name, imgStyles }) => {
    return (
        <div className="flex flex-col items-center">
        <div className='h-20 w-20 flex items-center justify-center shadow-md shadow-[#040c16]  duration-500 p-2 bg-white rounded overflow-hidden'>
            <img className={`imgStyles object-fill`} src={src} alt="tech icons" />
        </div>
            <p className='text-sm mt-2'>{name}</p>
        </div>
    )
}

export default SkillCard