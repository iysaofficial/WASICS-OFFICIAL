import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Trophy, Medal, Star } from "lucide-react";

const WinnersPage = () => {
  // Default to the latest year and the primary category
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedCategory, setSelectedCategory] = useState("Offline");

  // Track which level is currently expanded to view winners
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  const availableYears = [
    { label: "2026", value: "2026", disabled: false },
    { label: "2027 (Soon)", value: "2027", disabled: true }
  ];

  const levels = [
    {
      name: "Elementary",
      // Contoh link G-Drive (pastikan berakhiran /preview, BUKAN /view)
      pdfLink: ""
    },
    {
      name: "Secondary",
      pdfLink: "" // Biarkan kosong jika belum ada 
    },
    {
      name: "University",
      pdfLink: ""
    },
  ];

  // Dummy data handler for previewing the table structure
  const handleLevelToggle = (levelName: string) => {
    setExpandedLevel(expandedLevel === levelName ? null : levelName);
  };

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
            <Trophy className="w-4 h-4" />
            <span>Hall of Fame</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            List of <span className="text-gradient">Winners</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating the brightest young minds and their remarkable achievements in the WASICS global science competition.
          </p>
        </motion.div>

        {/* 1. Year Selector (Horizontal Pills) */}
        <div className="mb-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex p-1.5 bg-secondary/50 backdrop-blur-md rounded-full border border-border/50 gap-1 overflow-x-auto max-w-full"
          >
            {availableYears.map((obj) => (
              <button
                key={obj.value}
                disabled={obj.disabled}
                onClick={() => {
                  if (!obj.disabled) {
                    setSelectedYear(obj.value);
                    setExpandedLevel(null); // Reset accordion on year change
                  }
                }}
                className={`relative px-8 py-2.5 rounded-full text-base font-bold transition-all duration-300 ${selectedYear === obj.value
                  ? "text-primary-foreground shadow-lg"
                  : obj.disabled
                    ? "text-muted-foreground/30 cursor-not-allowed bg-muted/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
              >
                {selectedYear === obj.value && (
                  <motion.div
                    layoutId="yearBackground"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-[#2a7a5f] rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{obj.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* 2. Category Switcher (Segmented Control) */}
        <div className="mb-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex p-2 bg-card border border-border shadow-soft rounded-[2.5rem] w-full max-w-[28rem] relative"
          >
            <div
              className={`absolute top-2 bottom-2 left-2 w-[calc(50%-0.6rem)] bg-primary/10 rounded-[2rem] border border-primary/20 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${selectedCategory === "Online" ? "translate-x-full" : "translate-x-0"
                }`}
            />
            {["Offline", "Online"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setExpandedLevel(null); // Reset accordion on category change
                }}
                className={`flex-1 py-4 text-center font-bold text-lg md:text-xl transition-colors z-10 ${selectedCategory === cat ? "text-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat} Mode
              </button>
            ))}
          </motion.div>
        </div>

        {/* 3. Level Accordion & Podium */}
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {levels.map((level, index) => {
              const isExpanded = expandedLevel === level.name;

              return (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`bg-card/60 backdrop-blur-xl border ${isExpanded ? 'border-primary/40 shadow-[0_4px_30px_rgba(16,185,129,0.15)]' : 'border-white/10 dark:border-white/5 shadow-soft'} rounded-[2rem] overflow-hidden hover:shadow-elevated transition-all duration-500`}
                >
                  <button
                    onClick={() => handleLevelToggle(level.name)}
                    className="w-full text-left px-6 md:px-10 py-6 md:py-8 flex items-center justify-between focus:outline-none group"
                  >
                    <div className="flex items-center gap-5 md:gap-6">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] flex items-center justify-center transition-all duration-500 ${isExpanded ? 'bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30' : 'bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20'}`}>
                        <Star className="w-7 h-7 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {level.name}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium mt-1">Click to view medalists</p>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full border bg-background transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${isExpanded ? "rotate-180 bg-primary/10 border-primary/30" : "border-border"}`}>
                      <ChevronDown className={`w-7 h-7 ${isExpanded ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-10 pb-10 pt-2">
                          <div className="h-px w-full bg-border/60 mb-8" />

                          {/* Render Embedded PDF or Fallback */}
                          {level.pdfLink ? (
                            <div className="bg-background rounded-3xl overflow-hidden border border-border shadow-inner relative w-full h-[500px] md:h-[700px]">
                              <iframe
                                src={level.pdfLink}
                                width="100%"
                                height="100%"
                                allow="autoplay"
                                className="border-0 bg-white"
                                title={`Winners ${level.name}`}
                              ></iframe>
                            </div>
                          ) : (
                            <div className="bg-background/80 rounded-3xl p-10 md:p-16 border-2 border-dashed border-border/80 flex flex-col items-center justify-center text-center">
                              <Medal className="w-16 h-16 text-muted-foreground/30 mb-6 drop-shadow-md" />
                              <p className="text-foreground font-bold text-xl md:text-2xl mb-2">
                                Awaiting official announcements
                              </p>
                              <p className="text-base md:text-lg text-muted-foreground/80 max-w-lg">
                                Medal results for <strong className="text-primary">{selectedYear} "{selectedCategory}" - {level.name}</strong> will be updated here soon.
                              </p>
                            </div>
                          )}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WinnersPage;
