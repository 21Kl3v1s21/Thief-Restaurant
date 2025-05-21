import About from "./sections/About";
import Booking from "./sections/Booking";
import Events from "./sections/Events";
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
    </main>
    </>
  );
}
