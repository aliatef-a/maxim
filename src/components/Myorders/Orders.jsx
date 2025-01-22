import CartItem from "../CartContent/CartItem"
import Button from "../global/Button"
import DatialsPurchases from "./DatialsPurchases"

const Orders = () => {
    return (
        <div className="section-gap space-y-5">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-[55%]">
                    <CartItem />
                </div>
                <div className="lg:border-r-[0.5px] lg:border-[#B3B3B3] lg:pr-10">
                    <DatialsPurchases />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-[55%]">
                    <CartItem />
                </div>
                <div className="lg:border-r-[0.5px] lg:border-[#B3B3B3] lg:pr-10">
                    <DatialsPurchases />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-[55%]">
                    <CartItem />
                </div>
                <div className="lg:border-r-[0.5px] lg:border-[#B3B3B3] lg:pr-10">
                    <DatialsPurchases />
                </div>
            </div>
            <div className="flex items-center justify-center !mt-10">
                <Button href={"/cart"} text={"إعادة الشراء"} className={"!px-20 text-base"} />
            </div>
        </div>
    )
}

export default Orders