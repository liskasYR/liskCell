const FormsPage = () => {
  return (
    <main className="py-24 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-silver-light mb-4">
          Forms
        </h1>
        <div className="w-24 h-1 bg-gradient-silver mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo mb-12">
          Fill out the form below to connect with liskCell
        </p>

        <form className="max-w-2xl mx-auto space-y-6 text-left">
          <div>
            <label className="block text-sm font-orbitron text-silver-light mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-silver"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-orbitron text-silver-light mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-silver"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-orbitron text-silver-light mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-silver"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-silver text-background font-orbitron font-bold hover:opacity-90 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default FormsPage;
