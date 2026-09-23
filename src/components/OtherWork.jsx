import { otherWork } from "../data/content";

export default function OtherWork() {
  return (
    <section className="block other-work" id="other-work">
      <div className="wrap">
        <div className="block-head">
          <span className="index">—</span>
          <h2>Other work</h2>
        </div>
        <p className="block-head desc">Not QA, but worth knowing about.</p>

        <div className="other-card">
          <h3>{otherWork.title}</h3>
          <p>{otherWork.description}</p>
          <p className="ow-details">{otherWork.details}</p>
          <div className="tag-row">
            {otherWork.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
