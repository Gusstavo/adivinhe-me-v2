interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-secondary">
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">{children}</div>
        </section>
      </main>
    </div>
  );
};

export default Page;
