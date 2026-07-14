"use client";

import Image from "next/image";
import { useEffect, useState, type MouseEvent } from "react";

type ArtworkItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

type ArtworkSection = {
  artworks: readonly ArtworkItem[];
};

type GalleryArtworkItem = ArtworkItem & {
  sectionIndex: number;
};

export function ArtGallery({
  sections,
}: Readonly<{
  sections: readonly ArtworkSection[];
}>) {
  const [activeArtwork, setActiveArtwork] = useState<GalleryArtworkItem | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (!activeArtwork) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveArtwork(null);
      }
    }

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeArtwork]);

  const selectedSection = sections[activeSection] ?? sections[0];

  return (
    <>
      <div className="art-tabs" role="tablist" aria-label="Artwork categories">
        {sections.map((_, index) => {
          const isActive = index === activeSection;

          return (
            <button
              key={`section-${index}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`art-tab${isActive ? " active" : ""}`}
              onClick={() => setActiveSection(index)}
            >
              {`Category ${index + 1}`}
            </button>
          );
        })}
      </div>

      <div className="art-sections" aria-label="Artwork gallery sections">
        <section className="art-section" key={`section-${activeSection}`}>
          <div className="art-grid">
            {selectedSection.artworks.map((artwork) => (
              <article className="art-card" key={artwork.src}>
                <button
                  className="art-card-button"
                  type="button"
                  onClick={() => setActiveArtwork({ ...artwork, sectionIndex: activeSection })}
                  aria-label="Open artwork"
                >
                  <Image
                    src={artwork.src}
                    alt={artwork.alt}
                    width={520}
                    height={360}
                  />
                </button>
                <h2>{artwork.title}</h2>
                <p>{artwork.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {activeArtwork ? (
        <div
          className="art-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="art-modal-title"
          onClick={() => setActiveArtwork(null)}
        >
          <div
            className="art-modal-window"
            onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
          >
            <button
              className="art-modal-close"
              type="button"
              onClick={() => setActiveArtwork(null)}
              aria-label="Close artwork"
            >
              X
            </button>
            <Image
              src={activeArtwork.src}
              alt={activeArtwork.alt}
              width={1200}
              height={900}
              priority
            />
            <div className="art-modal-caption">
              <h2 id="art-modal-title">{activeArtwork.title}</h2>
              <p>{activeArtwork.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
