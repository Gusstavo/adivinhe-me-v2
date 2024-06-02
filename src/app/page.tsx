import mockQuestions from "@/lib/mock/questions";
import TemplateQuiz from "@/components/self/template-quiz";
import { Quiz } from "@/interfaces/quiz";
import Page from "@/components/self/page";

export default function Component() {
  const quiz: Quiz = {
    date: "2024-05-01",
    theme: "Geografia",
    questions: mockQuestions,
  };

  return (
    <Page>
      <TemplateQuiz title="Quiz do Dia" quiz={quiz} />
    </Page>
  );
}
