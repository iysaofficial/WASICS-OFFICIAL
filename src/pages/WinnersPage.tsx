import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const WinnersPage = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(selectedYear === year ? null : year);
    console.log("Selected Year:", year);
    setSelectedType(null);
    setSelectedLevel(null);
  };

  const handleTypeClick = (type) => {
    setSelectedType(selectedType === type ? null : type);
    console.log("Selected Type:", type);
    setSelectedLevel(null);
  };

  const handleLevelClick = (level) => {
    setSelectedLevel(selectedLevel === level ? null : level);
    console.log("Selected Level:", level);
  };

  const levels2026 = [
    { name: "Junior High School" },
    { name: "Senior High School" },
    { name: "University" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-custom pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            List of <span className="text-gradient">Winners</span>
          </h1>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className={`relative rounded-2xl p-8 cursor-pointer transition-colors ${selectedYear === "2026" ? "bg-accent" : "bg-slate-300 hover:bg-accent/80"}`}
            onClick={() => handleYearClick("2026")}
          >
            <div className="relative flex justify-between items-center">
              <h2 className="text-3xl font-bold text-foreground">2026</h2>
              <ChevronRight className="w-8 h-8 text-foreground" />
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedYear && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <motion.div
                  className={`relative rounded-2xl p-8 cursor-pointer transition-colors ${selectedType === "Offline" ? "bg-accent" : "bg-slate-300 hover:bg-accent/80"}`}
                  onClick={() => handleTypeClick("Offline")}
                >
                  <div className="relative flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-foreground">Wasisc Offline</h3>
                    <ChevronRight className="w-6 h-6 text-foreground" />
                  </div>
                </motion.div>
                <motion.div
                  className={`relative rounded-2xl p-8 cursor-pointer transition-colors ${selectedType === "Online" ? "bg-accent" : "bg-slate-300 hover:bg-accent/80"}`}
                  onClick={() => handleTypeClick("Online")}
                >
                  <div className="relative flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-foreground">Wasisc Online</h3>
                    <ChevronRight className="w-6 h-6 text-foreground" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedType && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                {levels2026.map((level) => (
                  <motion.div
                    key={level.name}
                    onClick={() => handleLevelClick(level.name)}
                    className={`relative rounded-2xl p-6 cursor-pointer transition-colors ${selectedLevel === level.name ? "bg-accent" : "bg-slate-300 hover:bg-accent/80"}`}
                  >
                    <div className="relative flex justify-between items-center">
                      <h4 className="text-xl font-semibold text-foreground">{level.name}</h4>
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WinnersPage;
