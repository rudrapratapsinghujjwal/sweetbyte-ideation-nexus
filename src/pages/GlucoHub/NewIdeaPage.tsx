
import Header from "@/components/Header";
import IdeaForm from "@/components/IdeaForm";

const NewIdeaPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header portal="glucohub" />
      <main className="flex-1 py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Submit New Idea</h1>
          <IdeaForm />
        </div>
      </main>
    </div>
  );
};

export default NewIdeaPage;
