import { motion } from "framer-motion";
import { ArrowRight, Book, Map, Globe2, Lightbulb, Compass, Leaf, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Animated Background Icons (Watermark Style) */}
      {[
        { Icon: Globe2, className: "w-32 h-32 md:w-64 md:h-64 top-[5%] left-[-10%] md:top-10 md:left-5 text-primary/[0.08] md:text-primary/[0.16]", y: -30, x: 20, rotate: 10 },
        { Icon: Lightbulb, className: "w-24 h-24 md:w-56 md:h-56 bottom-[10%] left-[5%] md:bottom-20 md:left-24 text-secondary/[0.05] md:text-secondary/[0.12]", y: 40, x: -20, rotate: -15 },
        { Icon: Compass, className: "w-40 h-40 md:w-72 md:h-72 top-[15%] right-[-15%] md:top-20 md:right-10 text-primary/[0.12] md:text-primary/[0.12]", y: -50, x: -30, rotate: 20 },
        { Icon: Leaf, className: "w-28 h-28 md:w-48 md:h-48 bottom-[5%] right-[-5%] md:bottom-32 md:right-24 text-primary/[0.08] md:text-primary/[0.16]", y: 30, x: 40, rotate: -10 },
        { Icon: Atom, className: "hidden md:block w-[30rem] h-[30rem] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-primary/[0.08]", y: -20, x: 20, rotate: 45 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className={`absolute pointer-events-none z-0 ${item.className}`}
          animate={{
            y: [0, item.y, 0],
            x: [0, item.x, 0],
            rotate: [0, item.rotate, 0],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.Icon strokeWidth={1} className="w-full h-full" />
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6"
          >
            <Map className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-foreground">
              Malang, Indonesia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-9"
          >
            <span className="text-foreground">World Agriculture, </span>
            <span className="text-gradient">Strategic Studies</span>
            <span className="text-foreground"> & Innovation Science Competition</span>
            <span className="text-gradient block mt-3"> (WASISC) 2026</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Empowering young researchers to address global challenges in food security,
            public innovation, and resilience through science and collaboration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/homeregist">
              <Button variant="hero" size="xl">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="https://drive.google.com/file/d/1KfXvKOWGs_rpP0M2DRln8EHbO_Rvj84q/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl">
                <Book className="w-5 h-5" />
                Guidebook
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "50+", label: "Countries" },
              { value: "1000+", label: "Participants" },
              { value: "10", label: "Categories" },
              { value: "4", label: "Event Days" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
