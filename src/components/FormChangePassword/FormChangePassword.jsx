import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import Status from "../global/Status";

const FormChangePassword = () => {
    const [succed, setSucced] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Validation Schema
    const validationSchema = Yup.object({
        currentPassword: Yup.string()
            .min(6, "يجب أن تحتوي كلمة المرور الحالية على 6 أحرف على الأقل")
            .required("هذا الحقل مطلوب"),
        newPassword: Yup.string()
            .min(6, "يجب أن تحتوي كلمة المرور الجديدة على 6 أحرف على الأقل")
            .required("هذا الحقل مطلوب"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("newPassword"), null], "يجب أن تتطابق كلمات المرور")
            .required("يجب تأكيد كلمة المرور"),
    });

    // Initial Values
    const initialValues = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    };

    // Form Field Styles
    const inputClasses =
        "mt-1 py-3 block w-full text-[#444343] rounded-md border outline-none text-[15px] placeholder:text-[#B3B3B3] px-3 pr-8 border-[#E6E6E6] shadow-sm text-right placeholder:text-xs";
    const labelClasses = "block text-sm font-bold text-gray-700 text-right";
    const errorClasses = "text-red-500 text-sm mt-1 text-right";
    const iconClasses =
        "absolute top-[34px] right-0 transform -translate-x-1/2 text-[#363744]";

    // Toggle password visibility
    const togglePasswordVisibility = (field) => {
        if (field === "currentPassword") {
            setShowCurrentPassword(!showCurrentPassword);
        } else if (field === "newPassword") {
            setShowNewPassword(!showNewPassword);
        } else if (field === "confirmPassword") {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    // Submit Handler
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log("Form Data:", values);
            // Add your API call here
            setSucced(true);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setSubmitting(false);
        }
    };

    if (succed) {
        return <Status title={"تم التحديث بنجاح"} />;
    }

    return (
        <div className="md:max-w-lg mt-16 px-6 space-y-2 mx-auto bg-[#FFFFFF] p-6 rounded-[12px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="text-center">
                <h2 className="text-xl font-bold">تغيير كلمة المرور</h2>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        {/* Current Password Field */}
                        <div className="space-y-2 relative">
                            <label htmlFor="currentPassword" className={labelClasses}>
                                كلمة المرور الحالية
                            </label>
                            <Field
                                type={showCurrentPassword ? "text" : "password"}
                                id="currentPassword"
                                name="currentPassword"
                                className={inputClasses}
                                placeholder="أدخل كلمة المرور الحالية"
                            />
                            <FaLock className={iconClasses} />
                            <div
                                onClick={() => togglePasswordVisibility("currentPassword")}
                                className="absolute top-[35px] left-2 cursor-pointer"
                            >
                                {showCurrentPassword ? (
                                    <FaEye className="text-[#363744]" />
                                ) : (
                                    <FaEyeSlash className="text-[#363744]" />
                                )}
                            </div>
                            <ErrorMessage
                                name="currentPassword"
                                component="div"
                                className={errorClasses}
                            />
                        </div>

                        {/* New Password Field */}
                        <div className="space-y-2 relative">
                            <label htmlFor="newPassword" className={labelClasses}>
                                كلمة المرور الجديدة
                            </label>
                            <Field
                                type={showNewPassword ? "text" : "password"}
                                id="newPassword"
                                name="newPassword"
                                className={inputClasses}
                                placeholder="أدخل كلمة المرور الجديدة"
                            />
                            <FaLock className={iconClasses} />
                            <div
                                onClick={() => togglePasswordVisibility("newPassword")}
                                className="absolute top-[35px] left-2 cursor-pointer"
                            >
                                {showNewPassword ? (
                                    <FaEye className="text-[#363744]" />
                                ) : (
                                    <FaEyeSlash className="text-[#363744]" />
                                )}
                            </div>
                            <ErrorMessage
                                name="newPassword"
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
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                className={inputClasses}
                                placeholder="أعد إدخال كلمة المرور الجديدة"
                            />
                            <FaLock className={iconClasses} />
                            <div
                                onClick={() => togglePasswordVisibility("confirmPassword")}
                                className="absolute top-[35px] left-2 cursor-pointer"
                            >
                                {showConfirmPassword ? (
                                    <FaEye className="text-[#363744]" />
                                ) : (
                                    <FaEyeSlash className="text-[#363744]" />
                                )}
                            </div>
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className={errorClasses}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col gap-4 md:flex-row md:gap-10 !mt-7">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 px-5 text-sm font-bold text-secondary bg-btnColors rounded-lg leading-7 flex items-center justify-center gap-3 btnHoverForm disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>
                                    {isSubmitting ? "جاري التحديث..." : "حفظ"}
                                </span>
                            </button>
                            <Link
                                to={"/profile"}
                                className="w-full py-2 px-5 text-sm font-bold text-[#646464] rounded-lg leading-7 flex items-center justify-center gap-3 border-[0.5px] border-[#646464] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>الرجوع إلى الملف الشخصي</span>
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormChangePassword;
