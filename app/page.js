// import Image from "next/image";
// import header from "./components/Header/header";
import HeroSection from "./Contents/Home/Herosection";
// import ServicesSection from "./Contents/Home/ServicesSection";
import OurServices from "./Contents/Home/OurServices";
import Contact from "./Contents/Home/Contact";
import Page from "./Contents/feedback/page";
import DisplayFeedback from "./Contents/feedback/DisplayFeedback";

export default function Home() {
  return (
   <div className="">
      <HeroSection/>
      <OurServices/>
      <Contact/>
      <Page/>
      <DisplayFeedback/>
    </div>
  );
}
