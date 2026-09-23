import { bugLog } from "../data/content";

export default function BugLog() {
  return (
    <section className="block" id="bug-log">
      <div className="wrap">
        <div className="block-head">
          <span className="index">02</span>
          <h2>Bug log</h2>
        </div>
        <p className="block-head desc">A few defects worth showing, not just telling.</p>

        {bugLog.map((bug) => (
          <article className="bug" key={bug.id}>
            <div className="bug-id">{bug.id}</div>
            <div>
              <div className="bug-title-row">
                <h3>{bug.title}</h3>
                <span className={`sev ${bug.severity.toLowerCase()}`}>{bug.severity}</span>
              </div>
              <p>{bug.summary}</p>
              <p className="note">{bug.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
