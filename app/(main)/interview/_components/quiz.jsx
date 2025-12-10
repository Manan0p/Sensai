"use client";

import { generateQuiz } from "@/actions/interview";
import useFetch from "@/hooks/use-fetch";
import { useState } from "react";

const Quiz = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState(false);
  
  const {
    loading: generatingQuiz,
    fn: generateQuizFn,
    data: quizData,
  } = useFetch(generateQuiz);


  return (
    <div>Quiz</div>
  )
}

export default Quiz