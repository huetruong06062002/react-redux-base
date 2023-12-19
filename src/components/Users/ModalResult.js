import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalResult = (props) => {
  const { show, setShow, dataModalResult } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitDeleteUser = () => {};
  console.log(dataModalResult);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="modal-show-result"
      >
        <Modal.Header closeButton>
          <Modal.Title>Your answer Result.....</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your answer correct: <b>{dataModalResult.countCorrect}</b>
          <br/>
          Your answer total: <b>{dataModalResult.countTotal}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => handleSubmitDeleteUser(e)}>
            Show Answer
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalResult;
