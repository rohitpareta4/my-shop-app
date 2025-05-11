// import Image from "next/image";
// import header from "./components/Header/header";
import HeroSection from "./Contents/Home/Herosection";
// import ServicesSection from "./Contents/Home/ServicesSection";
import OurServices from "./Contents/Home/OurServices";
import Contact from "./Contents/Home/Contact";
import Reviews from "./Contents/Home/Reviews";

export default function Home() {
  return (
   <div className="">
      <HeroSection/>
      <OurServices/>
      <Contact/>
      <Reviews/>
    </div>
  );
}
