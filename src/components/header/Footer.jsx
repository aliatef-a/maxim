import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const Footer = () => {
    const Links = [
        { text: "من نحن", herf: "/about-us" },
        { text: "المدونة", herf: "/blog" },
        { text: "سياسة الخصوصية", herf: "/privacy-policy" },
        { text: "الشروط والأحكام", herf: "/terms" },
        { text: "تواصل معنا", herf: "/contact-us" },
    ]
    return (
        <footer className='mt-16'>
            <section className='bg-btnColors'>
                <div className='container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-11  gap-y-10 place-items-center md:place-items-start text-center md:text-start lg:justify-items-center '>
                    <div className='flex flex-col items-center md:items-start'>
                        <div >
                            <img src={assets.Logo} alt="logo" />
                        </div>
                        <p className='text-secondary leading-7 font-normal'>ماكسيم يقدم مجموعة راقية من الفساتين العصرية، بتصاميم فريدة وجودة عالية تناسب جميع الأذواق والمناسبات.</p>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold mb-3'>روابط سريعة</h3>
                        <ul className='space-y-3'>
                            {Links.map(link => (
                                <li key={link.text} >
                                    <Link to={link.herf} className='flex items-center text-sm font-semibold justify-center md:justify-start'>
                                        <ChevronLeft className='hidden md:block' size={16} />
                                        <span>{link.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold mb-3'>ادخل بريدك الإلكتروني لمتابعة كل جديد</h3>
                        <form className='relative'>
                            <img className='absolute top-1/2 right-3 -translate-y-1/2 w-5' src={assets.emailIcon} alt="icon" />
                            <input type="email" className='w-full rounded py-4 px-10 text-xs font-normal text-secondary outline-none' placeholder='الرجاء إدخال بريدك الإلكتروني.' />
                            <button className='bg-primary absolute  top-1/2 left-1 -translate-y-1/2  p-3 rounded text-xs font-bold' type='submit'>اشترك</button>
                        </form>
                        <div className='mt-4 mr-1'>
                            <div className="hidden sm:flex items-center gap-2">
                                <Link to=""><img src={assets.youtubeIcon} alt="icon" /></Link>
                                <Link to={""}><img src={assets.whatsApp} alt="icon" /></Link>
                                <Link to={""}>
                                    <img src={assets.linkedIn} alt="icon" />
                                </Link>
                                <Link to={""}>
                                    <img src={assets.Facbook} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-primary text-center'>
                <h3 className='text-[#000000] font-normal text-sm py-4'>جميع الحقوق محفوظة لـ ماكسيم © 2025</h3>
            </section>
        </footer>
    )
}

export default Footer