import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import CompletePage from '../paymentCompleteForm/completeForm';
import { useFormStore } from '@/lib/useFormStore';
import { useSession } from 'zustand/middleware';

const CheckoutForm = () => {
    const stripe = useStripe(); // Stripe instance
    const elements = useElements(); // Stripe elements
    const { upi_id, updateUPI } = useFormStore((state) => ({
        upi_id: state.upi_id,
        updateUPI: state.updateUPI,
    }));

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            return;
        }

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/donate/create/payment/stripe',
            },
        });

        if (error) {
            console.error(error.message);
        } else if (paymentIntent?.status === 'succeeded') {
            updateUPI(paymentIntent.id); // Store the payment intent ID
        }
    };

    return upi_id ? (
        <CompletePage />
    ) : (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe}>Submit Payment</button>
        </form>
    );
};

export default CheckoutForm;
