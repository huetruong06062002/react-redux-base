import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";
import { deletQuizForAdmin } from "../../../../services/userServices";

const ModalDeleteQuiz = (props) => {
  const { show, setShow, dataDelete, fetchQuiz } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitDeleteUser = async () => {
    //call apis
    let data = await deletQuizForAdmin(dataDelete.id);
    console.log("component res: ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await fetchQuiz();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      handleClose();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <p>
              <p>Are you sure delete </p> 
              <p style={{ color: "red" }}> {dataDelete.name}?</p>
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmitDeleteUser(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalDeleteQuiz;
