import { assets } from "../../assets/assets";

const Gallery = () => {
    const images = [
        { img: assets.dress1 },
        { img: assets.dress2 },
        { img: assets.dress1 },
        { img: assets.dress2 },
    ];

    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {images.map(({ img }, index) => (
                    <div
                        key={img}
                        className={`relative h-[450px] rounded-xl overflow-hidden ${index % 2 === 0 ? 'md:mt-20' : 'mt-0'}`}
                    >
                        <div className="absolute inset-0 w-full h-full bg-[#98FF984D] z-30" />
                        <img className="w-full h-full object-cover" src={img} loading="lazy" alt="dress img" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
