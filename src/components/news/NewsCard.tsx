import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Globe, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsArticle } from "@/data/newsData";

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export const NewsCard = ({ article, index }: NewsCardProps) => {
  const [currentSrc, setCurrentSrc] = useState(article.imageUrl);
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageError = () => {
    if (currentSrc !== article.originalImageUrl && article.originalImageUrl) {
      setCurrentSrc(article.originalImageUrl);
    } else {
      setImageError(true);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full rounded-2xl bg-card border border-border/70 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Media Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted/40">
        {!imageError ? (
          <img
            src={currentSrc}
            alt={article.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
            onError={handleImageError}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
            <img
              src="/img/LOGO_WASICS_rjizeo.png"
              alt="WASICS Logo"
              className="max-h-16 w-auto object-contain opacity-85 mb-2"
            />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {article.sourceName}
            </span>
          </div>
        )}

        {/* Skeleton Shimmer before loaded */}
        {!isLoaded && !imageError && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-primary-foreground backdrop-blur-md shadow-md">
            {article.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-background/90 text-foreground backdrop-blur-md shadow-sm border border-border/50">
            {article.year}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta Header */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span className="font-medium text-foreground/80">{article.sourceName}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.publishedDate}</span>
          </div>
          {article.readTime && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm"
          >
            {article.title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1">
          {article.excerpt}
        </p>

        {/* Footer Action */}
        <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-auto gap-3">
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <span>Liputan Berita</span>
          </div>

          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="sm"
              className="gap-1.5 font-semibold text-xs shadow-sm hover:shadow group-hover:bg-primary transition-all duration-200"
            >
              <span>Kunjungi Sumber</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </motion.article>
  );
};
