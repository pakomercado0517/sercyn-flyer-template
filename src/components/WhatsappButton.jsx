import { SiWhatsapp } from "react-icons/si";

function WhatsappButton() {
  return (
    <div className="w-14 h-14 hover:w-56 hover:rounded-lg rounded-full bg-green-500 shadow-md shadow-green-600 flex justify-center items-center group">
      <div>
        <SiWhatsapp className="group-hover:hidden text-3xl text-white" />
        <h3 className="hidden group-hover:inline text-white text-lg cursor-pointer">
          Envíanos un mensaje
        </h3>
      </div>
    </div>
  );
}

export default WhatsappButton;
