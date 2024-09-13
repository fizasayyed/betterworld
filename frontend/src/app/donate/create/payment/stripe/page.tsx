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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function ProButton() {
    const [clientSecret, setClientSecret] = useState('');
    const [amount, setAmount] = useState(''); // State to manage the input amount

    const getClientSecret = async () => {
        if (!amount) {
            console.error('Amount is required');
            return;
        }
        const secret = await fetchClientSecret(Number(amount), 'usd');
        setClientSecret(secret);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value); // Update amount state on input change
    };

    // Options for the Embedded Checkout form, providing the fetchClientSecret function
    const options = { clientSecret };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    type="button"
                    variant={"default"}

                >
                    Open Payment Modal
                </Button>
            </DialogTrigger>
            <DialogContent className="my-4 py-12 xl:max-w-screen-xl">
                <DialogTitle className="text-xl font-semibold">Pro Membership</DialogTitle>
                <Label
                    htmlFor="amount"
                    className="block text-md font-bold text-gray-700"
                >
                    Enter Amount
                </Label>
                <Input
                    id="amount_input"
                    type="text"
                    className="mt-1 block max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Amount"
                    value={amount}
                    onChange={handleAmountChange} // Update state on input change
                />
                {clientSecret && (
                    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                        <EmbeddedCheckout className="max-h-[80dvh]" />
                    </EmbeddedCheckoutProvider>
                )}
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={getClientSecret}>
                            Cancel Payment
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
