import { useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from "../../assets/assets";
import Button from "../global/Button";

const DressDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="container flex flex-col md:flex-row items-start gap-3 md:gap-7 section-gap">
            {/* Image Section */}
            <div className="md:w-[40%] flex flex-col gap-3">
                <div className="w-full bg-[#ECFFEC] rounded-2xl p-10 flex items-center justify-center">
                    <img
                        className="w-full h-fit object-contain cursor-pointer"
                        src={assets.dressCard}
                        alt="Elegant Red Dress"
                        onClick={() => handleImageClick(assets.dressCard)}
                    />
                </div>
                <div className="flex items-center gap-3">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className="md:w-[120px] bg-[#ECFFEC] rounded-2xl p-5 flex items-center justify-center"
                        >
                            <img
                                className="w-full h-full object-contain cursor-pointer"
                                src={assets.dressCard}
                                alt="Elegant Red Dress"
                                onClick={() => handleImageClick(assets.dressCard)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-5 md:gap-10 mt-5 flex-1 items-center md:items-start text-center md:text-start">
                <h2 className="text-2xl text-secondary font-bold">فستان بإطلالة حمراء</h2>
                <p className="lg:w-[70%] text-[#646464] font-normal leading-8">
                    فستان حريمي بإطلالة حمراء أنيقة، تصميم عصري مميز يناسب السهرات والمناسبات، مصنوع من قماش عالي الجودة لإطلالة ساحرة.
                </p>

                {/* Color and Size Section */}
                <div className="flex justify-around md:justify-between items-start gap-6 w-full md:w-[40%]">
                    <div className="flex flex-col gap-3 items-center md:items-start">
                        <span className="text-lg text-secondary font-normal">اللون</span>
                        <div className="bg-[#D30404] rounded-full w-7 h-7 md:w-9 md:h-9"></div>
                    </div>
                    <div className="flex flex-col gap-3 items-center md:items-start">
                        <span className="text-lg text-secondary font-normal">المقاس</span>
                        <span className="border font-normal border-[#363744] rounded-full flex items-center justify-center w-7 h-7 md:w-10 md:h-10">
                            70
                        </span>
                    </div>
                </div>

                {/* Rating Section */}
                <div className="flex items-center gap-4">
                    <span>(236 تقييم)</span>
                    <img src={assets.starsProduct} alt="Product Rating Stars" />
                </div>

                {/* Add to Cart Section */}
                <div className="flex items-center gap-7">
                    <Button text="إضافة للسلة">
                        <img src={assets.CartIcon} alt="Cart Icon" />
                    </Button>
                    <h3 className="text-secondary font-bold ">750 ريال سعودي</h3>
                </div>
            </div>

            {/* Image Modal */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleCloseModal}
                >
                    <motion.img
                        src={selectedImage}
                        alt="Selected Dress"
                        className="max-w-[80%] max-h-[80%] object-contain rounded-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.4 }}
                    />
                </motion.div>
            )}
        </div>
    );
};

export default DressDetails;
