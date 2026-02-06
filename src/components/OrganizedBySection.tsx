import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OrganizedBySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const organizers = [
    {
      name: "Indonesian Young Scientist Association",
      role: "Main Organizer",
      logo: "https://res.cloudinary.com/dtik1z1qd/image/upload/v1770274542/Desain_tanpa_judul_4_bperwk.png",
    },
    {
      name: "SMA Taruna Nusantara",
      role: "Co-Organizer",
      logo: "https://res.cloudinary.com/dtik1z1qd/image/upload/v1770274333/Desain_tanpa_judul_3_lbanwu.png",
    },
  ];

  return (
    <section id="organized-by" className="section-padding bg-[radial-gradient(ellipse_at_center,hsl(var(--secondary)/0.1),transparent_70%)]" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-20">
            Organized By
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {organizers.map((organizer, index) => (
              <motion.div
                key={organizer.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-7">
                  <img
                    src={organizer.logo}
                    alt={`${organizer.name} Logo`}
                    className="h-40 w-40 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  {organizer.name}
                </h3>
                {/* <p className="text-muted-foreground text-sm">{organizer.role}</p> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizedBySection;
