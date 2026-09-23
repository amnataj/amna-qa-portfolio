import { profile } from "../data/content";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <span className="name">{profile.name}</span>
        <span className="status-tag">{profile.statusTag}</span>
      </div>
    </header>
  );
}
