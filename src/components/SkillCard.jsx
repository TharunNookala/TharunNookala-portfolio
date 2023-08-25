
const SkillCard = ({ src, name, imgStyles }) => {
    return (
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-white rounded'>
            <img className={imgStyles} src={src} alt="Next icon" />
            <p className='my-4 mt'>{name}</p>
        </div>
    )
}

export default SkillCard