import { IQuestionForm } from "./interfaces";
import { questions } from "./questions";

export const questionMapping = (questions: IQuestionForm[]) => {
  let gameMap: string[][] = [];
  let farthestKey: number = questionsMainLine(questions);
  questions.forEach((value, index) => {
    let row = Array(farthestKey - value.key).fill("").concat([...value.answer.split("")])
    gameMap.push(row);
  })
  return gameMap;
}

export const questionsMainLine = (questions: IQuestionForm[]) => {
  let farthestKey: number = 0;
  questions.forEach((value, index) => {
    farthestKey = value.key > farthestKey? value.key: farthestKey
  })
  return farthestKey;
}