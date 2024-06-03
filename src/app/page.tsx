import mockQuestions from "@/lib/mock/questions";
import TemplateQuiz from "@/components/self/template-quiz";
import { Quiz } from "@/interfaces/quiz";
import Page from "@/components/self/page";

export default function Component() {
  const quiz: Quiz = {
    date: "2024-06-02", // Colocar o dia atual
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
