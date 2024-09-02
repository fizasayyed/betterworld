import React from 'react';

interface StepProgressBarProps {
    currentStep: number;
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Provide Your Personal Details' },
        { id: 2, label: 'Enter Payment Information' },
        { id: 3, label: 'Complete the Payment' },
    ];

    return (
        <div className="flex flex-col items-start space-y-0 mb-8 my-12 ml-5">
            {steps.map((step, index) => (
                <div key={step.id} className="flex items-start">
                    <div className="flex flex-col items-center">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep === step.id ? 'bg-yellow-500 text-yellow-900' : 'bg-yellow-300 text-yellow-900'}`}>
                            {step.id}
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`border-l-4 h-12 ${currentStep >= step.id + 1 ? 'border-yellow-700' : 'border-yellow-300'}`}></div>
                        )}
                    </div>
                    <div className={`ml-4 pt-2 ${currentStep === step.id ? 'text-yellow-900 font-semibold' : 'text-yellow-500'}`}>
                        {step.label}
                    </div>
                </div>
            ))}
        </div>
    );
};
