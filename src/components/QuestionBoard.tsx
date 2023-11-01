import { boardColCounter } from "@/utils/helpers";
import { questions } from "@/utils/questions";
import QuestionLine from "./QuestionLine";

const QuestionBoard = () => {
  const row = questions.length;
  const col = boardColCounter(questions).start + boardColCounter(questions).end;

  

  return (
    <div className="flex justify-center items-center">
    </div>
  )
}

export default QuestionBoard;