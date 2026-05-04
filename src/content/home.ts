type HomeSection =
  | {
      title: string;
      kind: "list";
      items: string[];
    }
  | {
      title: string;
      kind: "text";
      body: string;
      src?: string;
      stamp?: string;
    };

type HomeContent = {
  intro: {
    kicker: string;
    title: string;
    description: string;
  };
  sections: HomeSection[];
};

export const homeContent: HomeContent = {
  intro: {
    kicker: "Carmen's Astrophysics Portfolio",
    title: "Carmen Galmes Altafulla's website.",
    description:
      "This site is under construction, but the signal is already coming through: research notes, artwork, and contact coordinates for future collaborations.",
  },
  sections: [
    {
      title: "About",
      kind: "text",
      body: "I am an undergraduate student at the University of California, Santa Cruz, where I study exoplanet demographics and evolution. My research focuses on the formation and evolution of planetary systems, with a particular interest in the properties of exoplanets and their host stars. I am passionate about science communication and outreach, and I enjoy sharing my research with others through art and public speaking.",
    },
    {
      title: "Latest Log",
      kind: "text",
      body: "",
      src: "/images/home/iter2log.webp",
      stamp: "Last updated: Stardate 2026.05",
    }
  //   {
  //     title: "home 3",
  //     ],
  //   },
  // //   {
  //     title: "Latest Log",
  //     kind: "text",
  //     body: "Iter 2 begins here: small, weird, readable, and very much alive. More field notes and project pages can be wired in as the archive grows.",
  //     stamp: "Last updated: Stardate 2026.05",
  //   },
  //   {
  //     title: "home 3",
  //     kind: "text",
  //     body: "Iter 2 begins here: small, weird, readable, and very much alive. More field notes and project pages can be wired in as the archive grows."
  //   },
  //   {
  //     title: "home 4",
  //     kind: "text",
  //     body: "Iter 2 begins here: small, weird, readable, and very much alive. More field notes and project pages can be wired in as the archive grows.",
  //     stamp: "Last updated: Stardate 2026.05"
  //   }
  ],
};
