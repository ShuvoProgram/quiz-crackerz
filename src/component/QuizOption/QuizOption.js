import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { correctContext, wrongContext } from "../../Root/Root";

const QuizOption = ({ options, corrects }) => {
  const [correct, setCorrect] = useContext(correctContext);
  const [wrong, setWrong] = useContext(wrongContext);
  const [disabled, setDisable] = useState(false);

  const handleAnswer = (e) => {

    if (e === corrects) {
      setCorrect(correct + 1);
      setDisable(true);
      toast.success("Correct Answer!", {
        position: "top-right",
        autoClose: 500,
      });
    } else {
      setWrong(wrong + 1);
      setDisable(true);
      toast.error("Wrong Answer", {
        position: "top-right",
        autoClose: 500,
      });
    }
  };
  
  return (
    <div className="m-2 py-2 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-500">
      <button onClick={() => handleAnswer(options)} disabled={disabled}>
        {options}
      </button>
      <ToastContainer />
    </div>
  );
};

export default QuizOption;
