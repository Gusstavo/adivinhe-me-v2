import CardQuiz from "@/components/self/card-quiz";
import pastDays from "@/lib/mock/pastDays";
import Link from "next/link";

export default function Component() {
  const dailyQuestions = pastDays;

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 bg-secondary">
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Quiz de Dias Anteriores
            </h2>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {dailyQuestions.map((quiz, index) => (
                <CardQuiz key={index} quiz={quiz} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
