import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { assets } from "../../assets/assets";
import { FaLock } from "react-icons/fa";

const NewPasswordForm = () => {
    // Validation Schema
    const validationSchema = Yup.object({
        password: Yup.string()
            .required("هذا الحقل مطلوب")
            .min(8, "يجب أن تكون كلمة المرور 8 أحرف على الأقل"),
        confirmPassword: Yup.string()
            .required("هذا الحقل مطلوب")
            .oneOf([Yup.ref('password')], "كلمة المرور غير متطابقة")
    });

    // Initial Values
    const initialValues = {
        password: "",
        confirmPassword: ""
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
                <h1 className="text-base text-secondary font-bold">كلمة المرور الجديدة</h1>
                <p className="text-[#646464] text-xs">الرجاء إدخال كلمة المرور الجديدة.</p>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        {/* Password Field */}
                        <div className="space-y-2 relative">
                            <label htmlFor="password" className={labelClasses}>
                                كلمة المرور الجديدة
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className={inputClasses}
                                placeholder="أدخل كلمة المرور الجديدة"
                            />
                            <FaLock className={iconClasses} />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className={errorClasses}
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-2 relative">
                            <label htmlFor="confirmPassword" className={labelClasses}>
                                تأكيد كلمة المرور
                            </label>
                            <Field
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className={inputClasses}
                                placeholder="أدخل تأكيد كلمة المرور"
                            />
                            <FaLock className={iconClasses} />
                            <ErrorMessage
                                name="confirmPassword"
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
                                {isSubmitting ? "جاري الحفظ..." : "حفظ"}
                            </span>
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default NewPasswordForm;