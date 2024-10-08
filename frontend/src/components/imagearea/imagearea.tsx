/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation';

export default function ImageArea() {
    const router = useRouter();
    return (
        <><div className="relative mx-10">
            <AspectRatio ratio={16 / 6} className="rounded-2xl overflow-hidden">
                <Image
                    src="/images/tree1.jpg"
                    alt="Tree photo"
                    fill
                    className="h-full w-full object-cover" />
            </AspectRatio>
            <div className="absolute bottom-5 left-5 flex items-end">
                <h1 className="text-[240px] leading-none text-white font-extrabold">Fund</h1>
                <div className="flex flex-col ml-3 mb-5">
                    <h1 className="text-6xl text-white leading-none font-bold">Help</h1>
                    <h1 className="text-6xl text-white leading-none font-bold">Others</h1>
                </div>
            </div>
            <Button
                onClick={() => router.push('/donate')}
                size="xl"
                className="absolute bottom-10 right-10 text-lg font-semibold text-gray-700">
                Start Donating Today
            </Button>
        </div>
            <div className="flex row px-10 py-10 text-xl items-center">
                <p className="max-w-8xl px-10 text-xl font-semibold text-gray-700 text-center leading-loose">In a world facing the pressing threat of climate change, every action counts.
                    By supporting our green environment activism, you're directly contributing to a healthier planet for future generations.
                    Your donation will help fund vital initiatives such as reforestation projects,
                    renewable energy research, and educational programs that promote sustainable living.
                    Together, we can create a sustainable future where humans and nature coexist harmoniously.</p>
            </div>
        </>
    );
}
