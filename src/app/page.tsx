"use client"

import { useState } from "react"
import mockQuestions from "@/lib/mock/questions"
import TemplateQuestion from "@/components/self/template-question"
import EndQuiz from "@/components/self/end-quiz"
import Title from "@/components/self/title"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const questions = mockQuestions
  const dailyTheme = "Geografia"

  const handleAnswerClick = (index: number) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-secondary">
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Title>Quiz do Dia</Title>
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
          </div>
        </section>
      </main>
      <div>
        <meta property="og:title" content="Adivinhe Me - Quiz do Dia" />
        <meta property="og:url" content={`${BASE_URL}`} />
        <meta property="og:image" content="/favicon.ico" />
      </div>
    </div>
  )
}
