import Donation from "@/components/donation/donation";
import Footer from "@/components/footer/footer";
import ImageArea from "@/components/imageArea/imageArea";
import { MenubarDemo } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <div className="top-0 sticky">
        <MenubarDemo />
      </div><ImageArea />
      <Donation />
      <Footer />
    </>
  );
}
