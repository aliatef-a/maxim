import { assets } from "../../assets/assets"
import { useState } from "react";

const CartItem = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="relative sm:static flex flex-col sm:flex-row items-center text-center sm:text-start rounded-lg  overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.1)] gap-7 hover:shadow-lg transition-shadow duration-200 bg-[#FFFFFF]" >
            <div className="bg-[#ECFFEC] p-4 ">
                <img className=" sm:w-[170px] h-full hover:scale-105 transition-transform duration-300" src={assets.dressImg} alt="dress" />
            </div>
            <div className="flex flex-col gap-5 py-2 ">
                <h3 className="text-base md:text-lg font-semibold">فستان بإطلالة حمراء 2025</h3>
                <h4 className="text-sm md:text-base font-medium text-[#646464]">750 ريال سعودي</h4>
                <div className="flex items-start gap-4 md:gap-12">
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base mb-2 text-gray-600">اللون</p>
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full shadow-sm" />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base mb-2 text-gray-600">المقاس</p>
                        <p className="text-sm border-2 border-[#363744] rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-medium">70</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-sm md:text-base mb-2 text-gray-600">قطع</p>
                        <div className="flex items-center border rounded-lg overflow-hidden">
                            <button
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                            <span className=" px-4 py-1 font-medium">{count}</span>
                            <button
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer hover:opacity-75 transition-opacity mr-auto absolute left-0 bottom-[16%] sm:static sm:self-center sm:mt-24 ml-5">
                <img className="full h-full" src={assets.deleteIcon} alt="delete" />
            </div>
        </div>
    )
}

export default CartItem