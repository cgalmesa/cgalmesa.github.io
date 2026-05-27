import { ArtGallery } from "@/components/art-gallery";
import { RetroShell } from "@/components/retro-shell";
import { artworkContent } from "@/content/artwork";
import styles from "./art-gallery.module.css";

export default function Artwork() {
  return (
    <RetroShell activePage="Artwork">
      <section className="intro-box">
        <p className="kicker">{artworkContent.intro.kicker}</p>
        <h1>{artworkContent.intro.title}</h1>
        <p>{artworkContent.intro.description}</p>
      </section>

      <div className={styles.galleryPage}>
        <ArtGallery artworks={artworkContent.artworks} />
      </div>
    </RetroShell>
  );
}
