"use client"
import { Card } from "@/components/ui/card";
import { MenubarDemo } from "@/components/navbar/navbar";
import { StepProgressBar } from "@/components/ui/progressbar";
import Image from "next/image";
import SignIn from "@/components/signinform/signin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DetailsPage() {
    const currentStep = 1; // For progress bar
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/donate/payment/details");
        }
    }, [status, router]);

    return (
        <>
            <div className="overflow-y-hidden">
                <MenubarDemo />
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
                        <Card className="flex justify-center max-w-[400px] p-10">
                            {status === "unauthenticated" ? (
                                <SignIn />
                            ) : (
                                <p>Redirecting to payment details...</p>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
