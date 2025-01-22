import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaMobile, FaLock } from "react-icons/fa";
import AuthService from "../../service/Auth";
import { login } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';

const SignupForm = () => {
    const dispatch = useDispatch()
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
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'كلمة المرور غير متطابقة')
            .required("هذا الحقل مطلوب"),
        terms: Yup.boolean()
            .oneOf([true], "يجب الموافقة على الشروط والأحكام")
            .required("يجب الموافقة على الشروط والأحكام")
    });

    // Initial Values
    const initialValues = {
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        terms: false
    };

    // Form Field Styles
    const inputClasses = "mt-1 py-3 block w-full text-[#444343] rounded-md border outline-none text-[15px] placeholder:text-[#B3B3B3] px-3 pr-8 border-[#E6E6E6] shadow-sm text-right";
    const labelClasses = "block text-xs font-bold text-gray-700 text-right";
    const errorClasses = "text-red-500 text-sm mt-1 text-right";
    const iconClasses = "absolute top-[33px] right-0 transform -translate-x-1/2 text-[#363744]";

    // Submit Handler
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log("FormData", values);
            const response = await AuthService.register({
                name: values.name,
                email: values.email,
                phone: values.mobile,
                password: values.password,
                confirmPassword: values.confirmPassword,
            })
            const { user, token } = response.data;
            // Store user and token in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            toast.success('Successfully toasted!')
            dispatch(login({ user, token }));

        } catch (error) {
            console.error("Signup error:", error);
            console.error('Signup error:', error.response?.data || error.message);
            toast.error(error.response?.data || error.message)
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
                <h1 className="text-base text-secondary font-bold">إنشاء حساب جديد</h1>
                <p className="text-[#646464] text-xs">الرجاء إدخال بياناتك لإنشاء حساب جديد.</p>
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
                            <Field
                                type="tel"
                                id="mobile"
                                name="mobile"
                                className={inputClasses}
                                placeholder="أدخل رقم جوالك"
                            />
                            {/* <PhoneNumberInput /> */}
                            <FaMobile className={iconClasses} />
                            <ErrorMessage
                                name="mobile"
                                component="div"
                                className={errorClasses}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2 relative">
                            <label htmlFor="password" className={labelClasses}>
                                كلمة المرور
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className={inputClasses}
                                placeholder="أدخل كلمة المرور"
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
                        <div className="space-y-2">
                            <label className="flex items-center text-sm text-gray-700">
                                <Field
                                    type="checkbox"
                                    name="terms"
                                    className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-[4px] relative checked:bg-primary checked:border-none focus:outline-none"
                                />
                                <span className="mr-2 text-secondary font-medium text-sm">أوافق على الشروط والأحكام.</span>
                            </label>
                            <ErrorMessage
                                name="terms"
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
                                {isSubmitting ? "جاري التسجيل..." : "إنشاء حساب"}
                            </span>
                        </button>

                        <div className="text-center text-[#646464] text-xs font-medium">
                            <p>
                                لديك حساب بالفعل؟{" "}
                                <Link to="/login" className="underline font-semibold">
                                    تسجيل الدخول
                                </Link>
                            </p>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignupForm;
