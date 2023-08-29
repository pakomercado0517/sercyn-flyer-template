/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import { TbMailStar } from "react-icons/tb";
import { SiWhatsapp } from "react-icons/si";

// eslint-disable-next-line react/prop-types
function ButtonContact({ buttonType, data }) {
  const createButton = () => {
    if (buttonType === "mail") {
      return (
        <Button>
          <a
            href={`mailto:reservaciones@hotelroyalgarden.mx?subject=Consulta%20de%20reservaci%C3%B3n%20desde%20la%20Web&body=Hola%2C%20solicito%20informaci%C3%B3n%20acerca%20de%20su%20servicio%20de%3A%0D%0A%0D%0A-%20Servicio%3A%20${data.service}%0D%0A-%20Fecha%3A%20${data.date}%0D%0A%0D%0ADejo%20mi%20n%C3%BAmero%20de%20tel%C3%A9fono%20para%20que%20por%20ese%20medio%20tambi%C3%A9n%20se%20me%20pueda%20ser%20contactado%20para%20recibir%20la%20informaci%C3%B3n%20que%20requiero.%20${data.phone_number}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <TbMailStar className="mr-3" />
            Enviar Email
          </a>
        </Button>
      );
    }
    if (buttonType === "whatsapp") {
      return (
        <Button>
          <a
            href={`https://api.whatsapp.com/send?phone=5219381596404&text=Hola%2C%20requiero%20informaci%C3%B3n%20a%20la%20${data.destination}%20para%20${data.persons}%20%20personas%20el%20d%C3%ADa%${data.date}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <SiWhatsapp className="mr-3" />
            Enviar Whatsapp
          </a>
        </Button>
      );
    }
  };
  return <>{createButton()}</>;
}

export default ButtonContact;
