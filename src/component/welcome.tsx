import Card from "./ui/card";
import support from "../assets/donate-logo.svg";
import prayer from "../assets/prayer-logo.svg";
import volunteer from "../assets/volunteer-icon.svg";
import donate from "../assets/iconoir_donate.svg";
import { randomNumber } from "../lib";

const Welcome = () => {
  const cardDetails = [
    {
      visual: { image: support, bg: "bg-[#e3f0e0]" },
      header: "Support",
      body: "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    },
    {
      visual: { image: prayer, bg: "bg-[#c6c1a9]" },
      header: "Prayers",
      body: "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    },
    {
      visual: { image: volunteer, bg: "bg-[#c9c9c9]" },
      header: "Volunteer",
      body: "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    },
    {
      visual: { image: donate, bg: "bg-[#d6c1c1]" },
      header: "Donations",
      body: "Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.",
    },
  ];

  return (
    <div className="eddyContainer mt-[3.5rem] text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[85%] md:w-1/2">
          <h4 className="text-[12px] poppins-light">
            WELCOME TO Youteens Empowerment Foundation (YEF)
          </h4>
          <br />
          <h2 className="poppins-bold text-[1.2rem] md:text-[1.5rem]">
            Together, we can unlock potential and create{" "}
            <span className="text-red-600">opportunities</span> for the next
            generation of young leaders.
          </h2>
        </div>
      </div>
      <div className="eddyContainer grid grid-cols-1 md:grid-cols-4 gap-6 my-[4rem]">
        {cardDetails.map((value) => (
          <Card
            key={randomNumber()}
            style="relative eddyContainer flex flex-col items-center"
            visual={
              <>
                {/* {i < 3 && (
                  <div className="absolute top-0 -translate-y-[0%] right-0 h-[70%] w-[0.1rem] md:bg-[#E5E5E5]"></div>
                )} */}
                <div
                  className={`${value?.visual?.bg} flex flex-col justify-center items-center h-[100px] w-[50%] rounded-full shadow-md`}
                >
                  <img
                    src={value?.visual?.image}
                    className="h-[35px] md:h-[40px] w-[35px] md:w-[40px]"
                    alt="anything"
                  />
                </div>
              </>
            }
            header={
              <h1 className="poppins-semibold my-[1.5rem]">{value?.header}</h1>
            }
            body={<p className="poppins-light">{value?.body}</p>}
          />
        ))}
      </div>
    </div>
  );
};

export default Welcome;
