import React from "react";
import { Modal } from "react-bootstrap";

const NewProject = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="new-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input type="text" placeholder="Project Name" className="modalForm" />
          <input
            type="password"
            placeholder="Project Password"
            className="modalForm"
          />
          <div className="modalOption">
            {" "}
            <button disabled type="submit" className="modalOpt">
              Create
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default NewProject;
