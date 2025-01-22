import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const CardProduct = ({ title, price, rating, imgSrc, link }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`${link}`)} className='bg-bgCard rounded-xl p-4 cursor-pointer relative hover:shadow-[0px_0px_10px_0px_#00000033;] duration-200'>
            {/* Rating */}
            <div className='absolute left-5 top-5 flex items-center gap-2'>
                <p className='mt-1'>{rating}</p>
                <img className='w-6 h-6' src={assets.StarIcon} alt="icon" />
            </div>

            {/* Product Image */}
            <div className=''>
                <div className='relative p-8'>
                    <img className='w-full h-full object-contain' src={imgSrc} alt="product" />
                </div>

                {/* Product Details */}
                <div className='space-y-3'>
                    <h3 className='text-secondary font-bold text-lg'>{title}</h3>
                    <div className='flex items-center justify-between'>
                        <p className='text-secondary'>{price}</p>
                        <Link to={link} className='flex items-center gap-1 text-[#000000] btnCard p-1 group rounded-md'>
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
    );
};

export default CardProduct;
