import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { nextStep, previousStep, setPaymentStep } from "../../store/slices/cartProgressSlice";

const validationSchema = Yup.object({
    fullName: Yup.string().required("مطلوب"),
    phone: Yup.string().required("مطلوب"),
    city: Yup.string().required("مطلوب"),
    address: Yup.string().required("مطلوب"),
    homeNumber: Yup.string().required("مطلوب"),
    notes: Yup.string()
});

const ShippingDetails = ({ setSteps }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const initialValues = {
        fullName: "",
        phone: "",
        city: "",
        address: "",
        homeNumber: "",
        notes: ""
    };
    console.log(setSteps);
    const handleSubmit = async (values, { setSubmitting }) => {
        setIsSubmitting(true);
        try {
            // Handle form submission logic here
            console.log(values);
            dispatch(nextStep());
            dispatch(setPaymentStep("confirmation"));
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
            setSubmitting(false);
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-center text-[#646464]">تفاصيل الشحن</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="space-y-4 text-[#363744] font-bold">
                        <div className="space-y-2">
                            <label className="block text-sm placeholder:text-[#646464]">أسم المستلم</label>
                            <Field
                                type="text"
                                name="fullName"
                                placeholder="الرجاء إدخال الأسم كامل"
                                className="w-full border text-sm py-3 font-medium text-[#646464] rounded p-2 outline-none placeholder:text-xs placeholder:font-medium"
                            />
                            {errors.fullName && touched.fullName && (
                                <div className="text-red-500 text-xs">{errors.fullName}</div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm ">رقم الجوال</label>
                            <Field
                                type="tel"
                                name="phone"
                                className="w-full text-right border text-sm py-3 font-medium text-[#646464] rounded p-2 outline-none placeholder:text-xs placeholder:font-medium"
                                placeholder="الرجاء إدخال رقم الجوال"
                            />
                            {errors.phone && touched.phone && (
                                <div className="text-red-500 text-xs">{errors.phone}</div>
                            )}
                        </div>

                        <div className="flex gap-3">
                            <div className="space-y-2 ">
                                <label className="block text-sm text-[#646464]">رقم المنزل</label>
                                <Field
                                    type="text"
                                    name="homeNumber"
                                    className="w-full border text-sm py-3 font-medium text-[#646464] rounded p-2 outline-none placeholder:text-xs placeholder:font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                {errors.homeNumber && touched.homeNumber && (
                                    <div className="text-red-500 text-xs">{errors.homeNumber}</div>
                                )}
                            </div>
                            <div className="space-y-2 flex-grow">
                                <label className="block text-sm text-[#646464]">المدينة</label>
                                <Field
                                    type="text"
                                    name="city"
                                    className="w-full border text-sm py-3 font-medium text-[#646464] rounded p-2 outline-none placeholder:text-xs placeholder:font-medium"
                                />
                                {errors.city && touched.city && (
                                    <div className="text-red-500 text-xs">{errors.city}</div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2 flex-grow">
                            <label className="block text-sm text-[#646464]">العنوان</label>
                            <Field
                                type="text"
                                name="address"
                                className="w-full border text-sm py-3 font-medium text-[#646464] rounded p-2 outline-none placeholder:text-xs placeholder:font-medium"
                            />
                            {errors.address && touched.address && (
                                <div className="text-red-500 text-xs">{errors.address}</div>
                            )}
                        </div>

                        <div className="flex flex-col gap-3 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 px-5 text-sm font-bold text-secondary bg-btnColors rounded-lg leading-7 flex items-center justify-center gap-3 btnHoverForm disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>
                                    {isSubmitting ? "جاري الإرسال..." : "تابع عملية الدفع"}
                                </span>
                            </button>
                            <button
                                type="button"

                                onClick={() => {
                                    dispatch(previousStep());
                                    dispatch(setPaymentStep("details"));
                                }}
                                className="w-full py-2 px-5 text-sm font-bold text-secondary bg-gray-100 rounded-lg leading-7 flex items-center justify-center gap-3"
                            >
                                <span>→</span>
                                العودة إلى عربة التسوق
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ShippingDetails;
