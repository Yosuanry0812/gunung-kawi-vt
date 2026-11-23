// Temporary, licensed Gunung Kawi photographs; replace src with your own verified documentation.
// Keep dedicated slots empty when the matching subject or panorama has not been photographed.
export const media = {
  hero: {
    src: "/images/reference/gunung-kawi-07.webp",
    path: "/images/home/hero-gunung-kawi.jpg",
    id: "GK01",
  },
  introduction: {
    src: "/images/reference/gunung-kawi-02.webp",
    path: "/images/home/pakerisan-valley.jpg",
    id: "GK02",
  },
  east: {
    src: "/images/reference/gunung-kawi-07.webp",
    path: "/images/home/candi-timur.jpg",
    id: "P05",
  },
  west: {
    src: "/images/reference/gunung-kawi-01.webp",
    path: "/images/home/candi-barat.jpg",
    id: "P04",
  },
  river: {
    src: null,
    path: "/images/location/sungai-pakerisan.jpg",
    id: "P03",
  },
  hermitage: { src: null, path: "/images/history/pertapaan.jpg", id: "P06" },
  rice: {
    src: "/images/reference/gunung-kawi-rice-fields.webp",
    path: "/images/location/persawahan.jpg",
    id: "P08",
  },
  history: {
    src: "/images/reference/gunung-kawi-02.webp",
    path: "/images/history/candi-tebing.jpg",
    id: "GK03",
  },
  historyTemples: {
    src: "/images/reference/gunung-kawi-08.webp",
    path: "/images/history/kelompok-candi.jpg",
    id: "GK04",
  },
  historyNiches: {
    src: "/images/reference/gunung-kawi-05.webp",
    path: "/images/history/ceruk-candi.jpg",
    id: "GK05",
  },
  historyWorship: {
    src: "/images/reference/gunung-kawi-06.webp",
    path: "/images/history/pancuran-air.jpg",
    id: "GK06",
  },
  terraces: {
    src: "/images/reference/gunung-kawi-terraces.webp",
    path: "/images/location/sawah-berundak.jpg",
    id: "GK07",
  },
  tour: { src: null, path: "/images/virtual-tour/preview.jpg", id: "360°" },
} satisfies Record<string, { src: string | null; path: string; id: string }>;
export type MediaKey = keyof typeof media;
