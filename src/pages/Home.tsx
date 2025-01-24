import { useEffect } from "react";
import Filler from "../component/filler";
import Footer from "../component/layout/footer";
import Navbar from "../component/layout/navbar";
import OurCoreTeam from "../component/ourCoreTeam";
import Hero from "../component/ui/hero";
import Welcome from "../component/welcome";
import WhoWeAre from "../component/whoWeAre";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />
      <Hero
        title={
          <h1 className="text-[1.7rem] md:text-[2rem] poppins-bold">
            Unlocking Potential, <br />
            Transforming Futures
          </h1>
        }
        button={{ text: "Discover More", action: "/about" }}
        text="Your support helps us empower disadvantaged youths through
            education, entrepreneurship, and skills development. Every donation
            brings us closer to bridging the gap between potential and
            opportunity, building resilient young leaders."
      />
      <Welcome />
      <WhoWeAre />
      <OurCoreTeam />
      <Filler />
      <Footer />
    </>
  );
};

export default Home;
