"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { fetchClientSecret } from "@/lib/api/apiClient";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function ProButton() {
    const [clientSecret, setClientSecret] = useState('');

    const getClientSecret = async () => {
        const secret = await fetchClientSecret();
        setClientSecret(secret);
    };

    // Options for the Embedded Checkout form, providing the fetchClientSecret function
    const options = { clientSecret };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="submit" formMethod="post" variant={"default"} onClick={getClientSecret}>
                    Make Payment
                </Button>
            </DialogTrigger>
            <DialogContent className="my-4 py-12 xl:max-w-screen-xl">
                <DialogTitle className="text-xl font-semibold">Pro Membership</DialogTitle>

                {clientSecret && (
                    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                        <EmbeddedCheckout className="max-h-[80dvh]" />
                    </EmbeddedCheckoutProvider>
                )}

                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancel Payment
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
