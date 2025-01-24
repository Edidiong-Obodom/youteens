import location from "../../assets/location-icon.svg";
import email from "../../assets/email-icon.svg";
import phone from "../../assets/phone-icon.svg";
// import twitter from "../../assets/twitter-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import instagram from "../../assets/instagram-icon.svg";
import whatsapp from "../../assets/whatsapp-no-bg.png";
// import youtube from "../../assets/youtube-icon.svg";

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
            <div className="flex flex-row w-[60%] md:w-[40%]">
              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={twitter}
                  className="h-[25px] md:h-[30px] w-[25px] md:w-[30px]"
                  alt="twitter"
                />
              </a> */}
              <a
                href="https://web.facebook.com/youteens.empower.foundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  className="h-[25px] md:h-[30px] w-[25px] md:w-[30px]"
                  alt="facebook"
                />
              </a>
              <a
                className="ml-3"
                href="https://wa.me/qr/VBB5GN5NLDDNF1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={whatsapp}
                  className="h-[25px] md:h-[30px] w-[25px] md:w-[30px]"
                  alt="whatsapp"
                />
              </a>
              <a
                className="ml-3"
                href="https://www.instagram.com/youteens_empower_foundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  className="h-[25px] md:h-[30px] w-[25px] md:w-[30px]"
                  alt="instagram"
                />
              </a>
              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={youtube}
                  className="h-[25px] md:h-[30px] w-[25px] md:w-[30px]"
                  alt="youtube"
                />
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="poppins-bold">
            <a
              href="https://wa.me/qr/VBB5GN5NLDDNF1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </h2>
          <br />
          <p className="text-[12px] poppins-thin">
            <a
              href="https://www.google.com/maps/search/State+housing+calabar,+cross+river%C2%A0state/@4.9789132,8.2445996,11.52z?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={location}
                className="h-[15px] md:h-[20px] w-[15px] md:w-[20px] inline"
                alt="location"
              />
              &nbsp; State housing calabar, cross river state
            </a>
          </p>
          <br />
          <p className="text-[12px] poppins-thin">
            <a href="mailto:youteensempowerfoundation@gmail.com">
              <img
                src={email}
                className="h-[15px] md:h-[20px] w-[15px] md:w-[20px] inline"
                alt="email"
              />
              &nbsp; youteensempowerfoundation@gmail.com
            </a>
          </p>
          <br />
          <p className="text-[12px] poppins-thin">
            <a href="tel:+2349027964293">
              <img
                src={phone}
                className="h-[15px] md:h-[20px] w-[15px] md:w-[20px] inline"
                alt="phone"
              />
              &nbsp; 09027964293
            </a>{" "}
            | <a href="tel:+2347036202633">07036202633</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
