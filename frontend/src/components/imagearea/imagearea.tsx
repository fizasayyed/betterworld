import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "../ui/button"

export default function ImageArea() {
    return (
        <div className="relative mx-10">
            <AspectRatio ratio={16 / 6} className="rounded-2xl overflow-hidden">
                <Image
                    src="/images/donate1.jpg"
                    alt="Donation photo"
                    fill
                    className="h-full w-full object-cover" />
            </AspectRatio>
            <h1 className="absolute bottom-20 left-10 text-9xl text-white font-extrabold">Fund</h1>
            <Button size="xl" className="absolute bottom-10 right-10">Start Donating Today</Button>
        </div>
    )
}
