import Button from "./button";

const Hero = () => {
  return (
    <div className="hero-bg flex flex-col justify-center items-center">
      <div className="eddyContainer text-center text-white md:text-left">
        <h1 className="text-[1.7rem] md:text-[2rem] poppins-bold">
          Unlocking Potential, <br />
          Transforming Futures
        </h1>
        <div className="w-full md:w-1/2 pt-4 text-[12px]">
          <p className="w-fit poppins-extralight">
            Your support helps us empower disadvantaged youths through
            education, entrepreneurship, and skills development. Every donation
            brings us closer to bridging the gap between potential and
            opportunity, building resilient young leaders.
          </p>

          <Button text="Discover More" style={{ others: "shadow-2xl mt-6 rounded-full" }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
