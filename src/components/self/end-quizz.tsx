import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EndQuizProps {
    score: number
    questions: number
}

const EndQuiz = ({ score, questions }: EndQuizProps) => {
    return (
        <div className="bg-white dark:bg-primary rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Você acertou {score} de {questions} perguntas!</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href="#"
                    className="bg-primary text-white rounded-lg py-3 px-6 hover:bg-primary focus:outline-none text-sm"
                    prefetch={false}
                >
                    Ver questões anteriores
                </Link>
                <Button
                    onClick={() => {}}
                    className="bg-[#4CAF50] text-white rounded-lg py-3 px-6 hover:bg-[#43A047] focus:outline-none"
                    size="lg"
                >
                    <Share2 className="h-6 w-6 mr-2" />
                    Compartilhar
                </Button>
            </div>
        </div>
    )
}

export default EndQuiz
