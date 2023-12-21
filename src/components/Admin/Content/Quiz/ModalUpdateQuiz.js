import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-toastify";
import _ from "lodash";
import { putUpdateQuizForAdmin } from "../../../../services/userServices";
import Select from "react-select";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ModalUpdateQuiz = (props) => {
  const { show, setShow, dataUpdate, setDataUpdate, fetchQuiz } = props;

  console.log(dataUpdate);
  const handleClose = () => {
    setShow(false);
    setDescription("");
    setDifficulty("");
    setQuizImage("");
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("EASY");
  const [quizImage, setQuizImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      //update state
      setName(dataUpdate.name);
      setDescription(dataUpdate.description);
      setDifficulty(dataUpdate.difficulty);
      setQuizImage("");
      setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
    }
  }, [dataUpdate]);

  console.log(difficulty);
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setQuizImage(event.target.files[0]);
    } else {
      // setPreviewImage("");
    }
    console.log("upload file", event.target.files[0]);
  };

  const handleSubmitUpdateQuiz = async () => {
    //validate

    //call apis

    let data = await putUpdateQuizForAdmin(
      dataUpdate.id,
      name,
      description,
      difficulty?.value,
      quizImage
    );
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
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                placeholder="Enter quiz description"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Difficulty</label>
              <Select
                defaultValue={difficulty}
                onChange={setDifficulty}  
                options={options}
                placeholder="Quiz type..."
              />
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <FcPlus />
                Upload File Image
              </label>
              <input
                type="file"
                id="labelUpload"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmitUpdateQuiz(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateQuiz;
