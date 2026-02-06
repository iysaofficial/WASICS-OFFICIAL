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
                SMA Taruna Nusantara Malang
              </span>
              , this competition provides a platform for young researchers to
              showcase their innovative solutions to global challenges.
            </p>

            <div className="mt-2">
              <a href="/about" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Learn More
              </a>
            </div>

          </motion.div>

          {/* Features Grid */}
          { !isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group p-6 bg-card rounded-2xl border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex justify-center flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
