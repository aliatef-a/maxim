import { assets } from "../../assets/assets";

const Maps = () => {
    return (
        <div className="w-full relative">
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54701.10178228354!2d31.368806399999997!3d31.031296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1736155134079!5m2!1sar!2seg"
                    width="100%"
                    height={550}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            {/* Overlay content */}
            <div className="absolute inset-0 flex justify-center items-end mb-5 pointer-events-none">
                <div className="w-[90%] px-5 rounded-md bg-[#FFFFFF] py-2 pointer-events-auto">
                    <div className="flex border-b-[0.5px] border-[#B3B3B3] py-3 items-center justify-between">
                        <img src={assets.arrowiconMap} className="rotate-180" alt="icon" />
                        <p className="text-black font-bold text-base py-1">بلقاس</p>
                        <img src={assets.arrowiconMap} alt="icon" />
                    </div>
                    <div className="flex flex-col gap-4 mt-2 py-2">
                        <div className="flex items-center gap-2">
                            <img src={assets.LocationIcon} alt="icon" />
                            <p className="text-[#646464] font-normal text-sm">
                                9 شارع المحمدي - حي العتيبي - الرياض - السعودية
                            </p>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <img className="mr-1" src={assets.mobaileMapIcon} alt="icon" />
                            <p className="text-[#646464] font-normal">+966 123 456 789</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <img src={assets.whatsMapIcon} alt="icon" />
                            <p className="text-[#646464] font-normal">+966 123 456 789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maps;
