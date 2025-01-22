import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { assets } from "../../assets/assets";
import { useState } from "react";

const VerifyCodeForm = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    // Validation Schema
    const validationSchema = Yup.object({
        code: Yup.string()
            .required("هذا الحقل مطلوب")
            .matches(/^\d{4}$/, "يجب أن يكون الرمز 4 أرقام")
    });

    // Initial Values  
    const initialValues = {
        code: ""
    };

    // Form Field Styles
    // const inputClasses = "mt-1 py-3 block w-full text-[#444343] rounded-md border outline-none text-[15px] placeholder:text-[#B3B3B3] px-3 text-center border-[#E6E6E6] shadow-sm";
    const labelClasses = "block text-xs font-bold text-gray-700 text-right";
    const errorClasses = "text-red-500 text-sm mt-1 text-right";
    const otpInputClass = "w-12 h-12 border-2 rounded bg-white focus:border-blue-400 focus:outline-none text-center font-semibold text-xl";

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
        }
    };

    // Submit Handler
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const otpValue = otp.join("");
            if (otpValue.length === 4) {
                console.log("OTP:", otpValue);
                // Add your API call here
            }
        } catch (error) {
            console.error("Code verification error:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="md:max-w-lg mt-16 px-6 space-y-2 mx-auto bg-[#FFFFFF] p-6 rounded-[12px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="flex justify-center">
                <img src={assets.Logo} alt="logo" className="h-16" />
            </div>

            <div className="text-center space-y-2">
                <h1 className="text-base text-secondary font-bold">تأكيد البريد الإلكتروني</h1>
                <p className="text-[#646464] text-xs">الرجاء إدخال رمز التحقق المرسل إلى بريدك الإلكتروني.</p>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        {/* OTP Input Fields */}
                        <div className="space-y-2 ">
                            <label htmlFor="code" className={labelClasses}>
                                رمز التحقق
                            </label>
                            <div className="flex justify-center gap-2">
                                {otp.map((data, index) => {
                                    return (
                                        <input
                                            key={index}
                                            type="text"
                                            name="otp"
                                            maxLength="1"
                                            value={data}
                                            className={otpInputClass}
                                            onChange={e => handleChange(e.target, index)}
                                            onFocus={e => e.target.select()}
                                        />
                                    );
                                })}
                            </div>
                            <ErrorMessage
                                name="code"
                                component="div"
                                className={errorClasses}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting || otp.join("").length !== 4}
                            className="w-full py-2 px-5 text-sm font-bold text-secondary bg-btnColors rounded-lg leading-7 flex items-center justify-center gap-3 btnHoverForm disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <span>
                                {isSubmitting ? "جاري التحقق..." : "تحقق"}
                            </span>
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default VerifyCodeForm;