import { Link, useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"

const CardPost = ({ title, des }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/blog/1")} className='bg-bgCard rounded-xl p-4 cursor-pointer hover:shadow-[0px_0px_10px_0px_#00000033;] duration-200'>
            {/* Product Image */}
            <div className=''>
                <div className='relative rounded-md overflow-hidden h-[200px]'>
                    <img className='w-full h-full object-cover' src={assets.imgPost} alt="product" />
                </div>

                {/* Product Details */}
                <div className='space-y-3 mt-3'>
                    <h3 className='text-secondary font-bold text-lg'>{title}</h3>
                    <p className='text-secondary leading-6 text-sm'>{des}</p>
                    <div className='flex justify-end'>
                        <Link to={"/blog/1"} className='flex items-center gap-1 text-[#000000] btnCard p-1 group rounded-md'>
                            <span>المزيد</span>
                            <img
                                src={assets.arrow}
                                alt="arrow"
                                className="transition-transform duration-300 group-hover:-translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPost