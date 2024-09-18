"use client"

import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
    Elements,
} from "@stripe/react-stripe-js"
import { createPaymentIntent } from "@/lib/api/apiClient"
import { Card } from "@/components/ui/card"
import { MenubarDemo } from "@/components/navbar/navbar"
import CheckoutForm from "@/components/checkoutForm/checkoutForm"
import Footer from "@/components/footer/footer"
import { StepProgressBar } from "@/components/ui/progressbar"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function StripeDemo() {
    const currentStep = 2;
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const data = await createPaymentIntent(25, "usd"); // Amount and currency
                setClientSecret(data); // Set client secret
            } catch (error) {
                console.error("Error fetching client secret:", error);
            }
        };
        getClientSecret();
    }, []);

    const options = clientSecret
        ? {
            clientSecret: clientSecret,
        }
        : "";

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
                        {clientSecret ? (
                            <Elements stripe={stripePromise} options={options}>
                                <CheckoutForm />
                            </Elements>
                        ) : (
                            <div>Loading payment details...</div>
                        )}
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}
