import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Search,
  FileText,
  ExternalLink,
  Sparkles,
  Calendar,
  Layers,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news/NewsCard";
import { newsArticles, availableNewsYears, NewsArticle } from "@/data/newsData";

const NewsPage = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2026");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract unique categories for selected year
  const categories = useMemo(() => {
    const list = newsArticles
      .filter((item) => item.year === selectedYear)
      .map((item) => item.category);
    return ["All", ...Array.from(new Set(list))];
  }, [selectedYear]);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesYear = article.year === selectedYear;
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.sourceName.toLowerCase().includes(query);

      return matchesYear && matchesCategory && matchesSearch;
    });
  }, [selectedYear, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container-custom pt-36 md:pt-40 pb-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-5 border border-primary/20 shadow-sm">
            <Newspaper className="w-4 h-4" />
            <span className="tracking-wide uppercase">Media</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            WASICS <span className="text-gradient">News & Coverage</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Stay up to date on the latest news, national media coverage, and the
            achievements of young researchers at the World Agriculture,
            Strategic Innovation & Cooperative Science Competition.
          </p>
        </motion.div>

        {/* 1. Year Selector (Horizontal Pills matching Winners & Certificates) */}
        <div className="mb-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex p-1.5 bg-secondary/20 backdrop-blur-md rounded-full border border-border/70 gap-1 overflow-x-auto max-w-full"
          >
            {availableNewsYears.map((obj) => (
              <button
                key={obj.value}
                disabled={obj.disabled}
                onClick={() => {
                  if (!obj.disabled) {
                    setSelectedYear(obj.value);
                    setSelectedCategory("All");
                  }
                }}
                className={`relative px-8 py-2.5 rounded-full text-base font-bold transition-all duration-300 ${
                  selectedYear === obj.value
                    ? "text-primary-foreground shadow-md"
                    : obj.disabled
                      ? "text-muted-foreground/40 cursor-not-allowed bg-muted/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                {selectedYear === obj.value && (
                  <motion.div
                    layoutId="newsYearBackground"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {obj.label}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* 2. Controls: Search Bar & Category Filters */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Categories */}
          {/* <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1 mr-1">
              <Layers className="w-3.5 h-3.5" /> Kategori:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border/80 hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div> */}

          {/* Search Input */}
          <div className="relative min-w-[240px] md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari berita atau sumber..."
              className="w-full pl-9 pr-8 py-2 rounded-xl text-sm bg-card border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 rounded-full"
                aria-label="Hapus pencarian"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3. News Grid or Empty State */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {filteredArticles.map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 px-4 bg-card/60 rounded-2xl border border-dashed border-border"
          >
            <div className="w-16 h-16 rounded-full bg-muted/60 flex items-center justify-center mx-auto mb-4 text-muted-foreground">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Tidak Ada Berita Ditemukan
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
              Tidak ditemukan artikel yang cocok dengan filter atau kata kunci{" "}
              <span className="font-semibold text-foreground">
                "{searchQuery}"
              </span>
              . Silakan coba kata kunci lain.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Reset Filter
            </Button>
          </motion.div>
        )}

        {/* 4. Official Press Release Highlight Card */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground shadow-xl"
        >
          Subtle Background Glow
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span>Dokumen Resmi WASISC {selectedYear}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
                Unduh Press Release Resmi WASISC 2026
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Dapatkan informasi resmi mengenai statistik kompetisi, daftar
                negara peserta, sambutan penyelenggara, dan rangkuman kegiatan
                dalam dokumen Press Release resmi.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://drive.google.com/file/d/187S-iey2KpMkP06vlo8jaY68RtSKazbz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-yellow-400 font-bold px-6 shadow-lg hover:shadow-xl transition-all duration-200 gap-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Buka Press Release</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div> */}
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
