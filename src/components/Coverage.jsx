import { coverage } from "../data/content";

export default function Coverage() {
  return (
    <section className="block" id="coverage">
      <div className="wrap">
        <div className="block-head">
          <span className="index">04</span>
          <h2>Coverage</h2>
        </div>
        <p className="block-head desc">Background, briefly.</p>

        {coverage.map((c) => (
          <div className="cov-row" key={c.when}>
            <div className="cov-when">{c.when}</div>
            <div className="cov-what">{c.what}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
