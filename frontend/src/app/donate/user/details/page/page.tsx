"use client"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormDescription } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MenubarDemo } from "@/components/navbar/navbar";
import { StepProgressBar } from "@/components/ui/progressbar";
import { useFormStore } from "@/lib/useFormStore";
import Footer from "@/components/footer/footer";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email("Invalid UPI ID")
});

export default function PaymentsPage() {
    const currentStep = 2; // For progress bar
    const router = useRouter();
    const { updateName, updateEmail } = useFormStore();

    // Retrieve name, email from the state if any
    const { name, email } = useFormStore((state) => ({
        name: state.name,
        email: state.email,
    }));

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: name || "",
            email: email || ""
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Update Zustand store with form values
        updateName(values.name);
        updateEmail(values.email);

        router.push('/donate/payment/stripe');
        // console.log(values);
    }

    const { register, handleSubmit, formState: { errors } } = form;

    return (
        <>
            <div className="overflow-y-hidden">
                <MenubarDemo />
            </div>
            <div className="flex flex-col items-center justify-top py-10">
                <h2 className="text-xl font-bold mb-6 text-center">
                    Tell Us More About Yourself
                </h2>
                <div className="w-full max-w-md mt-8">
                    <Card className="mx-auto p-10">
                        <div className="w-full max-w-md pb-8">
                            <StepProgressBar currentStep={currentStep} />
                        </div>
                        <Form {...form}>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <Label
                                        htmlFor="name"
                                        className="block text-md font-bold text-gray-700">
                                        Name
                                    </Label>
                                    <Input
                                        id="name" {...register("name")}
                                        type="text"
                                        className="mt-1 block max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <FormDescription className="text-red-500 font-sm mt-1">
                                            {errors.name.message}
                                        </FormDescription>
                                    )}
                                    <Label
                                        htmlFor="email"
                                        className="block text-md font-bold text-gray-700">
                                        Email
                                    </Label>
                                    <Input
                                        id="email" {...register("email")}
                                        type="text"
                                        className="mt-1 block max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                        placeholder="Your email"
                                    />
                                    {errors.email && (
                                        <FormDescription className="text-red-500 font-sm mt-1">
                                            {errors.email.message}
                                        </FormDescription>
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    <Button
                                        type="submit"
                                        className="px-4 py-2 text-black font-semibold rounded-md mt-4">
                                        Proceed to Payment
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
            <Footer />
        </>

    )
}