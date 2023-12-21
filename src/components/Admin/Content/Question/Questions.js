import { useState } from "react";
import Select from "react-select";
import "./Question.scss";

import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsPatchMinusFill } from "react-icons/bs";
import { BsBagPlus } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";
const Questions = (props) => {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];
  const [selectedQuiz, setSelectedQuiz] = useState({});
  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label>Select Quiz:</label>
          <Select
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
        <div className="mt-3">Add Question:</div>
        <div className="question-content">
          <div className="form-floating description">
            <input
              type="type"
              class="form-control"
              placeholder="name@example.com"
            />
            <label>Descriptions</label>
          </div>
          <div className="group-upload">
            <label className="label-up">Upload Image</label>
            <input type="file" hidden />
            <span>0 file is uploaded</span>
          </div>
          <div className="btn-add">
            <span>
              <BsFillPatchPlusFill className="icon-add" />
            </span>
            <span>
              <BsPatchMinusFill className="icon-remove" />
            </span>
          </div>
        </div>
        <div className="answers-content">
          <input className="form-check-input iscorrect" />
          <div className="form-floating description">
            <input
              type="type"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Answer 1</label>
          </div>
          <div className="btn-group">
            <span>
              <BsBagPlus className="icon-add"/>
            </span>
            <span>
              <HiMinusCircle className="icon-remove" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
