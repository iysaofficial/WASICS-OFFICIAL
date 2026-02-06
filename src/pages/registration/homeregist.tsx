function HomeRegist() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-elevated p-8 md:p-12 text-center animate-fade-in-up">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                REGISTRATION FORM
              </h1>
              <h3 className="text-lg md:text-xl text-muted-foreground">
                Choose Your Citizenship Category for Registration JISF 2026
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <a
                href="/homeindo"
                className="group flex items-center justify-center p-6 bg-secondary text-secondary-foreground font-semibold rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-soft"
              >
                INDONESIAN CITIZEN
                <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
              <a
                href="/homeinter"
                className="group flex items-center justify-center p-6 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-soft"
              >
                INTERNATIONAL CITIZEN
                <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeRegist;
