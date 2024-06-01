import pastDays from "@/lib/mock/pastDays";

export default function Component({ params }: { params: { date: string } }) {
  const dailyQuestions = pastDays;

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 bg-secondary">
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              {params.date}
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
