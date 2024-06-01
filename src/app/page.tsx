"use client"

import { useState } from "react"
import Header from "@/components/ui/header"
import mockQuestions from "@/lib/mockQuestions"
import TemplateQuestion from "@/components/self/template-question"
import EndQuiz from "@/components/self/end-quizz"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const questions = mockQuestions

  const shareObj = {
    title: "Adivinhe Me - Quiz do Dia",
    text: `Eu acertei ${score} de ${questions.length} questões!`,
    url: `${BASE_URL}?score=${score}`,
  }

  const handleAnswerClick = (index: number) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleShareResults = () => {
    navigator.share(shareObj)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#FFF9C4] to-secondary">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-secondary to-[#FFF9C4]">
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto">
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
