
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Globe2, Lightbulb } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-custom pt-40 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            About <span className="text-gradient">WASICS</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            World Science, Environment and Engineering Competition
          </p>
        </motion.div>

        {/* WASICS Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32 mt-12"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Lightbulb className="w-4 h-4" />
                <span>The Grand Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
                What is <span className="text-gradient">WASICS?</span>
              </h2>
              
              <div className="bg-card/60 backdrop-blur-2xl border border-white/20 dark:border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-elevated relative overflow-hidden group">
                {/* Glowing background blob */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[4rem] group-hover:bg-primary/30 transition-colors duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed mb-6">
                    WASICS is a premier international science competition bringing together talented students from Junior High to University level.
                  </p>
                  <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-transparent mb-6" />
                  <p className="text-muted-foreground text-base leading-relaxed">
                    This groundbreaking event focuses on Agriculture, Strategic Innovation, and Cooperative Science. The competition provides a platform for young researchers to showcase their innovative solutions to global challenges.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] order-1 lg:order-2 mb-10 lg:mb-0">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border border-border/50 group">
                <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770346614/NASPO_I2ASPO_2025-258_tndplw.jpg" alt="WASICS 2026" className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
                {/* Subtle inner overlay */}
                <div className="absolute inset-0 bg-gradient-to-tl from-black/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Meta Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
                className="absolute -bottom-6 -left-4 md:bottom-12 md:-left-12 bg-background/90 backdrop-blur-xl p-5 md:p-6 rounded-[2rem] shadow-elevated border border-border flex items-center gap-5 z-20 group cursor-pointer hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                  <Globe2 className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">International Collaboration</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Organizers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Organized By</h2>
          <div className="space-y-8 md:space-y-12">
            {/* IYSA */}
            <motion.div
              className="group relative rounded-[2.5rem] overflow-hidden min-h-[400px] md:min-h-[500px] shadow-xl"
            >
              <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770347332/tarnus_gyiif_qmhkpj.jpg" alt="IYSA" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 md:opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl p-2.5 md:p-3 mb-4 md:mb-5 border border-white/20 shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770274542/Desain_tanpa_judul_4_bperwk.png" alt="IYSA Logo" className="w-full h-full object-contain drop-shadow-lg" />
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white mb-1.5 md:mb-2 leading-tight drop-shadow-md">
                  Indonesian Young Scientist Association (IYSA)
                </h3>

                <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  <div className="overflow-hidden min-h-0">
                    <p className="text-white/80 text-sm md:text-lg leading-relaxed mt-2 md:mt-3 transform transition-all duration-700 md:translate-y-6 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      The Indonesian Young Scientist Association (IYSA) is an institution engaged in the development of the potential, talents, and creativity of Indonesian students in non-academic fields.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SMA Taruna Nusantara */}
            <motion.div
              className="group relative rounded-[2.5rem] overflow-hidden min-h-[400px] md:min-h-[500px] shadow-xl"
            >
              <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770347927/tarnus_zpaccv.png" alt="SMA Taruna Nusantara Kampus Malang" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 md:opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl p-2.5 md:p-3 mb-4 md:mb-5 border border-white/20 shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770274333/Desain_tanpa_judul_3_lbanwu.png" alt="SMA Taruna Nusantara Kampus Malang Logo" className="w-full h-full object-contain drop-shadow-lg" />
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white mb-1.5 md:mb-2 leading-tight drop-shadow-md">
                  SMA Taruna Nusantara Kampus Malang
                </h3>

                <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  <div className="overflow-hidden min-h-0">
                    <p className="text-white/80 text-sm md:text-lg leading-relaxed mt-2 md:mt-3 transform transition-all duration-700 md:translate-y-6 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      SMA Taruna Nusantara Kampus Malang is a boarding high school in Malang, East Java, Indonesia. Established in 1990, it has a reputation for producing future leaders.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
