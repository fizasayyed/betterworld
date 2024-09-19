/* eslint-disable react-hooks/rules-of-hooks */
import domain from "@/lib/api/endpoint";
import { useStripe } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

export const createPaymentIntent = async (amount: number, currency = 'usd') => {
    try {
        const response = await fetch(`${domain.hostname}/${domain.endpoint.createPayment}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount, currency }),
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        return data.client_secret;
    } catch (error) {
        console.error("Error fetching client secret:", error);
        throw error;
    }
};

export const testService = async () => {

    const response = await fetch(`${domain.hostname}/${domain.endpoint.testAPI}`, {
        method: "GET"
    })

    try {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = response.json();
        return data;

    } catch (error) {
        console.log("Error occurred during API call", error);
    }
}
