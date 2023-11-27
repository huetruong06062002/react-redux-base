import { useEffect } from "react";
import { useParams } from "react-router";
import { getDataQuizById } from "../../services/userServices";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.QuizId;
  useEffect(() => {
    fetchQuestions();
  }, [quizId]);
  const fetchQuestions = async () => {
    let res = await getDataQuizById(quizId);
    console.log(">>>> Check Question:", res);
  };
  return <div className="detail-quiz-container">Detail Quiz</div>;
};

export default DetailQuiz;
