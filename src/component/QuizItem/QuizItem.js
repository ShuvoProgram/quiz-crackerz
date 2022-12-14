import React from "react";
import QuizOption from "../QuizOption/QuizOption";
import { EyeIcon } from "@heroicons/react/24/solid";
import swal from "sweetalert";
import './QuizItem.css';

const QuizItem = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  const eyeCatch = () => {
    swal("Answer!", correctAnswer, "success");
    return correctAnswer;
  };
  return (
    <div>
      <div className="grid text-white m-4 p-4 bg-slate-800 rounded-md">
        <div>
          <div className="flex items-center justify-evenly">
            <p className="w-full">{question.slice(3, -4)}</p>
            <EyeIcon
              onClick={() => eyeCatch()}
              className="h-4 w-4 cursor-pointer"
            />
          </div>
          <div className="options grid grid-cols-2">
            {options.map((e, idx) => (
              <QuizOption options={e} corrects={correctAnswer} key={idx} index={idx}></QuizOption>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
