import { useEffect } from "react";
import Footer from "../component/layout/footer";
import Navbar from "../component/layout/navbar";
import Hero from "../component/ui/hero";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />
      <Hero
        title={
          <h1 className="text-[1.7rem] md:text-[2rem] poppins-bold">
            About Us
          </h1>
        }
        text="Youteens Empowerment Foundation (YEF) is a youth-led non-profit organization founded to empower disadvantaged youths and teenagers through education, entrepreneurship, and skills development."
      />
      <main className="mt-[5rem] eddyContainer poppins-light">
        <h2 className="text-[1.4rem] md:text-[1.7rem] poppins-bold">
          Youteens Empowerment Foundation (YEF)
        </h2>
        <br />
        <p>
          Youteens Empowerment Foundation (YEF) is a youth-led non-profit
          organization founded to empower disadvantaged youths and teenagers
          through education, entrepreneurship, and skills development.
        </p>
        <br />
        <p>
          We are committed to bridging the gap between potential and
          opportunity, helping marginalized and underprivileged young people
          unlock their potential, transform their futures, and thrive as
          innovative, resilient, and globally competitive leaders.
        </p>
        <div className="mt-[5rem]">
          <h2 className="poppins-bold text-[1.4rem] md:text-[1.7rem]">
            <span className="text-[#CE7C02]">Vision</span> Statement
          </h2>
          <br />
          <p>
            A world where every young person has access to quality education,
            economic opportunities, and the support needed to thrive.
          </p>
        </div>
        <div className="mt-[5rem]">
          <h2 className="poppins-bold text-[1.4rem] md:text-[1.7rem]">
            Objectives
          </h2>
          <br />
          <ul className="list-disc list-inside">
            <li>
              Provide educational support and resources to disadvantaged youths.
            </li>
            <li>
              Foster entrepreneurship and economic empowerment among young
              people.
            </li>
            <li>
              Promote community engagement, leadership, and civic
              responsibility.
            </li>
            <li>Build partnerships with stakeholders to amplify impact.</li>
          </ul>
        </div>
        <div className="mt-[5rem]">
          <h2 className="poppins-bold text-[1.4rem] md:text-[1.7rem]">
            Core <span className="text-[#CE7C02]">Values</span>
          </h2>
          <br />
          <ul className="list-disc list-inside">
            <li>Youth Empowerment</li>
            <li>Education for All</li>
            <li>Entrepreneurial Spirit</li>
            <li>Community Engagement</li>
            <li>Inclusivity and Diversity</li>
          </ul>
        </div>
        <div className="mt-[5rem]">
          <h2 className="poppins-bold text-[1.4rem] md:text-[1.7rem]">
            Programs <span className="text-[#CE7C02]">and</span> Services
          </h2>
          <br />
          <ol className="list-decimal list-inside">
            <li>
              Education and Skills Development:
              <br />
              <div className="eddyContainer mb-[1rem]">
                <div>- Scholarships</div>
                <div>- Mentorship</div>
                <div>- Vocational training</div>
                <div>- Literacy programs</div>
              </div>
            </li>
            <li>
              Entrepreneurship and Economic Empowerment:
              <br />
              <div className="eddyContainer mb-[1rem]">
                <div>- Business training</div>
                <div>- Access to funding</div>
                <div>- Mentorship</div>
                <div>- Incubation programs</div>
              </div>
            </li>
            <li>
              Community Engagement and Leadership:
              <br />
              <div className="eddyContainer">
                <div>- Volunteer opportunities</div>
                <div>- Leadership training</div>
                <div>- Community projects</div>
                <div>- Advocacy initiative</div>
              </div>
            </li>
          </ol>
        </div>
        <div className="mt-[5rem]">
          <h2 className="poppins-bold text-[1.4rem] md:text-[1.7rem]">
            <span className="text-[#CE7C02]">Target</span> Audience
          </h2>
          <br />
          <p>
            Disadvantaged youths and teenagers (ages 13-35) from marginalized
            communities.
          </p>
        </div>
        <div className="mt-[5rem]">
          <h2 className="poppins-bold text-[1.4rem] md:text-[1.7rem]">
            Unique Selling <span className="text-[#CE7C02]">Proposition</span>{" "}
            (USP)
          </h2>
          <br />
          <p>
            Empowering youths to become change-makers, entrepreneurs, and
            leaders, driving community transformation and global success.
          </p>
        </div>
        <div className="mt-[5rem]">
          <h2 className="poppins-bold text-[1.4rem] md:text-[1.7rem]">
            Geographic <span className="text-[#CE7C02]">Reach</span>
          </h2>
          <br />
          <p>National and international, with a focus on Africa.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
