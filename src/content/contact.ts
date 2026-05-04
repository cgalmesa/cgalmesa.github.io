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
      "For collaborations, research questions, art inquiries, or cosmic correspondence.",
  },
  coordinates: {
    title: "Coordinates",
    items: [
      {
        label: "Email",
        value: "carmengalmesa@gmail.com",
        href: "mailto:carmengalmesa@gmail.com",
      },
      {
        label: "CV",
        value: "View CV",
        href: "public\\CVCGA (3).pdf",
      },
    ],
  },
};
