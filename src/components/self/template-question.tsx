import { Question } from "@/interfaces/question"
import { Progress } from "@/components/ui/progress"

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
        return  <img src={question.image} width="800" height="400" alt="Quiz Image" className="rounded-lg mb-6" />
    }

    return (
      <>
        <img src={question.image} width="800" height="400" alt="Quiz Image" className="rounded-lg mb-6" />
        <div className="bg-white dark:bg-primary rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
            <div className="grid grid-cols-2 gap-4">
            {question.answers.map((answer, index) => (
                <button
                key={index}
                className="bg-secondary dark:bg-[#FF8F00] hover:bg-[#FFE082] dark:hover:bg-primary rounded-lg py-3 px-6 focus:outline-none"
                onClick={() => handleAnswerClick(index)}
                >
                    {answer}
                </button>
            ))}
            </div>
            <div className="mt-6">
                <Progress value={((currentQuestion + 1) / 10) * 100} className="mb-2" />
                <p className="text-primary dark:text-secondary">Pergunta {currentQuestion + 1} de {totalQuestions}</p>
            </div>
        </div>
      </>
    )
}

export default TemplateQuestion