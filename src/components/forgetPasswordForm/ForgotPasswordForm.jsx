import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { assets } from "../../assets/assets";
import { FaEnvelope } from "react-icons/fa";

const ForgotPasswordForm = () => {
    // Validation Schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("البريد الإلكتروني غير صحيح")
            .required("هذا الحقل مطلوب"),
    });

    // Initial Values
    const initialValues = {
        email: ""
    };

    // Form Field Styles
    const inputClasses = "mt-1 py-3 block w-full text-[#444343] rounded-md border outline-none text-[15px] placeholder:text-[#B3B3B3] px-3 pr-8 border-[#E6E6E6] shadow-sm text-right";
    const labelClasses = "block text-xs font-bold text-gray-700 text-right";
    const errorClasses = "text-red-500 text-sm mt-1 text-right";
    const iconClasses = "absolute top-[33px] right-0 transform -translate-x-1/2 text-[#363744]";

    // Submit Handler
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log("Form Data:", values);
            // Add your API call here
        } catch (error) {
            console.error("Password reset error:", error);
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
                <h1 className="text-base text-secondary font-bold">نسيت كلمة المرور</h1>
                <p className="text-[#646464] text-xs">الرجاء إدخال بريدك الإلكتروني لإعادة تعيين كلمة المرور.</p>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        {/* Email Field */}
                        <div className="space-y-2 relative">
                            <label htmlFor="email" className={labelClasses}>
                                البريد الإلكتروني
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className={inputClasses}
                                placeholder="أدخل بريدك الإلكتروني"
                            />
                            <FaEnvelope className={iconClasses} />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className={errorClasses}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-2 px-5 text-sm font-bold text-secondary bg-btnColors rounded-lg leading-7 flex items-center justify-center gap-3 btnHoverForm disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <span>
                                {isSubmitting ? "جاري الإرسال..." : "إرسال"}
                            </span>
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ForgotPasswordForm;