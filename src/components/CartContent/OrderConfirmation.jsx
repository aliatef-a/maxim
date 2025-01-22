import { Field, Form, Formik } from "formik";
import { assets } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { previousStep, setOrderSuccess, setPaymentStep } from "../../store/slices/cartProgressSlice";

const OrderConfirmation = () => {
    const initialValues = {
        paymentMethod: ''
    };
    const dispatch = useDispatch();
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        // Handle payment submission logic here
        try {
            // initialValues.paymentMethod === "" && alert("من فضلك قم بالدفع");

            dispatch(setOrderSuccess(true));
            dispatch(setPaymentStep("succeded"));
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }

    };

    return (
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-base font-bold mb-6 text-center text-[#646464]">طريقة الدفع أو السداد</h2>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-4">
                        <label className="flex items-center justify-between gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                                <img src={assets.visa} alt="Cash on delivery" className="w-8 h-8" />
                                <span className="text-sm font-bold text-secondary">الدفع بإستخدام الفيزا</span>
                            </div>
                            <Field
                                type="radio"
                                name="paymentMethod"
                                value="cash"
                                className="w-5 h-5 accent-btnColors"
                            />
                        </label>

                        <label className="flex items-center justify-between gap-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                                <img src={assets.recive} alt="Credit card" className="w-8 h-8" />
                                <span className="text-sm font-bold text-secondary">الدفع عند الإستلام</span>
                            </div>
                            <Field
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                className="w-5 h-5 accent-btnColors"
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-5 text-sm font-bold text-secondary bg-btnColors rounded-lg flex items-center justify-center gap-3 btnHoverForm disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <span>
                                {isSubmitting ? "جاري المعالجة..." : "اتمام الدفع"}
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                dispatch(previousStep());
                                dispatch(setPaymentStep("shipping"));
                            }}
                            className="w-full py-2 px-5 text-sm font-bold text-secondary bg-gray-100 rounded-lg leading-7 flex items-center justify-center gap-3"
                        >
                            <span>→</span>
                            العودة للخلف
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default OrderConfirmation;
