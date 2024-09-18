"use client"

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '@/components/checkoutForm/checkoutForm';
import { createPaymentIntent } from '@/lib/api/apiClient';
import { useEffect, useState } from 'react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function StripeDemo() {
    const [clientSecret, setClientSecret] = useState(null);

    // Fetch client secret when component mounts
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
            {/* Only render the Elements component once clientSecret is ready */}
            {clientSecret ? (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements>
            ) : (
                <div>Loading payment details...</div>
            )}
        </>
    );
};