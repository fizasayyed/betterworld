import React from 'react';

interface StepProgressBarProps {
    currentStep: number;
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Sign In with Google' }, // Not using labels as of now
        { id: 2, label: 'Provide Your Personal Details' },
        { id: 3, label: 'Enter Payment Information' },
        { id: 4, label: 'Complete the Payment' },
    ];

    return (
        <div className="flex items-center justify-center space-x-4 mb-8">
            {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                        {/* Step Circle */}
                        <div
                            className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep === step.id
                                ? 'border-4 bg-white border-yellow-500 text-yellow-900'
                                : 'border-4 bg-white border-gray-300 text-yellow-900'
                                }`}
                        >
                            {step.id}
                        </div>
                    </div>
                    {/* Connector */}
                    {index < steps.length - 1 && (
                        <div
                            className={`w-16 h-1 ml-4 ${currentStep >= step.id + 1
                                ? 'bg-yellow-500'
                                : 'bg-gray-300'
                                }`}
                        ></div>
                    )}
                </div>
            ))}
        </div>
    );
};
