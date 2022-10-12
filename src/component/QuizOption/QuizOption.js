import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartContext } from "../../Root/Root";

const QuizOption = ({ options, correct }) => {
  const [ans, setAns] =  useState({correct: 2, wrong: 0});
  // const [ans, setAns] = useContext(cartContext)
  const handleAnswer = (e) => {
    if(e === correct){
      setAns({...ans, correct: ans.correct + 1})
      toast.success("Correct Answer!", {
        position: "top-right",
        autoClose: 500
});
    } else {
      setAns({...ans, wrong: ans.wrong + 1})
      toast.error("Wrong Answer", {
        position: "top-right",
        autoClose: 500

})
    }
  }
  console.log(ans)
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
