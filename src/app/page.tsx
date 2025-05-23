import About from "./sections/About";
import Booking from "./sections/Booking";
import Contact from "./sections/Contact";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import { Menu } from "./sections/Menu";
import WhyUs from "./sections/WhyUs";
export default function Home() {
  return (
    <>
    <Hero />
    <main id="main">
      <About/>
      <WhyUs/>
      <Menu/>
      <Events/>
      <Booking/>
      <Gallery/>
      <Contact/>
    </main>
    </>
  );
}
