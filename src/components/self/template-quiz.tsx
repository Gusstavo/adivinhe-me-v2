"use client";

import { useState } from "react";
import mockQuestions from "@/lib/mock/questions";
import TemplateQuestion from "@/components/self/template-question";
import EndQuiz from "@/components/self/end-quiz";
import Title from "@/components/self/title";
import { Quiz } from "@/interfaces/quiz";
import { format, isSameDay } from "date-fns";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface TemplateQuizProps {
  title: string;
  quiz: Quiz;
}

const TemplateQuiz = ({ title, quiz }: TemplateQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = quiz.questions;
  const dailyTheme = quiz.theme;

  const handleAnswerClick = (index: number) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const isToday = isSameDay(new Date(quiz.date), new Date());

  console.log('>>> ', isToday)

  return (
    <>
      <div className="mb-6">
        <div className="flex flex-row items-end">
          <Title>{title}</Title>
          {!isToday && (
            <span className="text-md font-semibold text-primary ml-2">
              {`(${format(quiz.date, "dd/MM/yyyy")})`}
            </span>
          )}
        </div>
        <h2 className="text-lg">Tema: {dailyTheme}</h2>
      </div>
      <TemplateQuestion
        currentQuestion={currentQuestion}
        question={questions[currentQuestion]}
        totalQuestions={questions.length}
        handleAnswerClick={handleAnswerClick}
      />
      {currentQuestion === questions.length - 1 && (
        <EndQuiz score={score} questions={questions.length} />
      )}
      <div>
        <meta
          property="og:title"
          content={`Adivinhe Me - Quiz do Dia ${quiz.date}`}
        />
        <meta property="og:url" content={`${BASE_URL}`} />
        <meta property="og:image" content="/favicon.ico" />
      </div>
    </>
  );
};

export default TemplateQuiz;
