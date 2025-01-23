import Button from "./ui/button";

const Filler = () => {
  return (
    <div className="eddyContainer grid grid-cols-1 md:grid-cols-3 gap-6 mt-[4rem] md:mt-[7rem]">
      <div className="shadow-2xl volunteer-bg min-h-[250px] flex flex-col justify-center items-center">
        <div className="eddyContainer text-center text-white md:text-left">
          <h1 className="text-[1.3rem] md:text-[1.5rem] poppins-bold">
            Be Part of Something Big
          </h1>
          <div className="w-full pt-4">
            <p className="w-fit poppins-extralight">
              Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.
            </p>

            <Button text="Volunteer" style={{ others: "shadow-2xl mt-6 rounded-lg" }} />
          </div>
        </div>
      </div>
      <div className="shadow-2xl donate-bg min-h-[250px] flex flex-col justify-center items-center">
        <div className="eddyContainer text-center text-white md:text-left">
          <h1 className="text-[1.3rem] md:text-[1.5rem] poppins-bold">
            Support A Great Course
          </h1>
          <div className="w-full pt-4">
            <p className="w-fit poppins-extralight">
              Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.
            </p>

            <Button text="Donate" style={{ others: "shadow-2xl mt-6 rounded-lg" }} />
          </div>
        </div>
      </div>
      <div className="shadow-2xl volunteer-bg min-h-[250px] flex flex-col justify-center items-center">
        <div className="eddyContainer text-center text-white md:text-left">
          <h1 className="text-[1.3rem] md:text-[1.5rem] poppins-bold">
            We Are Open
          </h1>
          <div className="w-full pt-4">
            <p className="w-fit poppins-extralight">
              Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.
            </p>

            <Button
              text="Partner With Us"
              style={{ others: "shadow-2xl mt-6 rounded-lg" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filler;
