// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { assets } from '../../assets/assets';
import Button from '../global/Button';


const Hero = () => {
    return (
        <section>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="relative w-full h-[calc(70vh-11rem)] md:h-[calc(100vh-12rem)] "
                    >
                        {/* Image */}
                        <img
                            className="w-full h-full object-cover"
                            src={assets.HeroImg}
                            alt="img"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col  justify-center z-10">
                            <div className='flex flex-col gap-4 md:gap-8 justify-center container text-center md:text-start'>
                                <h1 className='text-2xl md:text-4xl text-primary font-bold'>أناقة خالدة <span className='text-white'>بأسلوب عصري.</span></h1>
                                <p className=' text-colorDescription text-sm md:text-lg font-normal md:w-1/3'>يقدم أرقى تصاميم الفساتين، بجودة عالية وأسلوب عصري يلبي جميع المناسبات.</p>
                                <div className='flex justify-center md:justify-start'>
                                    <Button href={"/products"} text={"منتجاتنا"} className={"w-fit !py-2 !px-5  md:text-lg md:!py-3 md:!px-11 "} />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative w-full h-[calc(70vh-11rem)] md:h-[calc(100vh-12rem)]"
                    >
                        {/* Image */}
                        <img
                            className="w-full h-full object-cover"
                            src={assets.HeroImg}
                            alt="img"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col  justify-center z-10">
                            <div className='flex flex-col gap-4 md:gap-8 justify-center container text-center md:text-start'>
                                <h1 className='text-2xl md:text-4xl text-primary font-bold'>أناقة خالدة <span className='text-white'>بأسلوب عصري.</span></h1>
                                <p className=' text-colorDescription text-sm md:text-lg font-normal md:w-1/3'>يقدم أرقى تصاميم الفساتين، بجودة عالية وأسلوب عصري يلبي جميع المناسبات.</p>
                                <div className='flex justify-center md:justify-start'>
                                    <Button href={""} text={"منتجاتنا"} className={"w-fit !py-2 !px-5  md:text-lg md:!py-3 md:!px-11 "} />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </section>
    )
}

export default Hero