import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "../ui/button";

export default function ImageArea() {
    return (
        <div className="relative mx-10">
            <AspectRatio ratio={16 / 6} className="rounded-2xl overflow-hidden">
                <Image
                    src="/images/donate1.jpg"
                    alt="Donation photo"
                    fill
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
            <div className="absolute bottom-5 left-5 flex items-end">
                <h1 className="text-[250px] leading-none text-white font-extrabold">Fund</h1>
                <div className="flex flex-col ml-3 mb-5">
                    <h1 className="text-6xl text-white leading-none font-bold">Help</h1>
                    <h1 className="text-6xl text-white leading-none font-bold">Others</h1>
                </div>
            </div>
            <Button size="xl" className="absolute bottom-10 right-10">
                Start Donating Today
            </Button>
        </div>
    );
}
