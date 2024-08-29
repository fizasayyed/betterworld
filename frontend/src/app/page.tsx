import Donation from "@/components/donation/donation";
import ImageArea from "@/components/imagearea/imagearea";
import { MenubarDemo } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <MenubarDemo />
      <ImageArea />
      <Donation />
    </>
  );
}
