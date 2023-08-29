import { useState, useEffect } from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import logo from "../assets/logo_sercyn_final.webp";

function SercynFooter() {
  const [year, setYear] = useState();

  useEffect(() => {
    const newYear = new Date().getFullYear();
    setYear(newYear);
  }, []);

  return (
    <section>
      <Footer className="mt-12 p-5 bg-customGray">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="ml-4 flex">
              <Footer.Brand alt="SerCyn Logo" href="/" src={logo} />
              <h3 className="text-2xl text-white">Náutica SerCyn</h3>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-items-start">
            <Footer.Copyright
              className="text-white"
              by="Náutica SerCyn™"
              href="#"
              year={year}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center md:ml-52">
              <Footer.Icon
                href="https://www.facebook.com/sercyn13"
                target="_blank"
                icon={BsFacebook}
                className="text-white"
              />
              <Footer.Icon
                href="https://instagram.com/sercyn13?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                icon={BsInstagram}
                className="text-white"
              />
              <Footer.Icon
                href="callto:+527831046697"
                target="_blank"
                icon={TbPhoneCall}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </Footer>
    </section>
  );
}

export default SercynFooter;
