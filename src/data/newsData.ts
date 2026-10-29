export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  originalImageUrl: string;
  sourceName: string;
  sourceUrl: string;
  publishedDate: string;
  year: string;
  category: string;
  readTime?: string;
}

export interface NewsYearOption {
  label: string;
  value: string;
  disabled: boolean;
}

export const availableNewsYears: NewsYearOption[] = [
  { label: "2026", value: "2026", disabled: false },
  { label: "2027 (Soon)", value: "2027", disabled: true },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "news-2026-1",
    title:
      "Alhamdulillah! Borong 3 Gold Medal, Little Inventors Mudipat Digdaya di Kancah Internasional WASISC 2026",
    excerpt:
      "Prestasi membanggakan ditorehkan siswa-siswi SD Muhammadiyah 4 Pucang Surabaya (Mudipat) di kancah internasional. Tiga tim Karya Ilmiah Remaja (KIR) Mudipat berhasil memborong 3 Gold Medal dalam ajang WASISC 2026 yang diikuti oleh 170 tim dari 10 negara di SMA Taruna Nusantara Kampus Malang.",
    imageUrl: "/img/news/mudipat-inventors.jpeg",
    originalImageUrl:
      "https://mudipat.co/wp-content/uploads/2026/10/inventors-mudipat-2.jpeg",
    sourceName: "Mudipat.co",
    sourceUrl:
      "https://mudipat.co/2026/10/26/alhamdulillah-borong-3-gold-medal-tim-little-inventors-mudipat-digdaya-di-kancah-internasional-wasisc-2026/",
    publishedDate: "26 Oktober 2026",
    year: "2026",
    category: "Prestasi Siswa",
    readTime: "3 min read",
  },
  {
    id: "news-2026-2",
    title:
      "MTsN 1 Pati Sabet Emas, Perak, & Special Award di Ajang Riset Internasional WASISC 2026",
    excerpt:
      "Dua tim riset terbaik dari MTsN 1 Pati berhasil mengukir prestasi gemilang di tingkat internasional dengan memborong medali emas, medali perak, dan Special Award pada ajang World Agriculture, Strategic Innovation & Cooperative Science Competition (WASISC) 2026 yang diselenggarakan oleh IYSA di Malang.",
    imageUrl: "/img/news/patinews-facebook.jpg",
    originalImageUrl:
      "https://scontent-mia5-1.xx.fbcdn.net/v/t39.99422-6/863828275_1147271377831915_4984229668778250986_n.png",
    sourceName: "Patinews",
    sourceUrl:
      "https://www.facebook.com/Patinews/posts/mtsn-1-pati-sabet-emas-perak-special-award-di-ajang-riset-internasional-wasisc-2/1612262540918059/",
    publishedDate: "27 Oktober 2026",
    year: "2026",
    category: "Liputan Media",
    readTime: "2 min read",
  },
  {
    id: "news-2026-3",
    title:
      "Gemilang di Kancah Internasional, SMARTIEST Mudipat Raih Gold Medal dan Best Poster WASISC 2026",
    excerpt:
      "SMARTIEST, tim SD Muhammadiyah 4 Surabaya (Mudipat) sukses meraih Gold Medal sekaligus Best Poster di bidang Social Science dengan inovasi FeelO, aplikasi pendamping emosi ramah anak pada ajang bergengsi WASISC 2026 yang diikuti peserta dari 10 negara.",
    imageUrl: "/img/news/mudipat-smartiest.jpg",
    originalImageUrl:
      "https://mudipat.co/wp-content/uploads/2026/10/IMG-20261026-WA0058.jpg",
    sourceName: "Mudipat.co",
    sourceUrl:
      "https://mudipat.co/2026/10/26/gemilang-di-kancah-internasional-smartiest-mudipat-raih-gold-medal-dan-best-poster-wasisc-2026/",
    publishedDate: "26 Oktober 2026",
    year: "2026",
    category: "Inovasi & Riset",
    readTime: "4 min read",
  },
  {
    id: "news-2026-4",
    title:
      "Tim Riset MTsN 1 Pati Borong Medali di Ajang Internasional WASISC 2026",
    excerpt:
      "Dua tim riset MTsN 1 Pati berhasil memboyong medali emas dan perak pada ajang internasional WASISC 2026 di SMA Taruna Nusantara Kampus Malang. Riset inovatif para siswa mendapat apresiasi tinggi dari para dewan juri internasional.",
    imageUrl: "/img/news/portalljateng-mtsn1pati.webp",
    originalImageUrl:
      "https://www.portalljateng.id/wp-content/uploads/2026/10/IMG_20261027_141016-1024x804.webp",
    sourceName: "PortallJateng.id",
    sourceUrl:
      "https://www.portalljateng.id/tim-riset-mtsn-1-pati-borong-medali-di-ajang-internasional-wasisc-2026/",
    publishedDate: "27 Oktober 2026",
    year: "2026",
    category: "Pendidikan",
    readTime: "3 min read",
  },
];
