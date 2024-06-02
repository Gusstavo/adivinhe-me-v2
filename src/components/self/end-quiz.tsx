import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EndQuizProps {
  score: number;
  questions: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EndQuiz = ({ score, questions }: EndQuizProps) => {
  const shareObj = {
    title: "Adivinhe Me - Quiz do Dia",
    text: `Eu acertei ${score} de ${questions} questões!`,
    url: `${BASE_URL}?score=${score}`,
  };

  const handleShareResults = () => {
    navigator.share(shareObj);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h3 className="text-2xl font-bold mb-4">
        Você acertou {score} de {questions} perguntas!
      </h3>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/data"
          className="bg-warning text-white rounded-lg py-3 px-6 hover:bg-warning-foreground focus:outline-none text-sm"
          prefetch={false}
        >
          Ver outros quizzes
        </Link>
        <Button
          onClick={handleShareResults}
          className=" text-white rounded-lg py-3 px-6  focus:outline-none"
          size="lg"
          variant="success"
        >
          <Share2 className="h-6 w-6 mr-2" />
          Compartilhar
        </Button>
      </div>
    </div>
  );
};

export default EndQuiz;
