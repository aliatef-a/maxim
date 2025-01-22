import { Link } from "react-router-dom"
import HeaderSections from "../global/HeaderSections"
import CardProduct from "./CardProduct"
import { assets } from "../../assets/assets"

const LatestProducts = () => {
    const products = Array(8).fill({
        title: "فستان سهرة 2025",
        price: "320 ر.س",
        rating: "4.8",
        imgSrc: assets.dressImg,
        iconSrc: assets.StarIcon,
        link: "/products/1",
    });
    return (
        <section>
            <div className="container">
                <HeaderSections text={"أحدث المنتجات"} des={"أحدث التصاميم العصرية للفساتين بجودة عالية وأناقة تناسب جميع المناسبات والأذواق."} className={"!items-start"} />
                <Link to={"/products"} className="underline block text-end font-bold text-[#646464]">عرض المزيد</Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 my-3">
                    {products.map((product, index) => (
                        <CardProduct
                            key={index}
                            title={product.title}
                            price={product.price}
                            rating={product.rating}
                            imgSrc={product.imgSrc}
                            iconSrc={product.iconSrc}
                            link={product.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LatestProducts