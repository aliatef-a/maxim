import { assets } from "../../assets/assets"

const DatialsPurchases = () => {
    return (
        <div className="space-y-5 rounded-xl bg-[#FFFFFF] p-5 w-fit px-10">
            <div className="flex items-center gap-2">
                <img src={assets.visa} alt="visa" />
                <p className="text-[#646464] text-sm">2354 **** **** ****</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={assets.LocationIcon} alt="location" />
                <p className="text-[#363744] font-bold text-sm">9 شارع محمد حسن شاهين - أبو شاهين - المحلة الكبرى</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={assets.mobaileMapIcon} className="mr-1" alt="location" />
                <p className="text-[#646464] text-sm">+20 1212811805</p>
            </div>
        </div>
    )
}

export default DatialsPurchases