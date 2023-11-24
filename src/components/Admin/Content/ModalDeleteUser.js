import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";
import { deleteUser } from "../../../services/userServices";

const ModalDeleteUser = (props) => {
  const { show, setShow, dataUpdate } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitDeleteUser = async () => {
    //call apis
    let data = await deleteUser(dataUpdate.id);
    console.log("component res: ", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // await props.fetchAllUsers();
      props.setCurrentPage(1);
      await props.fetchAllUsersWithPaginate(1);
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
            Are you sure delete{" "}
            <p style={{ color: "red" }}> {dataUpdate.email}?</p>
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
export default ModalDeleteUser;
