import { Question } from "@/interfaces/question"
import { Progress } from "@/components/ui/progress"
import BorderedImage from "@/components/self/bordered-image"

interface TemplateQuestionProps {
    question: Question
    currentQuestion: number
    handleAnswerClick: (index: number) => void
    score: number
    handleShareResults: () => void
    totalQuestions: number
}

const TemplateQuestion = ({ question, currentQuestion, handleAnswerClick, score, handleShareResults, totalQuestions }: TemplateQuestionProps) => {
    if (currentQuestion === totalQuestions - 1) {
        return  <BorderedImage src={question.image} width="800" height="400" alt="Quiz Image" className="rounded-lg mb-6 border-2" />
    }

    return (
      <>
        <BorderedImage src={question.image} width="800" height="400" alt="Quiz Image" className="rounded-lg mb-6 border-2 border-primary" />
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
            <div className="grid grid-cols-2 gap-4">
            {question.answers.map((answer, index) => (
                <button
                key={index}
                className="bg-zinc-100 hover:bg-zinc-200 rounded-lg py-3 px-6 focus:outline-none"
                onClick={() => handleAnswerClick(index)}
                >
                    {answer}
                </button>
            ))}
            </div>
            <div className="mt-6">
                <Progress value={((currentQuestion + 1) / 10) * 100} className="mb-2" />
                <p className="text-primary">Pergunta {currentQuestion + 1} de {totalQuestions}</p>
            </div>
        </div>
      </>
    )
}

export default TemplateQuestion