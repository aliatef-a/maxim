import { Menu, XIcon } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import RangeSlider from "./RangeSlider"

const Filter = () => {
    const [openFilter, setOpenFilter] = useState(false)
    const filterRef = useRef(null)

    // Close the filter if clicked outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setOpenFilter(false)
            }
        }

        // Add event listener to detect outside click
        document.addEventListener("mousedown", handleClickOutside)

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <>
            {openFilter ?
                <XIcon className="fixed right-4 lg:hidden top-2 z-30" onClick={() => setOpenFilter(false)} />
                :
                <Menu className="fixed right-4 lg:hidden" onClick={() => setOpenFilter(true)} />
            }

            <div
                ref={filterRef}
                className={`fixed z-20 top-0 ${openFilter ? "right-0 w-fit px-10 h-full shadow-md rounded-sm" : '-right-full'} duration-200 bg-white lg:bg-transparent lg:static border-[Mixed_solid] flex flex-col gap-7 py-5`}>
                <h3 className="text-secondary font-bold text-xl leading-8">كل المنتجات (2346)</h3>
                <div className="flex flex-col gap-3 text-secondary font-normal">
                    <h3 className="text-secondary font-bold text-xl leading-8">الفئات</h3>
                    <p >فساتين زفاف (236)</p>
                    <p>فساتين سوارية (196)</p>
                    <p>فساتين كتب كتاب (81)</p>
                    <p>فساتين خطوبة (87)</p>
                    <p>فساتين أطفال (26)</p>
                    <p>إكسسوارات زفاف (635)</p>
                </div>
                <hr className="border border-[0.5px_solid_#646464]" />
                <div className="flex flex-col gap-3">
                    <h2 className="text-secondary font-bold text-xl leading-8">السعر</h2>
                    <RangeSlider />
                </div>
                <hr className="border border-[0.5px_solid_#646464]" />
                <div>
                    <h2 className="text-secondary font-bold text-xl leading-8">اللون</h2>
                    <div className="mt-4 grid grid-cols-4 gap-y-5 w-48">
                        <div className="bg-[#D30404] rounded-full w-7 h-7" />
                        <div className="bg-[#26D304] rounded-full w-7 h-7" />
                        <div className="bg-[#04C6D3] rounded-full w-7 h-7" />
                        <div className="bg-[#D304AD] rounded-full w-7 h-7" />
                        <div className="bg-[#000000] rounded-full w-7 h-7" />
                        <div className="bg-[#98FF98] rounded-full w-7 h-7" />
                        <div className="bg-[#BBD304] rounded-full w-7 h-7" />
                        <div className="bg-[#0407D3] rounded-full w-7 h-7" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter
