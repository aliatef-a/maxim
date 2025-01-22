import { useDispatch } from "react-redux";
import { assets } from "../../assets/assets"
import Status from "../global/Status"
import { nextStep } from "../../store/slices/cartProgressSlice";

const OrderSuccess = () => {
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch(nextStep());
    };

    return (
        <div>
            <Status
                img={assets.success}
                title={"عملية الدفع تمت بنجاح!"}
                description={"تمت عملية الدفع بنجاح، شكراً لك على استخدام خدماتنا. سيتم تأكيد الطلب قريباً."}
                buttonText={"تقييم المنتج"}
                buttonHref={"#"}
                onClick={handleNext}
            />
        </div>
    )
}

export default OrderSuccess
