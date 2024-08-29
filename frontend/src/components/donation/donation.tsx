/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Donation() {
    return (
        <div className="flex flex-col items-center px-10 mt-10">
            <div className="flex">
                <p className="text-[80px] text-gray-700 font-semibold">
                    Select Your Donation
                </p>
            </div>
            <div className="flex justify-between px-10 mt-8 w-full max-w-8xl">
                {[10, 25, 50, 100].map((amount) => (
                    <Card key={amount} className="w-[350px]">
                        <CardHeader>
                            <CardTitle>₹ {amount}</CardTitle>
                            <CardDescription>Make an impact with your donation.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor={`amount-${amount}`}><strong>UPI ID</strong></Label>
                                        <Input id="upi_id" placeholder="Please Enter UPI ID" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button size="sm" className="font-semibold text-gray-700">Donate</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="w-full max-w-8xl mt-10 px-20">
                <Accordion type="single" collapsible className="font-semibold text-2xl mt-20 w-full max-w-8xl">
                    <p className="w-full text-4xl mb-2 fonts-extrabold text-gray-700">Frequently Asked</p>
                    <p className="w-full text-4xl mb-5 fonts-extrabold text-gray-700">Questions.</p>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How can I make donations?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Will my Donation be Used?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can I setup a recurring Donation?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
