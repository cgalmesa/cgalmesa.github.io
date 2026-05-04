import { RetroShell } from "@/components/retro-shell";
import { contactContent } from "@/content/contactContent";

export default function Contact() {
  return (
    <RetroShell activePage="Contact">
      <section className="intro-box">
        <p className="kicker">{contactContent.intro.kicker}</p>
        <h1>{contactContent.intro.title}</h1>
        <p>{contactContent.intro.description}</p>
      </section>

      <section className="panel">
        <h2>{contactContent.coordinates.title}</h2>
        {contactContent.coordinates.items.map((item) => (
          <p key={item.label}>
            {item.label}:{" "}
            {item.href ? <a href={item.href}>{item.value}</a> : item.value}
          </p>
        ))}
      </section>
    </RetroShell>
  );
}
