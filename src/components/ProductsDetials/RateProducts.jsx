import { assets } from "../../assets/assets"

const RateProducts = () => {
    return (
        <div className="container md:w-6/12 mx-auto space-y-5">
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-3">
                    <div className="border border-[#98FF98] w-8 h-8 md:w-14 md:h-14  border-[2px_solid_#98FF98] rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={assets.ProfileImg} alt="img" />
                    </div>
                    <p className="text-sm  text-secondary md:text-base font-normal">أحمد عطيه</p>
                </div>
                <div className="flex items-center gap-1 text-[#646464] font-normal">
                    <p className="text-sm md:text-base ">4.5</p>
                    <img className="w-24 md:w-28" src={assets.starsProduct} alt="star" />
                </div>
            </div>
            <p className="w-full text-sm md:text-base text-[#646464] leading-7 font-normal">الفستان رائع جدًا! اللون الأحمر ملفت والتصميم أنيق جدًا. القماش مريح للغاية ومناسب للسهرات. أنصح به بشدة!</p>
        </div>
    )
}

export default RateProducts