import React, { useRef } from 'react';
import { IQuestionLineForm } from "@/utils/interfaces";

const QuestionLine = ({ question, col }: IQuestionLineForm) => {
  const inputRefs: any  = Array.from<React.RefObject<HTMLInputElement>>({ length: col }, () => useRef(null));


  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // const isMoveKey = event.key.indexOf("Arrow") !== -1;
    // if(isMoveKey){
    //   if(event.key.indexOf("Left") !== -1){
    //     inputRefs[index - 1 % col].current.focus();
    //   }
    //   if(event.key.indexOf("Right") !== -1){
    //     inputRefs[index - 1 % col].current.focus();
    //   }
    // }
    // if (/^[a-zA-Z]$/.test(event.key)) {

      if (inputRefs[index].current) {
        inputRefs[index].current.value = event.key;
        // const nextIndex: number = (index + 1) % col;
        // console.log({ nextIndex, value: inputRefs[nextIndex].current?.value});
        
        // inputRefs[nextIndex].current?.focus();
      }
    // }
    // console.log(event.key)
    // if(event.key == "Enter") {
    //   // const nextIndex: number = (index + 1) % col;
    //   // inputRefs[nextIndex].current?.focus();
    // }
  };

  return (
    <tr>
      {Array.from({ length: col }, (_, index) => (
        <td style={index < question.answer.length? {border: "1px solid gray", backgroundColor: "white"}: {}} className="w-[40px] h-[40px]  mx-3 " key={index}>
          {
            index < question.answer.length ? (
              <input
                type="text"
                maxLength={1}
                className="w-full h-full text-center"
                onKeyDown={(event) => handleKeyDown(event, index)}
                ref={inputRefs[index]}
              />
            ) : null
          }
        </td>
      ))}
    </tr>
  );
};

export default QuestionLine;
