import { useState } from "react";
import { assets } from "../../assets/assets";

const Accordion = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border-[0.5px] border-[#B3B3B3] rounded-md ${isOpen ? "activeAccordion transition-all duration-300" : ""}`} >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex justify-between items-center p-3 focus:outline-none"
            >
                <div className="flex items-center gap-2">
                    <img src={assets.LocationIcon} alt="icon" />
                    <span className="text-secondary font-medium leading-9">{title}</span>
                </div>
                <span
                    className={`transform transition-transform duration-300 ${isOpen ? "-rotate-90" : ""
                        }`}
                >
                    <img src={assets.arrowiconMap} alt="icon" />
                </span>
            </button>
            <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out`}
                style={{
                    maxHeight: isOpen ? "500px" : "0px",
                }}
            >
                <div className="flex items-center justify-between p-3 py-4 border-t-[0.5px] border-[#B3B3B3] ">
                    <div className="flex items-center gap-2">
                        <img src={assets.mobaileMapIcon} alt="icon" />
                        <p className="text-[#646464] text-[15px] font-medium">+966 123 456 789</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.whatsMapIcon} alt="icon" />
                        <p className="text-[#646464] text-[15px] font-medium">+966 123 456 789</p>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Accordion;
