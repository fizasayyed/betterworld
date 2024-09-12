/* eslint-disable react-hooks/rules-of-hooks */
import domain from "@/lib/api/endpoint";

export const fetchClientSecret = async () => {
    // Make a POST request to your Node.js backend to create a PaymentIntent
    return fetch(`${domain.hostname}/${domain.endpoint.createPayment}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 50 }), // Example: $50
    })
        .then((res) => res.json())
        .then((data) => data.client_secret);
}

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
        console.log("Error occured during API call", error);
    }
}
