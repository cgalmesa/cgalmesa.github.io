import { RetroShell } from "@/components/retro-shell";
import { homeContent } from "@/content/home";

export default function Home() {
  return (
    <RetroShell activePage="Home">
      <section className="intro-box">
        <p className="kicker">{homeContent.intro.kicker}</p>
        <h1>{homeContent.intro.title}</h1>
        <p>{homeContent.intro.description}</p>
      </section>

      <section className="two-column">
        {homeContent.sections.map((section) => (
          <article className="panel" key={section.title}>
            <h2>{section.title}</h2>
            {section.kind === "list" ? (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <>
                <p>{section.body}</p>
                {section.stamp ? <p className="stamp">{section.stamp}</p> : null}
              </>
            )}
          </article>
        ))}
      </section>
    </RetroShell>
  );
}
