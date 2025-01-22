import { useState } from "react";
import { assets } from "../../assets/assets";

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const Pagination = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-4" dir="ltr">
            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 flex-wrap">

                <button
                    className="px-2 py-2 md:px-4 md:py-4 border border-[#363744] border-[1px_solid]  rounded-full disabled:bg-[#98FF98] disabled:border-none"
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <img src={assets.arrowPagintion} alt="arrow" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i + 1)}
                        className={`px-2 py-2 w-8 h-8 md:px-4 md:py-2 md:w-11 md:h-11 rounded-full ${currentPage === i + 1
                            ? "bg-[#CCFFCC] text-[#363744] font-normal"
                            : "hover:bg-gray-200 border border-[#B3B3B3] border-[1px_solid]"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="px-2 py-2 md:px-4 md:py-4 border border-[#363744] border-[1px_solid]  rounded-full disabled:bg-[#98FF98] disabled:border-none"
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <img className="rotate-180" src={assets.arrowPagintion} alt="arrow" />
                </button>
            </div>
        </div >
    );
};

export default Pagination;
