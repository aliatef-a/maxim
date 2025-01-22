import { useSelector } from "react-redux";
import CartItem from "./CartItem"
import OrderSuccess from "./OrderSuccess";
import TotalCart from "./TotalCart"
import RateProduct from "./RateProduct";

const CartContent = () => {
    const { isOrderSuccess, currentStep } = useSelector(state => state.cartProgress);

    if (currentStep === 4) {
        return <RateProduct />
    }

    if (isOrderSuccess) {
        return <OrderSuccess />
    }

    return (
        <div className="grid grid-cols-12 gap-4 lg:gap-8">
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-4 lg:gap-7">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="col-span-12 lg:col-span-5">
                <TotalCart />
            </div>
        </div>
    )
}

export default CartContent
