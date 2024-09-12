import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export async function createPayment() {
    const {
        amount,
        currency
    } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Amount in the smallest currency unit (e.g., $10 -> 1000 cents)
            currency: currency || 'usd', // Default is USD if nothing mentioned
            payment_method_types: ['card'], // Specify what you'll use
        });

        // Send the clientSecret to the frontend to confirm the payment
        res.status(200).json({
            client_secret: paymentIntent.client_secret
        });
    } catch (err) {
        console.error('Error creating PaymentIntent:', err);
        res.status(500).send('Failed to create payment');
    }
}