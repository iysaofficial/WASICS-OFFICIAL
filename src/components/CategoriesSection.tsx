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
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05, type: "spring", stiffness: 80 }}
              className="group relative pt-5 px-4 pb-16 md:pt-6 md:px-6 md:pb-24 bg-card/80 backdrop-blur-sm rounded-3xl border border-border shadow-soft hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden min-h-[160px] md:min-h-[190px] flex flex-col justify-start items-center text-center"
            >
              {/* Hover Ambient Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Bottom Attached Watermark Icon */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-0">
                <category.icon
                  strokeWidth={1}
                  className="w-28 h-28 md:w-36 md:h-36 text-primary/[0.08] group-hover:text-primary/[0.20] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-110"
                />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="font-bold text-foreground text-sm md:text-base leading-snug mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                {!isMobile && (
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-[98%]">
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
