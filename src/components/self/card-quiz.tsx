import { Quiz } from "@/interfaces/quiz";
import Link from "next/link";

interface CardQuizProps {
  quiz: Quiz;
}

const CardQuiz = ({ quiz }: CardQuizProps) => {
  return (
    <Link
      href={`/data/${quiz.date}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
      prefetch={false}
    >
      <img
        src={quiz.questions[0].image}
        width="500"
        height="200"
        alt={quiz.date}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{quiz.date}</h3>
        <p className="text-zinc-500 mb-2">{quiz.theme}</p>
      </div>
    </Link>
  );
};

export default CardQuiz;
