import Filler from "../component/filler";
import Footer from "../component/layout/footer";
import Navbar from "../component/layout/navbar";
import OurCoreTeam from "../component/ourCoreTeam";
import Hero from "../component/ui/hero";
import Welcome from "../component/welcome";
import WhoWeAre from "../component/whoWeAre";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <WhoWeAre />
      <OurCoreTeam />
      <Filler />
      <Footer />
    </>
  );
};

export default Home;
