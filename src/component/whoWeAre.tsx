import child from "../assets/child-hungry.svg";
import Button from "./ui/button";
import dot from "../assets/dot-dot.svg";

const WhoWeAre = () => {
  return (
    <div className="eddyContainer flex flex-col-reverse md:flex-row mt-[4rem] md:mt-[7rem]">
      <div className="flex-1 mt-[3rem] md:mt-0">
        <img
          src={dot}
          className="absolute left-[-10%] -translate-y-[5%] md:-translate-y-[10%] h-[250px] md:h-[300px] w-[250px] md:w-[400px]"
          alt="child"
        />
        <img
          src={child}
          className="h-[250px] md:h-[400px] w-[250px] md:w-[400px]"
          alt="child"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center poppins-light">
        <h2 className="poppins-bold text-[1.4rem] md:text-[1.7rem]">
          <span className="text-[#CE7C02]">Who</span> We Are
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
        <br />
        <div>
          <Button
            text="Discover More"
            navigateTo="/about"
            style={{ others: "shadow-2xl rounded-full poppins-semibold" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
