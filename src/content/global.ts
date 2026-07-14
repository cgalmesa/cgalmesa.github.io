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
  siteTitle: "Carmen Galmes Altafulla",
  siteDescription: "",
  backgroundImage: "/images/backgrounds/space-bg.jpg",
  asciiLine: "* . * . * . * . * . * . * . * . *",
  tickerText: ">>> photons arriving daily <<<",
  footerLeft: "Best viewed with curiosity.",
  footerRight: "Made on Earth.",
  // welcomeBadge: {
  //   src: "/images/decorations/welcome.gif",
  //   alt: "Welcome",
  // },
  navigation: [
    { label: "Home", page: "Home", href: "/" },
    { label: "Research", page: "Research", href: "/research" },
    { label: "Artwork", page: "Artwork", href: "/artwork" },
    { label: "Contact & CV", page: "Contact", href: "/contact" },
  ] satisfies NavigationItem[],
  decorativeGifs: [] satisfies DecorativeGif[],
} as const;
