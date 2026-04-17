
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">What is WASICS?</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                WASICS is a premier international science competition bringing together talented students from Junior High to University level. This groundbreaking event focuses on Agriculture, Strategic Innovation, and Cooperative Science.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The competition provides a platform for young researchers to showcase their innovative solutions to global challenges.
              </p>
            </div>
            <div className="w-full h-64 bg-muted rounded-lg">
              <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770346614/NASPO_I2ASPO_2025-258_tndplw.jpg" alt="WASICS 2026" className="w-full h-full object-cover rounded-lg" />
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
