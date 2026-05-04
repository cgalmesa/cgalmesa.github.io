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
  // sections: [
  //   {
  //     title: "Now Observing",
  //     kind: "list",
  //     items: [
  //       "Galaxy evolution across cosmic time",
  //       "Gravitational lensing and distorted light",
  //       "Photometric redshifts and spectral fingerprints",
  //       "Scientific images as portals, not decorations",
  //     ],
  //   },
  //   {
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
