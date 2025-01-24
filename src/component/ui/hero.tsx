import React from "react";
import Button from "./button";

const Hero = ({
  title,
  text,
  button,
}: {
  title: React.ReactNode;
  text?: string;
  button?: { text: string; action?: string };
}) => {
  return (
    <div className="hero-bg flex flex-col justify-center items-center">
      <div className="eddyContainer text-center text-white md:text-left">
        {title}
        <div className="w-full md:w-1/2 pt-4 text-[12px]">
          {text && <p className="w-fit poppins-extralight">{text}</p>}
          {button && (
            <Button
              text={`${button.text}`}
              navigateTo={`${button.action}`}
              style={{ others: "shadow-2xl mt-6 rounded-full" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
