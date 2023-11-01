import { IQuestionForm } from "./interfaces";

export const questionMapping = (questions: IQuestionForm[]) => {
  let gameMap: string[][] = [[],[],[]];
  questions.forEach((value, index) => {
    console.log(value)
  })
}