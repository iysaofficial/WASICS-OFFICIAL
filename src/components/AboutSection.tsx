import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe2, Users, Target } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  const features = [
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Connecting young scientists from over 50 countries worldwide",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Recognizing outstanding research and innovation in science",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building networks for future scientific breakthroughs",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Addressing real-world challenges through student research",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-center lg:items-start text-justify lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              About The Event
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Uniting Young Minds for a{" "}
              <span className="text-gradient">Sustainable Future</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              WASISC 2026 is a premier international science competition
              bringing together talented students from Junior High to University level.
              This groundbreaking event focuses on Agriculture, Strategic Innovation,
              and Cooperative Science.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Proudly organized through a collaboration between the{" "}
              <span className="font-semibold text-foreground">
                Indonesian Young Scientist Association (IYSA)
              </span>{" "}
              and{" "}
              <span className="font-semibold text-foreground">
                SMA Taruna Nusantara Kampus Malang
              </span>
              , this competition provides a platform for young researchers to
              showcase their innovative solutions to global challenges.
            </p>

            <div className="mt-2">
              <a href="/about" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Read More
              </a>
            </div>

          </motion.div>

          {/* Features Grid */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6 lg:gap-8 relative z-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                  className="group p-8 lg:p-10 bg-card/80 backdrop-blur-md rounded-3xl border border-border shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 flex flex-col justify-start items-start text-left relative overflow-hidden min-h-[220px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Giant Watermark Icon */}
                  <feature.icon
                    strokeWidth={1}
                    className="absolute -bottom-8 -right-8 w-40 h-40 lg:-bottom-12 lg:-right-12 lg:w-56 lg:h-56 text-primary/[0.08] group-hover:text-primary/[0.16] transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-12 z-0"
                  />

                  <h3 className="relative font-bold text-foreground text-2xl mb-4 tracking-tight z-10 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="relative text-muted-foreground text-base leading-relaxed z-10 pr-4">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
