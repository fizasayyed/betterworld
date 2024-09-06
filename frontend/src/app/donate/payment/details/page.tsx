"use client"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form, FormDescription } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MenubarDemo } from "@/components/navbar/navbar";
import { StepProgressBar } from "@/components/ui/progressbar";
import { useFormStore } from "@/lib/useFormStore";
import Image from "next/image";

const formSchema = z.object({
    upi_id: z.string().email("Invalid UPI ID"),
});

export default function PaymentsPage() {
    const currentStep = 2; // For progress bar
    const router = useRouter();
    const { updateUPI } = useFormStore();

    // Retrieve name, email from the state if any
    const { upi_id } = useFormStore((state) => ({
        upi_id: state.upi_id,
    }));

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            upi_id: upi_id || ""
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Update Zustand store with form values
        updateUPI(values.upi_id);

        // router.push('/donate/payment/details');
        console.log(values);
    }

    const { register, handleSubmit, formState: { errors } } = form;

    return (
        <><div className="overflow-y-hidden"><MenubarDemo />
            <div className="absolute right-0 top-0 h-full w-1/3 z-20">
                <Image
                    className="h-full object-cover"
                    src="/images/garbage.jpg"
                    alt="Dirty bottles photo"
                    width={3976}
                    height={2892}
                />
            </div>
        </div>
            <div className="flex">
                <div className="w-1/4 p-5 mt-2">
                    <StepProgressBar currentStep={currentStep} />
                </div>
                <div className="flex-1 pl-20 pr-5 py-7">
                    <h2 className="text-xl font-bold mb-6">Tell Us More About Yourself</h2>
                    <div className="space-y-6">
                        <Card className="max-w-[400px] p-10">
                            <Form {...form}>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div>
                                        <Label
                                            htmlFor="upi_id"
                                            className="block text-md font-bold text-gray-700">UPI ID</Label>
                                        <Input
                                            id="upi_id" {...register("upi_id")}
                                            type="text"
                                            className="mt-1 block max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                            placeholder="Your UPI ID" />
                                        {errors.upi_id && <FormDescription className="text-red-500 font-sm mt-1">{errors.upi_id.message}</FormDescription>}
                                    </div>
                                    <div>
                                        {/* <Button
                                            type="submit"
                                            variant="outline"
                                            onClick={() => { router.push('/donate') }}
                                            className="px-4 py-2 mr-2 text-black font-semibold rounded-md mt-4">Previous</Button> */}
                                        <Button
                                            type="submit"
                                            className="px-4 py-2 text-black font-semibold rounded-md mt-4">Proceed to Payment</Button>
                                    </div>
                                </form>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}