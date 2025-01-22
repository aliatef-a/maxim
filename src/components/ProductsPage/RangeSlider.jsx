import { useState } from "react";
import { Range } from "react-range";

const RangeSlider = () => {
    const [values, setValues] = useState([0, 1000]);
    const min = 0;
    const max = 1000;

    const handleInputChange = (index, value) => {
        const newValues = [...values];
        newValues[index] = Math.min(Math.max(Number(value), min), max);
        setValues(newValues);
    };

    return (
        <div className="flex flex-col items-center" dir="ltr">
            {/* Input Fields */}
            <div className="mb-4 flex justify-between items-center gap-5 ">

                <input
                    type="number"
                    value={values[0]}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                    placeholder="من"
                    className="border py-2 px-3 border-gray-400 rounded w-20"
                />
                <span>-</span>
                <input
                    type="number"
                    value={values[1]}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    placeholder="إلى"
                    className="border py-2 px-3 border-gray-400 rounded w-20"
                />
            </div>

            {/* Slider */}
            <div className="w-full max-w-md ">
                <Range
                    step={1}
                    max={max}
                    min={min}
                    values={values}
                    onChange={setValues}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            className="h-1 bg-gray-400 rounded-lg relative"
                        >
                            <div
                                style={{
                                    left: `${((values[0] - min) / (max - min)) * 100}%`,
                                    right: `${100 - ((values[1] - min) / (max - min)) * 100}%`,
                                }}
                                className="absolute h-1 bg-gray-800 rounded-lg"
                            />
                            {children}
                        </div>
                    )}
                    renderThumb={({ props, index }) => (
                        <div
                            {...props}
                            className="h-4 w-4 bg-gray-800 rounded-full shadow-md flex items-center justify-center"
                            aria-label={`Thumb ${index + 1}`}
                        >
                            <div className="h-2 w-2 bg-gray-800 rounded-full" />
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default RangeSlider;
