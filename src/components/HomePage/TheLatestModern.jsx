import { assets } from "../../assets/assets"
import Button from "../global/Button"


const TheLatestModern = () => {
    return (
        <section className="my-14 relative">
            <div
                className="flex items-center justify-center flex-col gap-5 bg-[#00000099] py-5 h-[35vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${assets.HeroImg})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <h3 className="text-[#E6E6E7] text-xl md:text-2xl font-bold text-center md:text-start z-10">
                    <span className="text-primary">أحدث التصاميم</span> العصرية للفساتين بجودة عالية.
                </h3>
                <Button href={"/products"} text={"منتجاتنا"} className={'md:!px-10'} />
            </div>
        </section>

    )
}

export default TheLatestModern