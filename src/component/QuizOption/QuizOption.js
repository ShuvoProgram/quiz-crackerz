import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOption = ({ options, correct }) => {
  
  const handleAnswer = (e) => {
    if(e === correct){
      toast.success("Correct Answer!", {
        position: "top-right",
        autoClose: 500
});
    } else {
      toast.error("Wrong Answer", {
        position: "top-right",
        autoClose: 500
})
    }
  }
  return (
      <div className="m-2 py-2 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-500">
      <button
        onClick={() => handleAnswer(options)}>
        {options}
      </button>
      <ToastContainer />
    </div>
  );
};

export default QuizOption;
