import { useSelector } from "react-redux";
import LoginForm from "../LoginComponents/LoginForm"
import TotalPrice from "./TotalPrice";
import ShippingDetails from "./ShippingDetails";
import OrderConfirmation from "./OrderConfirmation.jsx";

const TotalCart = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const { paymentStep } = useSelector(state => state.cartProgress);

    return (
        <div className="" >
            {isAuthenticated ?
                <>
                    {paymentStep === "details" ? (
                        <TotalPrice />
                    ) : paymentStep === "shipping" ? (
                        <ShippingDetails />
                    ) : paymentStep === "confirmation" ? (
                        <OrderConfirmation />
                    ) : null}
                </>
                :
                <>
                    <LoginForm />
                </>
            }
        </div>
    )
}

export default TotalCart;