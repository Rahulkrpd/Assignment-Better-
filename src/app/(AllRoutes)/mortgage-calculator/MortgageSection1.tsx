"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";


const calculateSecondValue = (firstValue: number) => {
    return 701010.79 * Math.log(7.215e-9 * firstValue + 1) + 629.05;
};

const MortgageSection1 = () => {
    const [firstValue, setFirstValue] = useState(50000); // Default value
    const maxValue = 50000; // Maximum home price for normalization
    const secondValue = calculateSecondValue(firstValue);

    const progressValue = Math.min((firstValue / maxValue) * 100, 100);

    // Function to handle progress bar dragging
    const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const newProgress = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const newFirstValue = Math.round((newProgress / 100) * maxValue);
        setFirstValue(newFirstValue);
    };

    return (
        <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center mt-20 bg-[#d0f1d69a]">
            <div className="w-[90%] h-4/5 ">
                {/* Title */}
                <div className="w-full h-20 border-green-900 flex items-center">
                    <h2 className="text-6xl font-medium text-[#292b29]">Mortgage calculator</h2>
                </div>

                {/* Description */}
                <div className="w-5/5 lg:w-3/5">
                    <p>
                        Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
                    </p>
                </div>

                {/* Labels */}
                <div className="flex justify-between mt-10 lg:w-3/5">
                    <div className="ml-12 font-mono">
                        <p>Home Price</p>
                    </div>
                    <div className="mr-20">
                        <p>Monthly Payment</p>
                    </div>
                </div>

                {/* Inputs */}
                <div className="flex justify-between w-full lg:w-3/5">
                    <div className="bg-white ml-5 overflow-hidden  flex items-center border-[1px] rounder-full  hover:border-green-800 hover:border-4 rounded-2xl">

                        <div>
                            <span className="p-3 text-2xl">$</span>
                        </div>

                        <Input
                            type="Number"
                            className="p-5 text-2xl lg:text-2xl w-48 "
                            value={firstValue}
                            onChange={(e) => {
                                let value = e.target.value;

                                // If input is "0" and user types a number, replace "0" with the new number
                                if (firstValue === 0) {
                                    value = value.replace(/^0+/, "");
                                }

                                setFirstValue(value ? Number(value) : 0); // Ensure valid number
                            }}
                            onBlur={(e) => setFirstValue(Number(e.target.value) || 0)} // Ensure no empty input
                        />



                    </div>
                    <div className="flex items-center justify-center ">

                        <div>
                            <span className=" p-3 text-2xl relative left-6">$</span>
                        </div>
                        <Input
                            type="Number"
                            className="p-5 text-2xl lg:text-2xl w-48 border-none justify-end"
                            value={Math.round(secondValue)}
                            readOnly

                        />
                    </div>
                </div>

                {/* Draggable Progress Bar */}
                <div
                    className="relative w-full lg:w-3/5 h-4 bg-gray-300 rounded-full mt-10 cursor-pointer"
                    onMouseDown={(e) => handleDrag(e)}
                    onMouseMove={(e) => e.buttons === 1 && handleDrag(e)} // Enables dragging
                >
                    <div
                        className="absolute top-0 h-full bg-blue-500 rounded-full"
                        style={{ width: `${progressValue}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MortgageSection1;
