import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"

const TopNav = () => {
    return (
        <div className="bg-primary text-secondary py-3">
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={assets.disccount} alt="icon" />
                    <p className="font-bold text-sm md:text-base">خصومات تصل إلى 50% في عروض الخميس والجمعة.</p>
                </div>
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
    )
}

export default TopNav