import { useState } from "react";
import Select from "react-select";
import "./Question.scss";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsPatchMinusFill } from "react-icons/bs";
import { BsBagPlus } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
const Questions = (props) => {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];
  const [selectedQuiz, setSelectedQuiz] = useState({});

  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      description: "questions 1",
      imageFile: "",
      imageName: "",
      answers: [
        { id: uuidv4(), description: "answer 1", isCorrect: false },
      ],
    },
  ]);

  console.log(">>> questions:", questions);

  const handleAddRemoveQuestion = (type, id) => {
    if (type === "ADD") {
      const newQuestion = {
        id: uuidv4(),
        description: "",
        imageFile: "",
        imageName: "",
        answers: [{ id: uuidv4(), description: "", isCorrect: false }],
      };

      setQuestions([...questions, newQuestion]);
    }

    if (type === "REMOVE") {
      let questionsClone = _.cloneDeep(questions);
      questionsClone = questionsClone.filter((item) => item.id !== id);
      setQuestions(questionsClone);
    }

    console.log(">>> check:", type, id);
  };

  const handleAddRemoveAnswer = (type, questionId, answerId) => {
    let questionsClone = _.cloneDeep(questions);
    console.log(">>> check:", type, questionId, answerId);
    if (type === "ADD") {
      const newAnswer = {
        id: uuidv4(),
        description: "",
        isCorrect: false,
      };

      let index = questionsClone.findIndex((item) => item.id === questionId);
      questionsClone[index].answers.push(newAnswer);
      setQuestions(questionsClone);
    }

    if (type === "REMOVE") {
      let index = questionsClone.findIndex((item) => item.id === questionId);
      questionsClone[index].answers = questionsClone[index].answers.filter(
        (item) => item.id !== answerId
      );
      setQuestions(questionsClone);
    }
  };

  console.log("questions:", questions);

  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label className="mb-2">Select Quiz:</label>
          <Select
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
        <div className="mt-3 mb-2">Add Questions:</div>
        {questions &&
          questions.length > 0 &&
          questions.map((question, index) => {
            return (
              <div key={question.id} className="q-main mb-4">
                <div className="question-content">
                  <div className="form-floating description">
                    <input
                      type="type"
                      class="form-control"
                      placeholder="name@example.com"
                      value={question.description}
                    />
                    <label>Quesstion {index + 1}'s Descriptions</label>
                  </div>
                  <div className="group-upload">
                    <label>
                      <RiImageAddFill className="label-up" />
                    </label>
                    <input type="file" hidden />
                    <span>0 file is uploaded</span>
                  </div>
                  <div className="btn-add">
                    <span
                      onClick={() =>
                        handleAddRemoveQuestion("ADD", question.id)
                      }
                    >
                      <BsFillPatchPlusFill className="icon-add" />
                    </span>
                    <span
                      onClick={() =>
                        handleAddRemoveQuestion("REMOVE", question.id)
                      }
                    >
                      {questions.length > 1 && (
                        <BsPatchMinusFill className="icon-remove" />
                      )}
                    </span>
                  </div>
                </div>
                {question.answers &&
                  question.answers.length > 0 &&
                  question.answers.map((answer, index) => {
                    return (
                      <div key={answer.id} className="answers-content">
                        <input className="form-check-input iscorrect" />
                        <div className="form-floating description">
                          <input
                            value={answer.description}
                            type="type"
                            className="form-control"
                            placeholder="name@example.com"
                          />
                          <label>Answer {index + 1}</label>
                        </div>
                        <div className="btn-group">
                          <span
                            onClick={() =>
                              handleAddRemoveAnswer("ADD", question.id)
                            }
                          >
                            <BsBagPlus className="icon-add" />
                          </span>
                          {question.answers.length > 0 && (
                            <span
                              onClick={() =>
                                handleAddRemoveAnswer(
                                  "REMOVE",
                                  question.id,
                                  answer.id
                                )
                              }
                            >
                              <HiMinusCircle className="icon-remove" />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Questions;
