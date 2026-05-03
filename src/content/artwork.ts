type ArtworkItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export const artworkContent = {
  intro: {
    kicker: "Artwork",
    title: "Images, diagrams, and experiments in cosmic texture.",
    description:
      "A future cabinet for science-adjacent artwork: false-color astronomy, handmade diagrams, screen artifacts, and small visual studies.",
  },
  artworks: [
    {
      title: "Signal Study I",
      description:
        "Color, texture, and cosmic noise arranged like a found broadcast.",
      src: "/images/artwork/art-1.jpg",
      alt: "Artwork study one",
    },
    {
      title: "Signal Study II",
      description: "A second visual fragment from the archive of strange light.",
      src: "/images/artwork/art-2.jpg",
      alt: "Artwork study two",
    },
  ] satisfies ArtworkItem[],
} as const;
