type ResearchThread = {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  imagePlacement?: "left" | "right";
};

type ResearchContent = {
  intro: {
    kicker: string;
    title: string;
    description: string;
  };
  tableOfContents: {
    title: string;
    suffix: string;
  };
  threads: ResearchThread[];
};

export const researchContent: ResearchContent = {
  intro: {
    kicker: "Research Archive",
    title: "Astrophysics notes from the edge of the observable.",
    description:
      "A simple home for project summaries, paper links, observing runs, and the questions that keep returning after the plots are rendered.",
  },
  tableOfContents: {
    title: "Research Threads",
    suffix: "jump to project box",
  },
  threads: [
    {
      id: "strong-lensing",
      title: "Strong Lensing Candidates",
      description:
        "Finding warped arcs, duplicated sources, and strange alignments where gravity turns massive galaxies into natural telescopes.",
      image: "/images/backgrounds/space-bg.jpg",
      imageAlt:
        "A dense star field used as a placeholder for lensing research.",
      imagePlacement: "left",
    },
    {
      id: "galaxy-morphology",
      title: "Galaxy Morphology Notes",
      description:
        "Comparing structure, color, and environment to ask how galaxies assemble, collide, fade, and flare across cosmic time.",
      image: "/images/research/globe.svg",
      imageAlt: "A simple globe icon used as a placeholder for galaxy morphology.",
      imagePlacement: "right",
    },
    {
      id: "redshift-toolkit",
      title: "Spectral Redshift Toolkit",
      description:
        "Working notes for identifying lines, checking filters, and turning faint spectral fingerprints into distance estimates.",
      image: "/images/research/window.svg",
      imageAlt: "A simple window icon used as a placeholder for redshift tools.",
      imagePlacement: "left",
    },
  ],
};
