import { dictionary } from "@/i18n";
import { type Locale, type PageKey } from "@/i18n/routing";
import { historyRows } from "@/content/history";
import { media } from "@/content/media";
import { photographByPath } from "@/content/photography";
import { locationConfig, scenes } from "@/content/locations";
import { tourFeatures } from "@/content/visitor-information";
import { MediaPanel, SiteBackdrop } from "./media-panel";
import { MapPanel } from "./map-panel";
import { PhotoGallery } from "./photo-gallery";
import { Eyebrow, PageLink } from "./shared";
import { Reveal } from "./reveal";
import { VirtualTourLaunchButton } from "./virtual-tour-launch-button";

export function HomePage({ locale }: { locale: Locale }) {
  const d = dictionary(locale);
  return (
    <>
      <SiteBackdrop />
      <section className="home-hero">
        <div className="container hero-layout">
          <Reveal className="hero-copy">
            <Eyebrow>{d.home.eyebrow}</Eyebrow>
            <h1>
              {d.home.title} <span>{d.home.titleAccent}</span>
            </h1>
            <p className="hero-description">{d.home.description}</p>
          </Reveal>
          <Reveal className="hero-art" delay={0.12}>
            <PhotoGallery locale={locale} priority />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PageHero({
  locale,
  page,
}: {
  locale: Locale;
  page: Exclude<PageKey, "home">;
}) {
  const d = dictionary(locale);
  const content = d.pages[page];
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1>
            {content.title} <span>{content.accent}</span>
          </h1>
          <p>{content.description}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function HistoryPage({ locale }: { locale: Locale }) {
  const d = dictionary(locale);
  return (
    <>
      <SiteBackdrop name="history" />
      <PageHero locale={locale} page="history" />
      <section className="container page-content history-content">
        {historyRows.map((row, index) => (
          <div
            className={`history-row ${index % 2 ? "row-reverse" : ""}`}
            key={row.image}
          >
            <Reveal className="glass-panel history-copy">
              {row.sections[locale].map((item) => (
                <section key={item.title}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </section>
              ))}
            </Reveal>
            <Reveal className="history-visual" delay={0.1}>
              <MediaPanel
                name={row.image}
                locale={locale}
                caption={
                  photographByPath.get(media[row.image].src)?.alt[locale] ??
                  d.home.heroCaption
                }
              />
            </Reveal>
          </div>
        ))}
      </section>
    </>
  );
}

export function LocationPage({ locale }: { locale: Locale }) {
  const d = dictionary(locale);
  const { latitude, longitude } = locationConfig.coordinates;
  return (
    <>
      <SiteBackdrop name="rice" />
      <PageHero locale={locale} page="location" />
      <section className="container page-content place">
        <Reveal className="place-intro">
          <p className="place-lead">{d.home.locationText}</p>
          <dl className="place-facts">
            <div>
              <dt>{d.locationPage.addressLabel}</dt>
              <dd>{d.locationPage.mapDescription}</dd>
            </div>
            <div>
              <dt>{d.locationPage.coordinatesLabel}</dt>
              <dd>
                {latitude.toFixed(4)}, {longitude.toFixed(4)}
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal className="place-map">
          <MapPanel locale={locale} />
        </Reveal>
      </section>
    </>
  );
}

export function TourPage({ locale }: { locale: Locale }) {
  const d = dictionary(locale);
  return (
    <>
      <SiteBackdrop />
      <PageHero locale={locale} page="tour" />
      <section className="container page-content tour">
        <div className="tour-stage">
          <Reveal className="tour-viewer">
            <PhotoGallery locale={locale} />
            <p className="tour-viewer-note">{d.tourPage.previewLabel}</p>
          </Reveal>
          <Reveal className="tour-panel" delay={0.08}>
            <h2>{d.tourPage.previewTitle}</h2>
            <p>{d.tourPage.previewText}</p>
            <VirtualTourLaunchButton locale={locale} />
            <h3>{d.tourPage.howTitle}</h3>
            <ol>
              {d.tourPage.instructions.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ol>
          </Reveal>
        </div>
        <Reveal className="tour-features-list">
          <h2>{d.tourPage.featuresTitle}</h2>
          <p>{d.tourPage.featuresNote}</p>
          <ol>
            {tourFeatures[locale].map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="tour-points">
          <h2>{d.tourPage.inventoryTitle}</h2>
          <p>{d.tourPage.inventoryNote}</p>
          <ul>
            {scenes.map((scene) => (
              <li key={scene.sceneId}>
                <span>{scene.sceneId}</span>
                {locale === "id" ? scene.nameId : scene.nameEn}
              </li>
            ))}
          </ul>
          <PageLink locale={locale} page="home" variant="text">
            {d.common.back}
          </PageLink>
        </Reveal>
      </section>
    </>
  );
}
