import { useState } from "react";
import { Navbar, Dropdown } from "flowbite-react";
import sercynLogo from "../assets/logo_sercyn_final.webp";
import { Link } from "react-router-dom";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import ModalForm from "./ModalForm";

function SercynNavbar() {
  const [openModal, setOpenModal] = useState(false);
  const [buttonType, setButtonType] = useState("");

  const handleOpenModal = (type) => {
    setOpenModal(true);
    setButtonType(type);
  };

  const closeModal = () => setOpenModal(false);

  return (
    <section className="absolute z-10 w-screen text-white">
      <Navbar fluid rounded className="bg-transparent">
        <Navbar.Brand href="/">
          <img src={sercynLogo} alt="logo" className="mr-3 h-6 sm:h-9" />
          <span>Náutica SerCyn</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle className="text-white" />
        </div>
        <Navbar.Collapse className="bg-[rgba(0,0,60,0.7)] rounded-lg p-3 md:bg-transparent">
          <Link to="/">Inicio</Link>
          <Link>Destinos</Link>
          <Dropdown inline label="Reservaciones">
            <Dropdown.Item onClick={() => handleOpenModal("mail")}>
              <MdOutlineMarkEmailRead className="mr-3" /> Email
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleOpenModal("whatsapp")}>
              <BsWhatsapp className="mr-3" /> Whatsapp
            </Dropdown.Item>
          </Dropdown>
          <Dropdown inline label="Redes Sociales">
            <a
              href="https://instagram.com/sercyn13?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer"
            >
              <Dropdown.Item>
                <BsInstagram className="mr-3" /> Instagram
              </Dropdown.Item>
            </a>
            <a
              href="https://www.facebook.com/sercyn13"
              target="_blank"
              rel="noreferrer"
            >
              <Dropdown.Item>
                <BsFacebook className="mr-3" /> Facebook
              </Dropdown.Item>
            </a>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
      <ModalForm
        openModal={openModal}
        closeModal={closeModal}
        buttonType={buttonType}
      />
    </section>
  );
}

export default SercynNavbar;
