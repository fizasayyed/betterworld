/* eslint-disable react/no-unescaped-entities */
"use client"

import * as React from "react";
import { useFormStore } from "@/lib/useFormStore";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useRouter } from "next/navigation";

export default function Donation() {
    const updateAmount = useFormStore((state) => state.updateAmount);
    const router = useRouter();

    const handleDonateClick = (amount: number) => {
        updateAmount(amount); // save the selected amount to Zustand store
        router.push("/donate");
    };
    return (
        <div className="flex flex-col items-center px-10 mt-8">
            <div className="flex">
                <p className="text-[60px] text-gray-700 font-extrabold">
                    Select Your Donation
                </p>
            </div>
            <div className="flex justify-between px-8 mt-8 w-full max-w-7xl">
                {[10, 25, 50, 100].map((amount) => (
                    <Card key={amount} className="w-[250px]">
                        <CardHeader>
                            <CardTitle>₹ {amount}</CardTitle>
                            <CardDescription>Make an impact with your donation.</CardDescription>
                        </CardHeader>
                        {/* <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor={`amount-${amount}`}><strong>UPI ID</strong></Label>
                                        <Input id="upi_id" placeholder="Please Enter UPI ID" />
                                    </div>
                                </div>
                            </form>
                        </CardContent> */}
                        <CardFooter className="flex justify-between">
                            <Button onClick={() => handleDonateClick(amount)} size="sm" className="font-semibold text-gray-700">Donate</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="w-full max-w-8xl mt-8 px-20">
                <Accordion type="single" collapsible className="font-semibold text-lg mt-20 w-full max-w-8xl">
                    <p className="w-full text-4xl mb-2 fonts-extrabold text-gray-700">Frequently Asked</p>
                    <p className="w-full text-4xl mb-5 fonts-extrabold text-gray-700">Questions.</p>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How can I make donations?</AccordionTrigger>
                        <AccordionContent>
                            You can easily make a donation by visiting our donation page and selecting the cause you wish to support.
                            Simply choose your preferred donation amount, fill in your details, and proceed with the payment.
                            We offer various payment methods to ensure that your donation process is as seamless as possible.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Will my Donation be Used?</AccordionTrigger>
                        <AccordionContent>
                            Your donation will go directly towards the cause you choose to support.
                            We are committed to transparency and ensuring that every contribution makes a meaningful impact.
                            While our detailed allocation reports are a work in progress, rest assured that we are working diligently to provide you with clear insights into how your donations are making a difference.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can I setup a recurring Donation?</AccordionTrigger>
                        <AccordionContent>
                            We’re excited to let you know that recurring donations are a feature we’re actively working on! Soon, you’ll be able to set up automatic donations on a schedule that suits you,
                            making it easier than ever to support the causes you care about consistently.
                            Stay tuned for updates as we continue to enhance this feature.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
