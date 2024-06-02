import Page from "@/components/self/page";
import Title from "@/components/self/title";

export default function Component({ params }: { params: { date: string } }) {
  return (
    <Page>
      <Title>{params.date}</Title>
    </Page>
  );
}
