"use client"

import { loadStripe } from "@stripe/stripe-js"
import {
    Elements,
} from "@stripe/react-stripe-js"
import { Card } from "@/components/ui/card"
import { MenubarDemo } from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import { StepProgressBar } from "@/components/ui/progressbar"
import CompletePage from "@/components/paymentCompleteForm/completeForm"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function PaymentDemo() {
    const currentStep = 3;

    return (
        <>
            <div className="overflow-y-hidden">
                <MenubarDemo />
            </div>
            <div className="flex flex-col items-center justify-top py-10">
                <h2 className="text-xl font-bold mb-6 text-center">
                    Tell Us More About Yourself
                </h2>
                <div className="w-full max-w-lg mt-8">
                    <Card className="mx-auto p-10">
                        <div className="w-full max-w-md pb-8">
                            <StepProgressBar currentStep={currentStep} />
                        </div>
                        <Elements stripe={stripePromise}>
                            <CompletePage />
                        </Elements>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}
