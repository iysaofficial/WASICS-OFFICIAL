import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sprout,
  Wheat,
  Cpu,
  GraduationCap,
  Recycle,
  AlertTriangle,
  Lightbulb,
  Users,
  HeartPulse,
  TreeDeciduous,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const categories = [
  {
    icon: Sprout,
    title: "Plant & Crop Science",
    description: "Research in plant biology, genetics, and crop improvement",
  },
  {
    icon: Wheat,
    title: "Food Security & Sustainable Agriculture",
    description: "Solutions for global food challenges and sustainable farming",
  },
  {
    icon: Cpu,
    title: "AI & IoT in Agriculture",
    description: "Smart farming technologies and precision agriculture",
  },
  {
    icon: GraduationCap,
    title: "Education & Social Impact Studies",
    description: "Educational innovation and community development research",
  },
  {
    icon: Recycle,
    title: "Digital & Sustainable Cooperative Innovation",
    description: "Digital transformation for cooperative sustainability",
  },
  {
    icon: AlertTriangle,
    title: "Disaster & Crisis Studies",
    description: "Research on disaster preparedness and crisis management",
  },
  {
    icon: Lightbulb,
    title: "Innovation for Public Systems",
    description: "Innovations improving public infrastructure and services",
  },
  {
    icon: Users,
    title: "Social Science",
    description: "Research on society, culture, and human behavior",
  },
  {
    icon: HeartPulse,
    title: "Life Science",
    description: "Biology, health sciences, and biotechnology research",
  },
  {
    icon: TreeDeciduous,
    title: "Environmental Science",
    description: "Climate change, conservation, and environmental protection",
  },
];

const CategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section id="categories" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground font-semibold text-sm mb-4">
            Competition Categories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            10 Fields of{" "}
            <span className="text-gradient">Scientific Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose your category and showcase your research in one of these 
            impactful fields of study.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group relative p-6 bg-card rounded-2xl border border-border shadow-soft hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                { !isMobile && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
