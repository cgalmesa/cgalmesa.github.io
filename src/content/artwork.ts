type ArtworkItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

type ArtworkSection = {
  artworks: readonly ArtworkItem[];
};

export const artworkContent = {
  intro: {
    kicker: "Artwork",
    title: "Art Portfolio",
    description:
      "A visual archive of my artwork, inspired by the experiences of growing up on the internet, and how that had an impact on my relationship with the world around me. Works also explore the role of technology and science within our lives as 21st century humans and the aburdity of the universe.",
  },
  sections: [
    {
      artworks: [
        {
          title: "Artwork for Stargazing event",
          description: "Digital, 2025",
          src: "/images/artwork/stargazing-event.jpg",
          alt: "Artwork for Stargazing event",
        },
        {
          title: "Study of Saturn's surface",
          description: "Mixed media, 2025",
          src: "/images/artwork/study-of-saturn's-surface.jpg",
          alt: "Study of Saturn's surface",
        },
        {
          title: "Astro 9 logo",
          description: "Digital illustration, 2025",
          src: "/images/artwork/Astro-9-logo.jpg",
          alt: "Astro 9 logo",
        },
      ],
    },
    {
      artworks: [
        {
          title: "Earth",
          description: "Oil on wood panel, 20 x 16 inches, 2026",
          src: "/images/artwork/Earth_2026.jpg",
          alt: "Earth",
        },
        {
          title: "you gotta do it",
          description: "acrylic on paper, 8 x 12 inches, 2025",
          src: "/images/artwork/you_gotta_do_it.png",
          alt: "you gotta do it",
        },
        {
          title: "Still life with robot",
          description: "acrylic on paper, 18 x 24 inches, 2025",
          src: "/images/artwork/still_life2025.jpg",
          alt: "Still life with robot",
        },
        {
          title: "j14071 b Series",
          description: "Gouache on paper, 3 x 6 x 4 inches, 2024",
          src: "/images/artwork/j14071b.jpg",
          alt: "j14071 b Series",
        },
        {
          title: "untitled",
          description: "acrylic on paper, 18 x 24 inches, 2025",
          src: "/images/artwork/Google_maps_dog.jpg",
          alt: "untitled",
        },
      ],
    },
    {
      artworks: [
        {
          title: "Selected sketchbook pages",
          description: "gouache on paper, 3 x 4 inches, 2024",
          src: "/images/artwork/sketchbook-pg.jpg",
          alt: "Selected sketchbook pages",
        },
      ],
    },
  ] satisfies ArtworkSection[],
} as const;
