import Page from "@/components/self/page";
import TemplateQuiz from "@/components/self/template-quiz";
import { Quiz } from "@/interfaces/quiz";
import mockQuestions from "@/lib/mock/questions";

export default function Component({ params }: { params: { date: string } }) {
  const quiz: Quiz = {
    date: params.date,
    theme: "Geografia",
    questions: mockQuestions,
  };

  const title = `Quiz do Dia`

  return (
    <Page>
      <TemplateQuiz title={title} quiz={quiz} />
    </Page>
  );
}
