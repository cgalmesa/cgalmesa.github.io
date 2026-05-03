type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

type ContactContent = {
  intro: {
    kicker: string;
    title: string;
    description: string;
  };
  coordinates: {
    title: string;
    items: ContactItem[];
  };
};

export const contactContent: ContactContent = {
  intro: {
    kicker: "Contact Console",
    title: "Send a signal.",
    description:
      "For collaborations, research questions, art inquiries, or cosmic correspondence, this page will become the relay station.",
  },
  coordinates: {
    title: "Coordinates",
    items: [
      {
        label: "Email",
        value: "hello@example.com",
        href: "mailto:hello@example.com",
      },
      {
        label: "CV",
        value: "coming soon",
        href: "#",
      },
      {
        label: "Office hours",
        value: "by appointment, preferably near a window with stars.",
      },
    ],
  },
};
