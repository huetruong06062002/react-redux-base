import { useEffect } from "react";
import { useParams } from "react-router";
import { getDataQuizById } from "../../services/userServices";
import _ from "lodash";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.QuizId;
  useEffect(() => {
    fetchQuestions();
  }, [quizId]);
  const fetchQuestions = async () => {
    let res = await getDataQuizById(quizId);
    let raw = res.DT;
    console.log(raw);
    console.log(
      _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            console.log(index);
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });

          return { questionId: key, answers, questionDescription, image };
        })
        .value()
    );
  };
  return <div className="detail-quiz-container">Detail Quiz</div>;
};

export default DetailQuiz;
