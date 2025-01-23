import ceo from "../assets/ceo.svg";
import founder from "../assets/founder.svg";
import coo from "../assets/coo.svg";
import Card from "./ui/card";
import { randomNumber } from "../lib";

const OurCoreTeam = () => {
  const cardDetails = [
    {
      visual: { image: ceo },
      header: { name: "Fidelis Phoebe", title: "MD & CEO" },
      body: "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    },
    {
      visual: { image: founder },
      header: { name: "Onyekachi James", title: "Founder & Chairman" },
      body: "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    },
    {
      visual: { image: coo, bg: "bg-[#c9c9c9]" },
      header: { name: "Temitope Joshua", title: "Chief Operating Officer" },
      body: "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    },
  ];

  return (
    <div className="mt-[4rem] md:mt-[7rem]">
      <div className="relative text-center flex flex-col items-center">
        <h1 className="poppins-bold text-[1.4rem] md:text-[1.7rem]">
          Our <span className="text-[#CE7C02]">Core</span> Team
        </h1>

        {/* <img
          src={elipse1}
          className="absolute w-[700px] h-[120%] z-[-10]"
          alt="anything"
        />
        <img
          src={elipse2}
          className="absolute top-[5%] right-[20%] w-[700px] h-[120%] z-[-10]"
          alt="anything"
        /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:w-[60%] mt-[3rem] md:mt-[4rem]">
          {cardDetails.map((value, i) => (
            <Card
              key={randomNumber()}
              style={`eddyContainerFull w-[250px] flex flex-col items-center ${
                i === 1 ? "md:mt-[20%]" : ""
              }`}
              visual={
                <div className="execImg w-full rounded-t-[1rem]">
                  <img
                    src={value?.visual?.image}
                    className="shadow-lg w-full rounded-t-[1rem]"
                    alt="anything"
                  />
                </div>
              }
              header={
                <div className="shadow-lg bg-[#000000] w-full text-white pb-[2.5rem]">
                  <div className="eddyContainer">
                    <h1 className="poppins-semibold my-[1.5rem]">
                      {value?.header?.name}
                    </h1>
                    <h1 className="poppins-semibold my-[1.5rem] text-[#E7B161]">
                      {value?.header?.title}
                    </h1>
                    <p className="poppins-light text-[12px]">{value?.body}</p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCoreTeam;
