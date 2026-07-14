"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ArtworkItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

type ArtworkSection = {
  title: string;
  description: string;
  artworks: readonly ArtworkItem[];
};

type GalleryArtworkItem = ArtworkItem & {
  sectionTitle: string;
};

export function ArtGallery({
  sections,
}: Readonly<{
  sections: readonly ArtworkSection[];
}>) {
  const [activeArtwork, setActiveArtwork] = useState<GalleryArtworkItem | null>(null);

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

  return (
    <>
      <div className="art-sections" aria-label="Artwork gallery sections">
        {sections.map((section) => (
          <section className="art-section" key={section.title}>
            <div className="art-section-heading">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <div className="art-grid">
              {section.artworks.map((artwork) => (
                <article className="art-card" key={`${section.title}-${artwork.src}`}>
                  <button
                    className="art-card-button"
                    type="button"
                    onClick={() =>
                      setActiveArtwork({ ...artwork, sectionTitle: section.title })
                    }
                  >
                    <Image
                      src={artwork.src}
                      alt={artwork.alt}
                      width={520}
                      height={360}
                    />
                    <span className="sr-only">Open {artwork.title}</span>
                  </button>
                  <h2>{artwork.title}</h2>
                  <p>{artwork.description}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {activeArtwork ? (
        <div
          className="art-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="art-modal-title"
          onClick={() => setActiveArtwork(null)}
        >
          <div className="art-modal-window" onClick={(event) => event.stopPropagation()}>
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
              <p>{activeArtwork.sectionTitle}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
