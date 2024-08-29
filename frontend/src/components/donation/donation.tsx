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

export default function Donation() {
    return (
        <div className="flex flex-col items-center px-10 mt-10">
            <div className="flex">
                <p className="text-[80px] text-gray-700 font-semibold">
                    Select Your Donation
                </p>
            </div>
            <div className="flex justify-between mt-8 w-full max-w-7xl">
                {[10, 50, 100].map((amount) => (
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
                            <Button size="default" className="font-semibold text-gray-700">Donate</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
