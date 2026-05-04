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
      "",
  },
  tableOfContents: {
    title: "Research Threads",
    suffix: "jump to project box",
  },
  threads: [
    {
      id: "Exoplanet-Demographics",
      title: "Exoplanet Demographics",
      description:
        "Analyzing the distribution and characteristics of planets orbiting stars beyond our solar system.",
      image: "/images/research/press-web25_exoplanet_populations.webp",
      imageAlt:
        "A dense star field used as a placeholder for lensing research.",
      imagePlacement: "left",
    },
    {
      id: "binary-microlensing",
      title: "Binary Microlensing",
      description:
        "Investigating the gravitational effects of binary star systems on light curves and how they may appear in future Roman Space Telescope data",
      image: "/images/research/Microlensingexoplanet.gif",
      imageAlt: "An animated gif showing microlensing events.",
      imagePlacement: "right",
    },
  ],
};
