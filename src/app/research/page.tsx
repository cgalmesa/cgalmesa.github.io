import { RetroShell } from "@/components/retro-shell";
import { researchContent } from "@/content/research";
import Image from "next/image";

export default function Research() {
  return (
    <RetroShell activePage="Research">
      <section className="intro-box">
        <p className="kicker">{researchContent.intro.kicker}</p>
        <h1>{researchContent.intro.title}</h1>
        <p>{researchContent.intro.description}</p>
      </section>

      <section className="panel">
        <h2>{researchContent.tableOfContents.title}</h2>
        <ol className="link-list">
          {researchContent.threads.map((thread) => (
            <li key={thread.id}>
              <a href={`#${thread.id}`}>{thread.title}</a>
              <span> - {researchContent.tableOfContents.suffix}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="research-card-stack" aria-label="Research projects">
        {researchContent.threads.map((thread) => (
          <article
            className={`research-card ${
              thread.imagePlacement === "right" ? "reverse" : ""
            } ${thread.image ? "" : "no-image"}`}
            id={thread.id}
            key={thread.id}
          >
            {thread.image ? (
              <div className="research-image">
                <Image
                  src={thread.image}
                  alt={thread.imageAlt ?? ""}
                  width={260}
                  height={180}
                />
              </div>
            ) : null}
            <div>
              <h2>{thread.title}</h2>
              <p>{thread.description}</p>
              <div className="research-links">
                {thread.link ? <a href={thread.link}>Read more</a> : null}
                <a href="#top">Back to top</a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </RetroShell>
  );
}
