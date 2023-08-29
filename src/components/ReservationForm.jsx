import { useState } from "react";
import { TextInput, Label, Select } from "flowbite-react";
import ButtonContact from "./ButtonContact";

// eslint-disable-next-line react/prop-types
function ReservationForm({ buttonType }) {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <form>
        <div className="md:grid md:grid-cols-2 md:space-x-2 md:grid-flow-col">
          <div>
            <Label htmlFor="destination" value="Servicio a Reservar" />
            <Select id="destination" onChange={handleChange} name="destination">
              <option>Selecciona un Destino</option>
              <option value="Isla de Lobos">Isla de Lobos</option>
              <option value="Arrecifes Coralinos">Arrecifes Coralinos</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="phone_number" value="Numero de Teléfono" />
            <TextInput
              type="number"
              name="phone_number"
              id="phone_number"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:space-x-2 md:grid-flow-col">
          <div>
            <Label htmlFor="date" value="Fecha a Reservar" />
            <TextInput
              type="date"
              name="date"
              id="date"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label
              htmlFor="persons"
              value="Número de personas (máximo 8 personas)"
            />
            <TextInput
              type="number"
              name="persons"
              id="persons"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <ButtonContact buttonType={buttonType} data={data} />
        </div>
      </form>
    </section>
  );
}

export default ReservationForm;
