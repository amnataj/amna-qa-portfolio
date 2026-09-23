import { environment } from "../data/content";

export default function Environment() {
  return (
    <section className="block" id="environment">
      <div className="wrap">
        <div className="block-head">
          <span className="index">03</span>
          <h2>Environment</h2>
        </div>
        <p className="block-head desc">Tools I test with, grouped by what they're for.</p>

        <div className="env-grid">
          {environment.map((g) => (
            <div className="env-group" key={g.group}>
              <span className="label">{g.group}</span>
              <ul className="env-tools">
                {g.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
