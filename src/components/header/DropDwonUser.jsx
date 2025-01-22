import { ChevronDown, ChevronLeft } from "lucide-react"
import { FaShoppingBag, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { logout } from "../../store/slices/authSlice"
import { useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"

const DropDwonUser = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className={`flex items-center gap-[3px] cursor-pointer relative z-30`}>
            <div onClick={() => setOpen(!open)} className="flex w-full items-center gap-[3px] cursor-pointer">
                <span className="text-[#000000] font-medium">أحمد عطيه</span>
                <ChevronDown className={`mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} size={18} />
            </div>

            <div className={`absolute top-full z-10 -left-[50%] border border-[#D9D9D9] rounded-xl mt-2 w-48 bg-white shadow-[0px_4px_150px_0px_#0000001F] py-2 transition-all duration-300 ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2.5 text-sm text-[#000000] hover:bg-[#9400001A] hover:text-[#D30404] flex items-center justify-between transition-colors duration-200 group"
                >
                    <div className="flex items-center gap-2">
                        <FaUser className="text-[#000000]  group-hover:text-[#D30404] transition-colors duration-200" size={16} />
                        <span className=" group-hover:text-[#D30404] text-[#000000]">الملف الشخصي</span>
                    </div>
                    <ChevronLeft className="text-[#363744] group-hover:text-[#D30404] transition-colors duration-200" size={16} />
                </Link>
                <Link
                    to="/my-purchases"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2.5 text-sm text-[#000000] hover:bg-[#9400001A] hover:text-[#D30404] flex items-center justify-between transition-colors duration-200 group"
                >
                    <div className="flex items-center gap-2">
                        <FaShoppingBag className="text-[#363744] group-hover:text-[#D30404] transition-colors duration-200" size={16} />
                        <span className="group-hover:text-[#D30404] text-[#000000]">طلباتي</span>
                    </div>
                    <ChevronLeft className="text-[#363744] group-hover:text-[#D30404] transition-colors duration-200" size={16} />
                </Link>
                <button
                    onClick={() => {
                        dispatch(logout());
                        setOpen(false);
                    }}
                    className="w-full text-right px-4 py-2.5 text-sm text-[#000000] hover:bg-[#9400001A] hover:text-[#D30404] flex items-center justify-between transition-colors duration-200 group"
                >
                    <div className="flex items-center gap-2">
                        <FaSignOutAlt className="text-[#363744] group-hover:text-[#D30404] transition-colors duration-200" size={16} />
                        <span className="group-hover:text-[#D30404] text-[#000000]">تسجيل الخروج</span>
                    </div>
                    <ChevronLeft className="text-[#363744] group-hover:text-[#D30404] transition-colors duration-200" size={16} />
                </button>
            </div>
        </div>
    )
}

export default DropDwonUser
