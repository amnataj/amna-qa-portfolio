import { hero, profile } from "../data/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <p className="kicker">
          {profile.role} — {profile.affiliation}
        </p>
        <h1>{hero.headline}</h1>
        <p>{hero.sub}</p>
      </div>
    </section>
  );
}
