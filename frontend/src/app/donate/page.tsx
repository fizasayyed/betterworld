"use client"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MenubarDemo } from "@/components/navbar/navbar";
import { StepProgressBar } from "@/components/ui/progressbar";
import { useFormStore } from "@/lib/useFormStore";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
});

export default function DetailsPage() {
    const currentStep = 1; // For progress bar
    const router = useRouter();
    const { updateName, updateEmail } = useFormStore();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: ""
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Update Zustand store with form values
        updateName(values.name);
        updateEmail(values.email);

        router.push('/donate/payment/details');
        console.log(values);
    }

    const { register, handleSubmit, formState: { errors } } = form;

    return (
        <><div><MenubarDemo /></div>
            <div className="flex">
                <div className="w-1/4 p-5">
                <StepProgressBar currentStep={currentStep} />
                </div>
                <div className="flex-1 pl-10 pr-5">
                    <h2 className="text-2xl font-bold mb-6">Tell Us More About Yourself</h2>
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <Label
                                    htmlFor="name"
                                    className="block text-sm font-bold text-gray-700">Name</Label>
                                <Input
                                    id="name" {...register("name")}
                                    type="text"
                                    className="mt-1 block max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                    placeholder="Your name" />
                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </div>
                            <div>
                                <Label
                                    htmlFor="email"
                                    className="block text-sm font-bold text-gray-700">Email Address</Label>
                                <Input
                                    id="email" {...register("email")}
                                    type="text"
                                    className="mt-1 block max-w-md px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                    placeholder="Your email address" />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="px-4 py-2 text-black font-semibold rounded-md">Proceed</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div></>
    )
}