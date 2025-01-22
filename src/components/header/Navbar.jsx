import { Link, useLocation } from "react-router-dom"
import { assets } from "../../assets/assets"
import TopNav from "./TopNav"
import Button from "../global/Button"
import { useState } from "react"
import { Menu, XIcon } from "lucide-react"
import DropdwonLang from "./DropdwonLang"
import { useSelector } from "react-redux"
import DropDwonUser from "./DropDwonUser"

const Navbar = () => {
    const pathName = useLocation().pathname;
    const [openSlide, setOpenSlide] = useState(false)
    const { isAuthenticated } = useSelector(state => state.auth);
    const Links = [
        { label: "الرئيسية", herf: "/" },
        { label: "من نحن", herf: "/about-us" },
        { label: "المنتجات", herf: "/products" },
        { label: "المدونة", herf: "/blog" },
        { label: "تواصل معنا", herf: "/contact-us" },
    ]
    return (
        <nav>
            <TopNav />
            <div className={` flex justify-between items-center container xl:hidden `}>
                <Link to={"/"}>
                    <img className="w-full h-full object-contain" src={assets.Logo} alt="Logo" />
                </Link>
                <Menu className={`!w-7 !h-7 cursor-pointer ${openSlide && "hidden"}`} onClick={() => setOpenSlide(true)} />
            </div>
            <div className={`container duration-200 fixed z-50 top-0 xl:static right-0 bg-white items-start w-[70%] md:w-1/2 xl:w-full h-full xl:items-center gap-10 pt-10 xl:gap-0 xl:pt-0 flex-col xl:flex-row py-2 flex xl:justify-between ${openSlide ? "right-0" : " !-right-full"}`}>
                <Link to={"/"} className="w-1/2 md:w-auto">
                    <img className="w-full h-full object-contain" src={assets.Logo} alt="Logo" />
                </Link>
                <XIcon className='!w-6 !h-6 absolute xl:hidden left-5 mt-5 cursor-pointer' onClick={() => setOpenSlide(false)} />
                <div>
                    <ul className="flex flex-col xl:flex-row items-center gap-[36px]">
                        {Links.map(link => {
                            const isActive = pathName === link.herf || (link.herf.startsWith("/products") && pathName.startsWith("/products")) || (link.herf.startsWith("/blog") && pathName.startsWith("/blog"));
                            return (
                                <li key={link.label} className="text-secondary font-normal leading-4 relative">
                                    <Link
                                        to={link.herf}
                                        className="relative z-10"
                                        onClick={() => setOpenSlide(false)}
                                    >
                                        {link.label}
                                    </Link>
                                    {isActive && <div className="absolute top-6 right-0 w-1/2 h-[3px] bg-secondary"></div>}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <Link to={"/cart"}>
                        <img src={assets.CartIcon} alt="CartIcon" />
                    </Link>
                    <DropdwonLang />
                </div>
                {!isAuthenticated ?
                    <div className="flex items-center gap-4">
                        <Button text={"دخول"} href={'/login'}>
                            <img src={assets.loginUser} alt="icon" />
                        </Button>
                        <Button text={"انشاء حساب"} href={'/signup'}>
                            <img src={assets.loginUser} alt="icon" />
                        </Button>
                    </div> :
                    <>
                        <DropDwonUser />
                    </>
                }
            </div>
        </nav >
    )
}

export default Navbar