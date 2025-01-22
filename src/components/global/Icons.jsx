
const Icons = ({ icon, text, des, width }) => {
    return (
        <div className="flex p-2 rounded-md items-center md:items-start gap-3 flex-col md:flex-row text-center md:text-start hover:bg-btnColors duration-200">
            <div className={`${width}`}>
                <img src={icon} alt="icon" />
            </div>
            <div className="flex flex-col gap-3 ">
                <h3 className="text-[#000000] font-bold text-base">{text}</h3>
                <p className="text-[#646464] font-normal text-sm">{des}</p>
            </div>
        </div>
    )
}

export default Icons