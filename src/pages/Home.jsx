import { useState } from "react";
import WelcomeImage from "../components/WelcomeImage";
import DestinationsComponent from "../components/DestinationsComponent";
import WhatsappButton from "../components/WhatsappButton";
import ModalForm from "../components/ModalForm";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [buttonType, setButtonType] = useState("");

  const handleOpenModal = (type) => {
    setOpenModal(true);
    setButtonType(type);
  };

  const closeModal = () => setOpenModal(false);

  return (
    <section>
      <WelcomeImage />
      <DestinationsComponent />
      <div
        className="fixed right-8 bottom-28"
        onClick={() => handleOpenModal("whatsapp")}
      >
        <WhatsappButton />
      </div>
      {/* <div
        className="fixed right-8 bottom-8"
        onClick={() => handleOpenModal("mail")}
      >
        <MailButton />
      </div> */}
      <ModalForm
        openModal={openModal}
        closeModal={closeModal}
        buttonType={buttonType}
      />
    </section>
  );
}

export default Home;
