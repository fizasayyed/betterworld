import Donation from "@/components/donation/donation";
import Footer from "@/components/footer/footer";
import ImageArea from "@/components/imagearea/imagearea";
import { MenubarDemo } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <MenubarDemo />
      <ImageArea />
      <Donation />
      <Footer />
    </>
  );
}
