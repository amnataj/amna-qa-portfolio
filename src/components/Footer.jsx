import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="foot-head">Have a bug worth passing along? Or a role worth talking about.</p>
        <div className="foot-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="foot-meta">{profile.name} · {profile.location}</p>
      </div>
    </footer>
  );
}
