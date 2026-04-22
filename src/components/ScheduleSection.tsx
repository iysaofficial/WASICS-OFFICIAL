import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Monitor, Trophy, Clock, FileText } from "lucide-react";

const scheduleItems = [
  {
    date: "September 4th, 2026",
    day: "Deadline",
    title: "Registration Deadline",
    type: "Online | Offline",
    icon: Clock,
    description: "Final date to submit team registrations for the competition.",
    highlight: false,
  },
  {
    date: "September 11th, 2026",
    day: "Deadline",
    title: "Payment & Submission Deadline",
    type: "Online | Offline",
    icon: FileText,
    description: "Deadline to complete necessary payments and submit project details.",
    highlight: false,
  },
  {
    date: "October 23rd, 2026",
    day: "Day 1",
    title: "Opening Ceremony & Online Judging",
    type: "Online | Offline",
    icon: Monitor,
    description: "Opening Ceremony for all participants, followed by Online Judging for online participants.",
    highlight: true,
  },
  {
    date: "October 24th, 2026",
    day: "Day 2",
    title: "Offline Judging Session",
    type: "Offline",
    icon: MapPin,
    description: "In-person offline judging sessions at the venue for onsite participants.",
    highlight: false,
  },
  {
    date: "October 25th, 2026",
    day: "Day 3",
    title: "Free Time (Tentative)",
    type: "Offline",
    icon: Calendar,
    description: "Free time for offline participants to relax and explore.",
    highlight: false,
  },
  {
    date: "October 26th, 2026",
    day: "Day 4",
    title: "Awarding Ceremony",
    type: "Online | Offline",
    icon: Trophy,
    description: "Grand finale celebration with online and offline awarding ceremonies.",
    highlight: true,
  },
];

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="section-padding bg-gradient-to-b from-background to-accent/10" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Event Schedule
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Days of{" "}
            <span className="text-gradient">Scientific Discovery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mark your calendar for these important dates. Join us for an
            unforgettable journey of innovation and discovery.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {scheduleItems.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`relative flex items-start gap-8 mb-8 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow -translate-x-1/2 z-10" />

                {/* Date Badge (Desktop) */}
                <div
                  className={`hidden md:flex flex-1 ${index % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"
                    }`}
                >
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">{item.day}</div>
                    <div className="text-lg font-bold text-foreground">{item.date}</div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div
                    className={`relative overflow-hidden p-6 rounded-2xl border ${item.highlight
                      ? "bg-primary/5 border-primary/20"
                      : "bg-card border-border"
                      } shadow-soft hover:shadow-elevated transition-all duration-300 group`}
                  >
                    {/* Left Attached Watermark Icon */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none z-0">
                      <item.icon
                        className={`w-28 h-28 md:w-32 md:h-32 -translate-x-1/4 opacity-[0.08] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-2 group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-[0.15] ${item.highlight ? "text-primary" : "text-foreground"
                          }`}
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Mobile Date */}
                      <div className="md:hidden mb-3">
                        <span className="text-xs font-semibold text-primary">{item.day}</span>
                        <span className="text-xs text-muted-foreground ml-2">{item.date}</span>
                      </div>

                      <div className="flex items-start gap-4">
                        {/* Spacer to perfectly maintain exact previous layout distance */}
                        <div className="w-12 flex-shrink-0" />

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.type === "Online | Offline"
                                ? "bg-accent/20 text-accent"
                                : item.type === "Offline" || item.type === "Tentative"
                                  ? "bg-secondary/30 text-secondary-foreground"
                                  : "bg-muted text-muted-foreground"
                                }`}
                            >
                              {item.type}
                            </span>
                          </div>
                          <h3 className="font-bold text-foreground text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
