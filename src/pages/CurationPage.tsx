import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ClipboardCheck, ExternalLink, ShieldCheck } from "lucide-react";

const CurationPage = () => {
  const [selectedYear, setSelectedYear] = useState("2026");

  const availableYears = [
    { label: "2026", value: "2026", disabled: false },
    { label: "2027 (Soon)", value: "2027", disabled: true }
  ];

  const getDriveLink = (year: string) => {
    // Return corresponding drive folder links
    if (year === "2026") return "";
    return "";
  };

  const currentDriveLink = getDriveLink(selectedYear);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-custom pt-40 pb-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
            <ClipboardCheck className="w-4 h-4" />
            <span>Event Documentation & Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Curation <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore a curated exhibition of extraordinary projects and the best innovations born from the WASICS global science competition.
          </p>
        </motion.div>

        {/* Layout for Description and Drive Access */}
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* LEFT COLUMN: WHAT IS CURATION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-card/60 backdrop-blur-xl border border-white/10 shadow-soft rounded-[2rem] p-10 h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                What is Event Curation?
              </h2>
              <div className="text-muted-foreground leading-relaxed text-lg space-y-4 shadow-sm">
                <p>
                  In the context of an event, <strong>Curation</strong> is much more than a simple selection process. It is the art of carefully handpicking, organizing, and presenting the finest works to create an exhibition or competition that is high-quality, cohesive, and impactful.
                </p>
                <p>
                  By curating the event, WASICS ensures that every innovation showcased has undergone profound evaluation by subject-matter experts. This curation process maintains quality, guarantees originality, and ensures that the projects presented are capable of inspiring others and making a tangible contribution to the advancement of science and technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: DRIVE VAULT PER YEAR */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <div className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-2xl border border-primary/20 shadow-[0_8px_32px_rgba(16,185,129,0.06)] rounded-[2rem] p-10 h-full">
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-foreground mb-2">Access Archives</h2>
                <p className="text-muted-foreground font-medium">Find the curated event archives and documents here.</p>
              </div>

              {/* Year Pills */}
              <div className="flex flex-wrap gap-2 p-1.5 bg-secondary/50 rounded-2xl border border-border/50 mb-8">
                {availableYears.map(y => (
                  <button
                    key={y.value}
                    disabled={y.disabled}
                    onClick={() => setSelectedYear(y.value)}
                    className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                      selectedYear === y.value
                        ? "bg-background text-foreground shadow-sm"
                        : y.disabled
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                    }`}
                  >
                    {y.label}
                  </button>
                ))}
              </div>

              {/* Single Vault Button Container */}
              <div className="group flex flex-col gap-6 p-8 rounded-3xl border border-primary/20 bg-primary/5 transition-all duration-500">
                <div className="flex items-center gap-5 w-full">
                  <div className="w-16 h-16 shrink-0 rounded-[1.2rem] bg-primary/10 flex items-center justify-center text-primary transition-all duration-500">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-foreground mb-1">
                      {selectedYear} Curated Gallery
                    </h4>
                    <p className="text-muted-foreground text-sm font-medium leading-snug">
                      A comprehensive collection of documents, posters, and records of the phenomenal works by our participants.
                    </p>
                  </div>
                </div>

                <div className="w-full mt-2">
                  {currentDriveLink ? (
                    <a href={currentDriveLink} target="_blank" rel="noopener noreferrer" className="block outline-none">
                      <button className="w-full py-4 px-6 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-bold text-lg border-none cursor-pointer flex items-center justify-center gap-3 shadow-lg transition-transform hover:scale-[1.02]">
                        Open Drive Folder <ExternalLink size={20} />
                      </button>
                    </a>
                  ) : (
                    <button className="w-full py-4 px-6 rounded-2xl bg-muted text-muted-foreground font-bold text-lg border-none cursor-not-allowed">
                      Folder Not Available Yet
                    </button>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CurationPage;
