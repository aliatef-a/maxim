import { assets } from "../../assets/assets";
import CardProduct from "../HomePage/CardProduct"

const OtherProducts = () => {
    const products = Array(8).fill({
        title: "فستان سهرة 2025",
        price: "320 ر.س",
        rating: "4.8",
        imgSrc: assets.dressImg,
        iconSrc: assets.StarIcon,
        link: "/products/1",
    });
    return (
        <div className="container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10 my-3">
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
    )
}

export default OtherProducts