"use client";

import { useState } from "react";
import mockQuestions from "@/lib/mock/questions";
import TemplateQuestion from "@/components/self/template-question";
import EndQuiz from "@/components/self/end-quiz";
import Title from "@/components/self/title";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = mockQuestions;
  const dailyTheme = "Geografia";

  const shareObj = {
    title: "Adivinhe Me - Quiz do Dia",
    text: `Eu acertei ${score} de ${questions.length} questões!`,
    url: `${BASE_URL}?score=${score}`,
  };

  const handleAnswerClick = (index: number) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleShareResults = () => {
    navigator.share(shareObj);
  };

  return (
    <>
      <Title>{`Quiz do Dia - Tema ${dailyTheme}`}</Title>
      <TemplateQuestion
        currentQuestion={currentQuestion}
        score={score}
        question={questions[currentQuestion]}
        totalQuestions={questions.length}
        handleAnswerClick={handleAnswerClick}
        handleShareResults={handleShareResults}
      />
      {currentQuestion === questions.length - 1 && (
        <EndQuiz score={score} questions={questions.length} />
      )}
      <div>
        <meta property="og:title" content="Adivinhe Me - Quiz do Dia" />
        <meta property="og:url" content={`${BASE_URL}`} />
        <meta property="og:image" content="/favicon.ico" />
      </div>
    </>
  );
}
