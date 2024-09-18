import React from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function CompletePage() {
    const stripe = useStripe();
    const [status, setStatus] = React.useState("default");
    const [intentId, setIntentId] = React.useState(null);

    React.useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            if (!paymentIntent) {
                return;
            }

            setStatus(paymentIntent.status);
            setIntentId(paymentIntent.id);
        });
    }, [stripe]);

    return (
        <div className="flex flex-col items-center justify-center p-1">
            <div className="text-center">
                {status === "succeeded" ? (
                    <Alert className="flex flex-col-2 items-center justify-center bg-gray-100 p-6 rounded-md shadow-md">
                        <div className="flex justify-center">
                            <CheckCircle className="w-20 h-20 text-yellow-500" />
                        </div>
                        <AlertTitle className="mt-4 text-xl pl-2 font-bold text-green-600">
                            Payment succeeded!
                        </AlertTitle>
                    </Alert>
                ) : (
                    <Alert className="flex flex-col-2 items-center justify-center bg-gray-100 p-6 rounded-md shadow-md">
                        <div className="flex justify-center">
                            <CheckCircle className="w-20 h-20 text-gray-400" />
                        </div>
                        <AlertTitle className="mt-4 text-xl pl-2 font-bold text-gray-700">
                            Processing payment...
                        </AlertTitle>
                        {/* <AlertDescription className="mt-2 text-gray-600">
                            Please wait while we process your payment.
                        </AlertDescription> */}
                    </Alert>
                )}

                <Button variant="outline" className="mt-6" onClick={() => window.location.href = '/donate'}>
                    Donate Again
                </Button>
            </div>
        </div>
    );
}
