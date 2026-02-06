
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
          <div className="space-y-12">
            {/* IYSA */}
            <motion.div
              className="relative rounded-2xl overflow-hidden h-96"
              whileHover="hover"
            >
              <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770347332/tarnus_gyiif_qmhkpj.jpg" alt="IYSA" className="w-full h-full object-cover" />
              <motion.div
                className="absolute inset-0 bg-black/20 p-6 flex flex-col justify-end"
                variants={{
                  hover: { backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.4)" }
                }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770274542/Desain_tanpa_judul_4_bperwk.png" alt="IYSA Logo" className="w-24 h-24 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  IYSA
                </h3>
                <motion.p
                  className="text-white/80 text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  variants={{ hover: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  The Indonesian Young Scientist Association (IYSA) is an institution engaged in the development of the potential, talents, and creativity of Indonesian students in non-academic fields.
                </motion.p>
              </motion.div>
            </motion.div>
            {/* SMA Taruna Nusantara */}
            <motion.div
              className="relative rounded-2xl overflow-hidden h-96"
              whileHover="hover"
            >
              <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770346867/tarnus_malang_neaeje.jpg" alt="SMA Taruna Nusantara" className="w-full h-full object-cover" />
              <motion.div
                className="absolute inset-0 bg-black/20 p-6 flex flex-col justify-end"
                variants={{
                  hover: { backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.4)" }
                }}
                transition={{ duration: 0.3 }}
              >
                <img src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1770274333/Desain_tanpa_judul_3_lbanwu.png" alt="SMA Taruna Nusantara Logo" className="w-24 h-24 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  SMA Taruna Nusantara
                </h3>
                <motion.p
                  className="text-white/80 text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  variants={{ hover: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  SMA Taruna Nusantara is a boarding high school in Magelang, Central Java, Indonesia. Established in 1990, it has a reputation for producing future leaders.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
