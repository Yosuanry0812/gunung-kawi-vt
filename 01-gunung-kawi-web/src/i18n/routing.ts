export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const pageKeys = ["home", "history", "location", "tour"] as const;
export type PageKey = (typeof pageKeys)[number];
export const slugs: Record<Locale, Record<PageKey, string>> = {
  id: {
    home: "",
    history: "sejarah",
    location: "lokasi",
    tour: "virtual-tour",
  },
  en: {
    home: "",
    history: "history",
    location: "location",
    tour: "virtual-tour",
  },
};
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
export function href(locale: Locale, page: PageKey) {
  return `/${locale}${slugs[locale][page] ? `/${slugs[locale][page]}` : ""}`;
}
export function resolvePage(locale: Locale, slug: string): PageKey | undefined {
  return pageKeys.find((key) => slugs[locale][key] === slug);
}
