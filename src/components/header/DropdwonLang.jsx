import { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import { ChevronDown } from 'lucide-react'

const DropdwonLang = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Handle click outside of dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative' ref={dropdownRef}>
            <div
                className='flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200'
                onClick={() => setOpenDropdown(prev => !prev)}
            >
                <img src={assets.ar} alt="flag" className="w-6 h-6" />
                <div className='flex items-center'>
                    <p>العربية - ر س</p>
                    <ChevronDown
                        className={`mt-1 transition-transform duration-300 ${openDropdown ? '-rotate-180' : ''}`}
                        size={18}
                    />
                </div>
            </div>

            <div
                className={`absolute top-10 bg-[#FFFFFF] z-50 shadow-[0px_4px_150px_0px_#0000001F] p-3 px-5 rounded-xl w-[270px] 
                    transition-all duration-300 ease-in-out transform
                    ${openDropdown
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
            >
                <div className='space-y-3'>
                    <div>
                        <p className='font-bold mb-2'>االلغه</p>
                        <div className="">
                            <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                                <div className="flex items-center gap-2">
                                    <img src={assets.ar} alt="flag" className="w-6 h-6" />
                                    <p className="text-sm font-normal">العربية - ر س</p>
                                </div>
                                <input
                                    type="radio"
                                    name="lang"
                                    value="ar"
                                    className="hidden peer"
                                    defaultChecked
                                />
                                <div className="w-4 h-4 border-2 border-[#B3B3B3] rounded-full flex items-center justify-center peer-checked:bg-[#363744] transition-colors duration-200"></div>
                            </label>

                            <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                                <div className="flex items-center gap-2">
                                    <img src={assets.en} alt="flag" className="w-6 h-6" />
                                    <p className="text-sm font-normal">English</p>
                                </div>
                                <input
                                    type="radio"
                                    name="lang"
                                    value="en"
                                    className="hidden peer"
                                />
                                <div className="w-4 h-4 border-2 border-[#B3B3B3] rounded-full flex items-center justify-center peer-checked:bg-[#363744] transition-colors duration-200"></div>
                            </label>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div>
                        <p className='font-bold mb-2'>العملة</p>
                        <div className="">
                            <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                                <div className="flex items-center gap-2">
                                    <img src={assets.ar} alt="flag" className="w-6 h-6" />
                                    <p className="text-sm font-normal">ريال سعودي</p>
                                </div>
                                <input
                                    type="radio"
                                    name="Currency"
                                    value="SAR"
                                    className="hidden peer"
                                    defaultChecked
                                />
                                <div className="w-4 h-4 border-2 border-[#B3B3B3] rounded-full flex items-center justify-center peer-checked:bg-[#363744] transition-colors duration-200"></div>
                            </label>

                            <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                                <div className="flex items-center gap-2">
                                    <img src={assets.en} alt="flag" className="w-6 h-6" />
                                    <p className="text-sm font-normal">جنية مصري</p>
                                </div>
                                <input
                                    type="radio"
                                    name="Currency"
                                    value="EGP"
                                    className="hidden peer"
                                />
                                <div className="w-4 h-4 border-2 border-[#B3B3B3] rounded-full flex items-center justify-center peer-checked:bg-[#363744] transition-colors duration-200"></div>
                            </label>

                            <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                                <div className="flex items-center gap-2">
                                    <img src={assets.en} alt="flag" className="w-6 h-6" />
                                    <p className="text-sm font-normal">دولار أمريكي</p>
                                </div>
                                <input
                                    type="radio"
                                    name="Currency"
                                    value="USD"
                                    className="hidden peer"
                                />
                                <div className="w-4 h-4 border-2 border-[#B3B3B3] rounded-full flex items-center justify-center peer-checked:bg-[#363744] transition-colors duration-200"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdwonLang