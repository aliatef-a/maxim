import Breadcrumb from "../../components/global/Breadcrumb"
import CardProduct from "../../components/HomePage/CardProduct"
import { assets } from "../../assets/assets";
import Filter from "../../components/ProductsPage/Filter";

const Products = () => {
    const products = Array(8).fill({
        title: "فستان سهرة 2025",
        price: "320 ر.س",
        rating: "4.8",
        imgSrc: assets.dressImg,
        iconSrc: assets.StarIcon,
        link: "/products/1",
    });
    return (
        <section >
            <Breadcrumb path={"المنتجات"} />
            <div className="section-gap container flex items-start gap-8">
                <div className="lg:w-[29%]">
                    <Filter />
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 my-3">
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

export default Products