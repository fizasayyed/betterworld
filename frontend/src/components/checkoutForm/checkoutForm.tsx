// import { useEffect } from 'react';
// import { useFormStore } from '@/lib/useFormStore';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe(); // Stripe instance
    const elements = useElements(); // Stripe elements
    const router = useRouter();

    // const { updatePaymentStatus } = useFormStore((state) => ({
    //     payment_status: state.payment_status,
    //     updatePaymentStatus: state.updatePaymentStatus,
    // }));

    // useEffect(() => {
    //     const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');
    //     if (clientSecret) {
    //         stripe?.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //             if (paymentIntent?.status === 'succeeded') {
    //                 // updatePaymentStatus(paymentIntent.id); // Store the payment intent ID
    //                 router.push('/donate/create/payment/stripe/status');
    //             }
    //         });
    //     }
    // }, [router, stripe]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            return;
        }

        // Confirm the payment
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${process.env.NEXT_PUBLIC_DOMAIN}/donate/create/payment/stripe/status`,
            },
        });

        // Handle errors
        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <PaymentElement className="w-full max-w-md mb-4" />
            <Button className="mt-4" disabled={!stripe}>
                Submit Payment
            </Button>
        </form>
    );
};

export default CheckoutForm;
