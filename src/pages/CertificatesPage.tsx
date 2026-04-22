import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Truck, Presentation, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificatesPage = () => {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedCategory, setSelectedCategory] = useState("Offline");

  const availableYears = [
    { label: "2026", value: "2026", disabled: false },
    { label: "2027 (Soon)", value: "2027", disabled: true }
  ];

  // Logic for switching drive links based on Mode
  const getDriveLink = (year: string, category: string) => {
    // Modify these links when the actual Google Drive folders are ready
    if (year === "2026" && category === "Offline") return "";
    if (year === "2026" && category === "Online") return "";
    return "";
  };

  const currentDriveLink = getDriveLink(selectedYear, selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-custom pt-40 pb-20">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <ShieldCheck className="w-5 h-5" />
            <span className="tracking-wide uppercase">Official Document Portal</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Certificate <span className="text-gradient">Center</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Secure digital repository for official WASICS certificates. Please read the distribution guidelines below based on your participation role.
          </p>
        </motion.div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 max-w-7xl mx-auto">

          {/* LEFT COLUMN: GUIDELINES FOR PARTICIPANTS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-card/40 backdrop-blur-xl border border-white/10 shadow-soft rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/10 transition-colors duration-700" />

              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Participant Notice
              </h2>

              <div className="space-y-8">
                {/* Offline Participant Notice */}
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 shrink-0 bg-secondary/30 rounded-2xl flex items-center justify-center text-foreground border border-border shadow-sm">
                    <Presentation className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Offline Participants</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All physical certificates for offline competition participants are <strong className="text-foreground">handed over directly on the award stage</strong> or at the registration desk during the event.
                    </p>
                  </div>
                </div>

                {/* Online Participant Notice */}
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                    <Truck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Online Participants</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your original printed certificates and medals are <strong className="text-primary">shipped via delivery expedition</strong> directly to your registered school or team leader's address.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-4">
                <div className="text-amber-500 font-bold text-2xl">!</div>
                <p className="text-amber-500/90 text-sm font-medium">Digital downloads in this portal are exclusively reserved for Supervisors / Accompanying Teachers.</p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: SUPERVISOR DRIVE VAULT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-gradient-to-br from-card/80 to-background backdrop-blur-2xl border border-primary/20 shadow-[0_8px_30px_rgb(16,185,129,0.06)] rounded-[2rem] p-8 md:p-10">

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">Supervisor Certificate</h2>
                  <p className="text-muted-foreground font-medium">Access your e-Certificates via Google Drive</p>
                </div>

                {/* Year Pills */}
                <div className="flex p-1 bg-secondary/50 rounded-full border border-border">
                  {availableYears.map(y => (
                    <button
                      key={y.value}
                      disabled={y.disabled}
                      onClick={() => setSelectedYear(y.value)}
                      className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${y.disabled ? 'opacity-40 cursor-not-allowed' : selectedYear === y.value ? 'bg-background shadow-md text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {y.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Switcher */}
              <div className="flex p-1.5 bg-background border border-border shadow-inner rounded-2xl mb-8">
                {['Offline', 'Online'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-1 py-3 font-bold rounded-xl transition-all ${selectedCategory === cat ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:bg-secondary/50'}`}
                  >
                    {cat} Mode
                  </button>
                ))}
              </div>

              {/* Search Toolkit Tip */}
              <div className="flex items-center gap-3 bg-secondary/40 p-4 rounded-xl mb-8 border border-border">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <p className="text-sm text-muted-foreground font-medium">
                  <strong className="text-foreground">Pro Tip:</strong> Once inside the Drive folder, press <kbd className="bg-background px-2 py-1 rounded shadow-sm border border-border text-xs mx-1">Ctrl+F</kbd> and type your School Name or Team ID to locate your document instantly.
                </p>
              </div>

              {/* Vault Links */}
              <div className="space-y-4">
                <div className="group flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 rounded-[2rem] border border-white/10 bg-card/40 hover:bg-card/80 hover:border-primary/40 shadow-soft hover:shadow-elevated transition-all duration-500 gap-6">
                  <div className="flex items-center gap-5 w-full sm:w-auto">
                    <div className="w-16 h-16 rounded-[1.2rem] bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg transition-all duration-500">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">{selectedYear} {selectedCategory} Certificates</h4>
                      <p className="text-muted-foreground text-sm font-medium">All educational levels included</p>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto">
                    {currentDriveLink ? (
                      <Button asChild className="w-full sm:w-auto rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-bold" size="lg">
                        <a href={currentDriveLink} target="_blank" rel="noopener noreferrer">
                          Access Drive <ExternalLink className="w-5 h-5 ml-2" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="secondary" disabled className="w-full sm:w-auto rounded-xl opacity-70 cursor-not-allowed font-bold" size="lg">
                        Preparing Drive...
                      </Button>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default CertificatesPage;
