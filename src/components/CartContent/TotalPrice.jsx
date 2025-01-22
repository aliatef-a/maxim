import { useState } from "react";
import { useDispatch } from "react-redux";
import { nextStep, setPaymentStep } from "../../store/slices/cartProgressSlice";

const TotalPrice = () => {
    const [coupon, setCoupon] = useState("");
    const [note, setNote] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Handle form submission logic here
            console.log({
                coupon,
                note
            });
            dispatch(nextStep());
            dispatch(setPaymentStep("shipping"));
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center text-[#646464]">تفاصيل الفاتورة</h3>

            <form onSubmit={handleSubmit}>
                {/* Coupon Section */}
                <div className="mb-6">
                    <div className="flex gap-2 relative">
                        <input
                            type="text"
                            placeholder="ادخل كوبون الخصم ..."
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            className="flex-1 border rounded p-2 py-3 outline-none placeholder:text-[#646464] placeholder:text-sm"
                        />
                        <button
                            type="button"
                            className="bg-primary text-[#363744] px-4 py-2 rounded absolute left-1 top-[50%] transform -translate-y-1/2"
                        >
                            تطبيق
                        </button>
                    </div>
                </div>

                {/* Price Details */}
                <div className="space-y-7 mb-6">
                    <div className="flex justify-between">
                        <span className="text-[#646464]">سعر المنتجات</span>
                        <span className="text-secondary font-bold">2500 ريال</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[#646464]">خدمة الشحن</span>
                        <span className="text-secondary font-bold">100 ريال</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[#646464]">ضريبة القيمة المضافة</span>
                        <span className="text-secondary font-bold">100 ريال</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[#646464]">الخصم</span>
                        <span className="text-secondary font-bold">100 ريال</span>
                    </div>
                    <div className="flex border-t border-gray-300 pt-4 justify-between font-bold text-lg">
                        <span>الإجمالي</span>
                        <span className="text-secondary font-bold">1050 ر.س</span>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 px-5 text-sm font-bold text-secondary bg-btnColors rounded-lg leading-7 flex items-center justify-center gap-3  btnHoverForm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <span>
                        {isSubmitting ? "جاري الإرسال..." : "تابع عملية الشراء"}
                    </span>
                </button>
            </form>
        </div>
    );
};

export default TotalPrice;
