import { Modal } from "flowbite-react";
import ReservationForm from "./ReservationForm";

// eslint-disable-next-line react/prop-types
function ModalForm({ openModal, closeModal, buttonType }) {
  return (
    <section>
      <Modal show={openModal === true} onClose={closeModal}>
        <Modal.Header>Datos para reservar tu servicio</Modal.Header>
        <Modal.Body>
          <ReservationForm buttonType={buttonType} />
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default ModalForm;
