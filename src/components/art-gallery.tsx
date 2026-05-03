"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ArtworkItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export function ArtGallery({
  artworks,
}: Readonly<{
  artworks: readonly ArtworkItem[];
}>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeArtwork =
    activeIndex === null ? null : artworks[activeIndex] ?? null;

  useEffect(() => {
    if (!activeArtwork) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
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
      <section className="art-grid" aria-label="Artwork gallery">
        {artworks.map((artwork, index) => (
          <article className="art-card" key={artwork.src}>
            <button
              className="art-card-button"
              type="button"
              onClick={() => setActiveIndex(index)}
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
      </section>

      {activeArtwork ? (
        <div
          className="art-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="art-modal-title"
          onClick={() => setActiveIndex(null)}
        >
          <div className="art-modal-window" onClick={(event) => event.stopPropagation()}>
            <button
              className="art-modal-close"
              type="button"
              onClick={() => setActiveIndex(null)}
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
