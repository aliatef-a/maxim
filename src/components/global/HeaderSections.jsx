
const HeaderSections = ({ className, text, des }) => {
    return (
        <div className={`mb-5 flex items-center flex-col gap-4  ${className}`}>
            <h2 className="text-secondary font-bold text-2xl">{text}</h2>
            <p className="text-[#646464] text-base font-normal w-11/12 md:w-1/3 leading-7">{des}</p>
        </div>
    )
}

export default HeaderSections