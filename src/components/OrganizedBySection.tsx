import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OrganizedBySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const organizers = [
    {
      name: "Indonesian Young Scientist Association",
      // role: "Main Organizer",
      logo: "https://res.cloudinary.com/dtik1z1qd/image/upload/v1770274542/Desain_tanpa_judul_4_bperwk.png",
    },
    {
      name: "SMA Taruna Nusantara Kampus Malang",
      // role: "Co-Organizer",
      logo: "https://res.cloudinary.com/dtik1z1qd/image/upload/v1770274333/Desain_tanpa_judul_3_lbanwu.png",
    },
  ];

  return (
    <section id="organized-by" className="section-padding bg-[radial-gradient(ellipse_at_center,hsl(var(--secondary)/0.1),transparent_70%)] relative overflow-hidden" ref={ref}>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
            <span className="text-gradient">Organized</span> By
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto relative pt-4">
            {/* Animated Connecting Line (Desktop specific) */}
            <div className="hidden md:block absolute top-[40%] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -z-10 opacity-50" />

            {organizers.map((organizer, index) => (
              <motion.div
                key={organizer.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.2, type: "spring", stiffness: 80 }}
                className="group relative"
              >
                {/* Outer Glowing Aura Backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* Premium Glass Card */}
                <div className="relative h-full bg-card/60 backdrop-blur-xl border border-border/60 rounded-[2rem] p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">

                  {/* Subtle Inner Ambient Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-[4rem] group-hover:bg-primary/20 transition-colors duration-700 -z-10" />

                  {/* Elegant Role Badge */}
                  {/* <span className="px-5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-10 border border-primary/20 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 shadow-sm">
                    {organizer.role}
                  </span> */}

                  {/* Levitating Logo Container */}
                  <div className="relative mb-10 w-44 h-44 md:w-52 md:h-52 flex items-center justify-center transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-3">
                    <img
                      src={organizer.logo}
                      alt={`${organizer.name} Logo`}
                      className="w-full h-full object-contain filter drop-shadow-xl transition-all duration-500"
                      style={{
                        WebkitBoxReflect: "below 5px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.1))"
                      }}
                    />
                  </div>

                  {/* Organizer Name */}
                  <div className="mt-auto px-4">
                    <h3 className="font-bold text-foreground text-xl md:text-2xl leading-snug group-hover:text-primary transition-colors duration-300">
                      {organizer.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizedBySection;
