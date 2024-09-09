"use client"
import { Card } from "@/components/ui/card";
import { MenubarDemo } from "@/components/navbar/navbar";
import { StepProgressBar } from "@/components/ui/progressbar";
import SignIn from "@/components/signinform/signin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Footer from "@/components/footer/footer";

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
                        <div className="flex justify-center">
                            {status === "unauthenticated" ? (
                                <SignIn />
                            ) : (
                                <p>Redirecting to payment details...</p>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}
