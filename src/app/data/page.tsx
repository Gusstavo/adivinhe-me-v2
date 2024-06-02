import CardQuiz from "@/components/self/card-quiz";
import Page from "@/components/self/page";
import Title from "@/components/self/title";
import pastDays from "@/lib/mock/pastDays";

export default function Component() {
  const dailyQuestions = pastDays;

  return (
    <Page>
      <Title>Quiz de Dias Anteriores</Title>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dailyQuestions.map((quiz, index) => (
          <CardQuiz key={index} quiz={quiz} />
        ))}
      </div>
    </Page>
  );
}
