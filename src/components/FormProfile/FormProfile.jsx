import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaMobile } from "react-icons/fa";
import PhoneNumberInput from "../global/PhoneNumberInput";


const FormProfile = () => {

    // Validation Schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("هذا الحقل مطلوب"),
        email: Yup.string()
            .email("البريد الإلكتروني غير صحيح")
            .required("هذا الحقل مطلوب"),
        mobile: Yup.string()
            .matches(/^[0-9]+$/, "رقم الجوال غير صحيح")
            .min(10, "يجب أن يحتوي رقم الجوال على 10 أرقام على الأقل")
            .required("هذا الحقل مطلوب"),
        password: Yup.string()
            .min(6, "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل")
            .required("هذا الحقل مطلوب"),
    });

    // Initial Values
    const initialValues = {
        name: "",
        email: "",
        mobile: "",
        password: "",
    };

    // Form Field Styles
    const inputClasses = "mt-1 py-3 block w-full text-[#444343] rounded-md border outline-none text-[15px] placeholder:text-[#B3B3B3] px-3 pr-8 border-[#E6E6E6] shadow-sm text-right placeholder:text-xs";
    const labelClasses = "block text-xs font-bold text-gray-700 text-right";
    const errorClasses = "text-red-500 text-sm mt-1 text-right";
    const iconClasses = "absolute top-[33px] right-0 transform -translate-x-1/2 text-[#363744]";

    // Submit Handler
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log("Form Data:", values);
            // Add your API call here
        } catch (error) {
            console.error("Signup error:", error);
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <div className="md:max-w-lg mt-16 px-6 space-y-2 mx-auto bg-[#FFFFFF] p-6 rounded-[12px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="text-center">
                <h2 className="text-xl font-bold">الملف الشخصي</h2>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        {/* Name Field */}
                        <div className="space-y-2 relative">
                            <label htmlFor="name" className={labelClasses}>
                                الاسم
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className={inputClasses}
                                placeholder="أدخل اسمك"
                            />
                            <FaUser className={iconClasses} />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className={errorClasses}
                            />
                        </div>

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

                        {/* Mobile Field */}
                        <div className="space-y-2 relative">
                            <label htmlFor="mobile" className={labelClasses}>
                                رقم الجوال
                            </label>
                            {/* <Field
                                type="tel"
                                id="mobile"
                                name="mobile"
                                className={inputClasses}
                                placeholder="أدخل رقم جوالك"
                            /> */}
                            <PhoneNumberInput />
                            <FaMobile className={iconClasses} />
                            <ErrorMessage
                                name="mobile"
                                component="div"
                                className={errorClasses}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 px-5 text-sm font-bold text-secondary bg-btnColors rounded-lg leading-7 flex items-center justify-center gap-3 btnHoverForm disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>
                                    {isSubmitting ? "جاري الحفظ..." : "حفظ التعديلات"}
                                </span>
                            </button>
                            <Link
                                to={"/change-password"}
                                className="w-full py-2 px-5 text-sm font-bold text-[#646464] rounded-lg leading-7 flex items-center justify-center gap-3 border-[0.5px] border-[#646464] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>
                                    {isSubmitting ? "جاري الحفظ..." : "تغيير كلمة المرور"}
                                </span>
                            </Link>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormProfile;
