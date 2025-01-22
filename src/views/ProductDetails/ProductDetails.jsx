import { useState } from "react"
import Breadcrumb from "../../components/global/Breadcrumb"
import DressDetails from "../../components/ProductsDetials/DressDetails"
import RateProducts from "../../components/ProductsDetials/RateProducts"
import OtherProducts from "../../components/ProductsDetials/OtherProducts"

const ProductDetails = () => {
    const [showOtherProducts, setShowOtherProducts] = useState(false);
    const [active, setActive] = useState("comments")
    return (
        <section>
            <Breadcrumb forwardPath={"المنتجات"} forwardLink={"/products"} path={"  فستان بإطلالة حمراء"} />
            <DressDetails />
            <div className="mb-5 md:mb-10">
                <ul className="flex items-center justify-center gap-5">
                    <li onClick={() => (
                        setShowOtherProducts(false),
                        setActive("comments")
                    )} className="relative cursor-pointer">
                        <h2 className="text-sm md:text-base font-medium text-secondary ">التعليقات</h2>
                        {active === "comments" && <div className="absolute top-7 md:top-8 right-0 w-1/2 h-[3px] bg-secondary"></div>}
                    </li>
                    <li onClick={() => (
                        setShowOtherProducts(true),
                        setActive("otherproducts")
                    )} className="relative cursor-pointer">
                        <h2 className="text-sm md:text-base font-medium  text-secondary ">منتجات ذات صلة</h2>
                        {active === "otherproducts" && <div className="absolute top-7 md:top-8 right-0 w-1/3 h-[3px] bg-secondary"></div>}
                    </li>
                </ul>
            </div>
            {showOtherProducts ? <OtherProducts /> : <>
                <div className="space-y-10">
                    <RateProducts />
                    <RateProducts />
                </div>
            </>}
        </section>
    )
}

export default ProductDetails