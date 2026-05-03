type NavigationPage = "Home" | "Research" | "Artwork" | "Contact";

type NavigationItem = {
  label: string;
  page: NavigationPage;
  href: string;
};

type DecorativeGif = {
  className: string;
  src: string;
  width: number;
  height: number;
};

export const globalContent = {
  browserTab: {
    title: "Carmen's Website",
    logo: "/images/icons/tab-logo.jpg",
  },
  siteTitle: "Carmen.Space",
  siteDescription: "Astrophysics / artwork / field notes / strange light",
  backgroundImage: "/images/backgrounds/space-bg.jpg",
  asciiLine: "* . * . * . * . * . * . * . * . *",
  tickerText: ">>> photons arriving daily <<<",
  footerLeft: "Best viewed with curiosity.",
  footerRight: "Made on Earth.",
  welcomeBadge: {
    src: "/images/decorations/welcome.gif",
    alt: "Welcome",
  },
  navigation: [
    { label: "Home", page: "Home", href: "/" },
    { label: "Research", page: "Research", href: "/research" },
    { label: "Artwork", page: "Artwork", href: "/artwork" },
    { label: "Contact & CV", page: "Contact", href: "/contact" },
  ] satisfies NavigationItem[],
  decorativeGifs: [
    {
      className: "alien alien-left alien-left-top",
      src: "/images/decorations/spinning-alien.gif",
      width: 96,
      height: 96,
    },
    {
      className: "alien alien-left alien-left-bottom",
      src: "/images/decorations/waving.gif",
      width: 122,
      height: 122,
    },
    {
      className: "alien alien-right alien-right-top",
      src: "/images/decorations/aliens-walking.gif",
      width: 170,
      height: 120,
    },
    {
      className: "alien alien-right alien-right-bottom",
      src: "/images/decorations/spinning-alien.gif",
      width: 90,
      height: 90,
    },
  ] satisfies DecorativeGif[],
} as const;
