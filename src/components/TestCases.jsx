import { testCases } from "../data/content";

export default function TestCases() {
  return (
    <section className="block" id="test-cases">
      <div className="wrap">
        <div className="block-head">
          <span className="index">01</span>
          <h2>Test cases</h2>
        </div>
        <p className="block-head desc">
          Projects, written up the way I'd log any piece of testing work: what I set out to verify, how, and what came of it.
        </p>

        {testCases.map((tc) => (
          <article className="case" key={tc.id}>
            <div className="case-id">{tc.id}</div>
            <div>
              <div className="case-title-row">
                <h3>{tc.title}</h3>
                <span className={`pill ${tc.status === "Active" ? "active" : "complete"}`}>
                  {tc.status}
                </span>
              </div>

              <div className="case-field">
                <span className="label">Objective</span>
                <p>{tc.objective}</p>
              </div>
              <div className="case-field">
                <span className="label">Method</span>
                <p>{tc.method}</p>
              </div>
              <div className="case-field">
                <span className="label">Result</span>
                <p>{tc.result}</p>
              </div>

              <div className="tag-row">
                {tc.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
