/* eslint-disable import/no-anonymous-default-export */
export default {
    hostname: process.env.NEXT_PUBLIC_API_DOMAIN,
    // hostname: "http://localhost:5000",

    endpoint: {
        testAPI: 'api/test',
        storeAllUsers: 'api/register',
        createPayment: 'api/create/payment',
    },
}