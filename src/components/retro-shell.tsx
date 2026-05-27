import { globalContent } from "@/content/global";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

type PageName = "Home" | "Research" | "Artwork" | "Contact";

export function RetroShell({
  activePage,
  children,
}: Readonly<{
  activePage: PageName;
  children: React.ReactNode;
}>) {
  const shellStyle =
    activePage === "Artwork"
      ? ({} as CSSProperties)
      : ({ "--site-background-image": `url("${globalContent.backgroundImage}")` } as CSSProperties);

  return (
    <main className={`site-shell${activePage === "Artwork" ? " artwork-shell" : ""}`} id="top" style={shellStyle}>
      <Image
        className="welcome-badge"
        src={globalContent.welcomeBadge.src}
        alt={globalContent.welcomeBadge.alt}
        width={250}
        height={70}
        unoptimized
        priority
      />

      {globalContent.decorativeGifs.map((gif) => (
        <Image
          className={gif.className}
          src={gif.src}
          alt=""
          width={gif.width}
          height={gif.height}
          unoptimized
          aria-hidden="true"
          key={`${gif.className}-${gif.src}`}
        />
      ))}

      <div className="page-frame">
        <header className="masthead">
          <p className="ascii-line">{globalContent.asciiLine}</p>
          <h1>{globalContent.siteTitle}</h1>
          <p>{globalContent.siteDescription}</p>
        </header>

        <nav className="tab-bar" aria-label="Main navigation">
          {globalContent.navigation.map((item) => (
            <Link
              key={item.href}
              className={item.page === activePage ? "active" : ""}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ticker" aria-hidden="true">
          {globalContent.tickerText}
        </div>

        <div className="content-window">{children}</div>

        <footer className="footer-bar">
          <span>{globalContent.footerLeft}</span>
          <span>{globalContent.footerRight}</span>
        </footer>
      </div>
    </main>
  );
}
