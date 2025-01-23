import location from "../../assets/location-icon.svg";
import email from "../../assets/email-icon.svg";
import phone from "../../assets/phone-icon.svg";
import twitter from "../../assets/twitter-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import instagram from "../../assets/instagram-icon.svg";
import youtube from "../../assets/youtube-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-[5rem] py-[3.5rem]">
      <div className="eddyContainer flex flex-col-reverse md:flex-row">
        <div className="flex-1 mt-[2.5rem] md:mt-0 w-3/4">
          <div className="md:w-3/4">
            <h2 className="poppins-bold">Get connected</h2>
            <br />
            <p className="text-[12px] poppins-extralight w-fit">
              Join the conversation on social, and stay connected with our
              latest events and partners around the world.
            </p>
            <br />
            <div className="flex flex-row justify-between w-[60%] md:w-[40%]">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={twitter}
                  className="h-[25px] md:h-[30px] w-[25px] md:w-[30px]"
                  alt="twitter"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={facebook}
                  className="h-[25px] md:h-[30px] w-[25px] md:w-[30px]"
                  alt="facebook"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={instagram}
                  className="h-[25px] md:h-[30px] w-[25px] md:w-[30px]"
                  alt="instagram"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={youtube}
                  className="h-[25px] md:h-[30px] w-[25px] md:w-[30px]"
                  alt="youtube"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="poppins-bold">Contact</h2>
          <br />
          <p className="text-[12px] poppins-thin">
            <img
              src={location}
              className="h-[15px] md:h-[20px] w-[15px] md:w-[20px] inline"
              alt="location"
            />
            &nbsp; Ojay Street, Kreg Ave, Lagos, Nigeria
          </p>
          <br />
          <p className="text-[12px] poppins-thin">
            <img
              src={email}
              className="h-[15px] md:h-[20px] w-[15px] md:w-[20px] inline"
              alt="email"
            />
            &nbsp; ZerohungerNg@awareness.com
          </p>
          <br />
          <p className="text-[12px] poppins-thin">
            <img
              src={phone}
              className="h-[15px] md:h-[20px] w-[15px] md:w-[20px] inline"
              alt="phone"
            />
            &nbsp; 081XXXXXXXX | 090XXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
