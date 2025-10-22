const FormsPage = () => {
  return (
    <main className="py-24 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
          Forms Support
        </h1>
        <div className="w-24 h-1 bg-gradient-silver mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo mb-12">
          Fill out the form below to connect with liskCell
        </p>

        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdd8agwX0rULf6KpFgFvs_dfOSgTWJO_QzR9WE3qWp31RLc5g/viewform?usp=dialog"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Google Form"
            className="rounded-xl border border-border shadow-lg"
          >
            טופס נטען...
          </iframe>
        </div>
      </div>
    </main>
  );
};

export default FormsPage;

