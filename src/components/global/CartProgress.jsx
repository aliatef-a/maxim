import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartProgress = () => {
    const { currentStep, steps } = useSelector((state) => state.cartProgress);

    return (
        <div className="w-full py-4 px-6">
            <div className="flex justify-between">
                {steps.map((step, index) => (
                    <div key={step.id} className="relative flex flex-col items-center flex-1">
                        {/* Step Circle */}
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center z-10 
                            ${currentStep > step.id
                                    ? 'bg-[#363744] text-white'
                                    : currentStep === step.id
                                        ? 'bg-[#363744] text-white'
                                        : 'bg-[#B3B3B3] text-white font-bold border border-gray-300'
                                }`}
                        >
                            {currentStep > step.id ? (
                                <FaCheck className="w-4 h-4" />
                            ) : (
                                <span className="text-sm font-medium">{step.id}</span>
                            )}
                        </div>
                        {/* Connector Line */}
                        {index < steps.length - 1 && (
                            <div
                                className={`absolute w-full h-[2px] top-5 right-[50%] border-dashed border-t-2
                                ${currentStep > step.id ? 'border-[#B3B3B3]' : 'border-[#B3B3B3]'}`}
                            />
                        )}

                        {/* Step Title */}
                        <span
                            className={`mt-2 text-sm font-medium 
                            ${currentStep >= step.id ? 'text-[#363744] font-bold text-base' : 'text-[#B3B3B3] font-bold text-base'}`}
                        >
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartProgress;