"use client"
import { useEffect, useState } from 'react'
import { questions } from '@/utils/questions'
import { questionMapping, questionsMainLine } from '@/utils/helpers'
import { IQuestionForm } from '@/utils/interfaces'

export default function Home() {
  const [gameMap, setGameMap] = useState<string[][]>([]);
  const farthestKey: number = questionsMainLine(questions)
  useEffect(() => {
    setGameMap(questionMapping(questions));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, rowIndex: number, cellIndex: number) => {
    const inputValue = event.target.value.toUpperCase();
    const keyAnswer = gameMap[rowIndex][cellIndex];
    
    console.log(inputValue === keyAnswer);

    if (inputValue === keyAnswer) {
      event.target.classList.remove("bg-yellow-300")
      event.target.classList.add("bg-green-300");
      if(cellIndex === farthestKey){
        event.target.classList.add("text-red-500");
      }
    } else {
      event.target.classList.remove("bg-green-300");
      event.target.classList.remove("text-red-500");
    }

    const nextCellIndex = (cellIndex + 1) % gameMap[rowIndex].length;
    const prevCellIndex = (cellIndex - 1) % gameMap[rowIndex].length;
    const prevRow = (cellIndex - 1 < 0)? (rowIndex - 1) % gameMap.length : rowIndex
    const nextRow = (cellIndex + 1 === gameMap[rowIndex].length) ? (rowIndex + 1) % gameMap.length : rowIndex;
    const nextInput = document.querySelector(`input[data-row="${nextRow}"][data-cell="${nextCellIndex}"]`) as HTMLInputElement | null;
    const prevInput = document.querySelector(`input[data-row="${prevRow}"][data-cell="${prevCellIndex}"]`) as HTMLInputElement | null;
    if (nextInput && inputValue.length > 0) {
      nextInput.focus();
    }
    if (prevInput && inputValue.length == 0){
      prevInput.focus();
    }
  };

  const handleFocus = (event: React.SyntheticEvent<HTMLInputElement, Event>) =>{
    const target = event.target as HTMLInputElement;
    target.select();
    return;
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <table>
        <tbody>
          {gameMap.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, cellIndex) => {
                if (value.length > 0) {
                  return (
                    <td key={cellIndex} className='w-[50px] h-[50px] text-center border-black border-2'>
                      <input
                        maxLength={1}
                        type='text'
                        style={{backgroundColor: cellIndex === farthestKey? "yellow" :""}}
                        className='w-full h-full text-center'
                        data-row={rowIndex}
                        data-cell={cellIndex}
                        onChange={(event) => handleInputChange(event, rowIndex, cellIndex)}
                        onSelect={(event) => handleFocus(event)}
                      />
                    </td>
                  );
                }
                return <td key={cellIndex}></td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mx-[30px]'>
        {
          questions.map((value, index) => (
            <p key={index}>{index + 1}. {value.question}</p>
          ))
        }
      </div>
    </div>
  );
}
