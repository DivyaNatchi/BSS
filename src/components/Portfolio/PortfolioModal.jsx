// PortfolioModal.jsx
import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function PortfolioModal({
  modalOpen,
  toggleModal,
  selectedProject,
}) {
  return (
    <Modal isOpen={modalOpen} toggle={() => toggleModal()} className="modal-lg">
      <ModalHeader toggle={() => toggleModal()}>
        {selectedProject?.description}
      </ModalHeader>
      <ModalBody>
        <img
          src={selectedProject?.image}
          alt={selectedProject?.title}
          className="img-fluid mb-3"
        />
        {selectedProject?.details.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={() => toggleModal()}
          className="btn-portfolio_close"
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
