import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { assets } from "../../assets/assets";
import Button from "../global/Button";
import Status from "../global/Status";
import { Navigate } from "react-router-dom";

const RateProduct = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle rating submission
        console.log({ rating, comment });
    };

    if (isSuccess) {
        return (
            <Status
                img={assets.success}
                title={"شكراً لك على التقييم!"}
                description={"تم إرسال تقييمك بنجاح. نقدر مشاركتك رأيك معنا."}
                buttonText={"العودة للرئيسية"}
                buttonHref={"/"}
                onClick={() => Navigate("/")}
            />
        );
    }

    return (
        <div className=" p-6 rounded-lg">

            <div className="mt-8 flex flex-col md:flex-row items-start justify-center gap-6">
                <div className="bg-[#ECFFEC] rounded-lg p-4">
                    <img src={assets.dressCard} alt="dress" className="w-[200px] h-[200px]" />
                </div>
                <div className="w-full  md:w-[600px] h-full">
                    <h2 className="text-base font-bold mb-6">فستان بإطلالة حمراء</h2>
                    <div className="flex justify-start items-center gap-2 mb-6">
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        className="hidden"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                    />
                                    <FaStar
                                        className="cursor-pointer transition-colors"
                                        size={32}
                                        color={ratingValue <= (hover || rating) ? "#FFD700" : "#e4e5e9"}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                    />
                                </label>
                            );
                        })}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="الرجاء كتابة تعليقك عن المنتج .."
                                className="w-full outline-none bg-transparent p-3 border border-[0.5px_solid_#B3B3B3] rounded-lg resize-none h-32 focus:outline-none focus:border-[#363744]"
                            />
                        </div>
                        <div className="w-[200px]">
                            <Button text="إرسال " className={"justify-center"} onClick={() => setIsSuccess(true)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RateProduct; 