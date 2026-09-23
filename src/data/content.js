export const profile = {
  name: "Amna Taj",
  role: "QA Engineer",
  affiliation: "Final-year Computer Engineering, IIUI",
  location: "Islamabad, Pakistan",
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/amna-taj-06475142b",
  github: "https://github.com/your-handle",
  statusTag: "Open to QA / SDET roles",
};

export const hero = {
  headline: "I find the bugs before your users do.",
  sub:
    "I design test cases the way most people write code: systematically, with the failure paths mapped out first. Search bars, checkout flows, forecasting dashboards \u2014 if it has a happy path, I've probably already tried to break it.",
};

export const testCases = [
  {
    id: "TC-01",
    title: "Coleman Furniture \u2014 E-commerce Regression Suite",
    status: "Active",
    objective:
      "Build and execute a full regression suite for a live production e-commerce site, covering search, cart, account creation, login, and a 10+ case checkout flow.",
    method:
      "Manual test design across positive, negative, and boundary cases; adversarial input probing (SQL-injection-style strings); accessibility spot-checks with keyboard-only navigation; DevTools Network tab review for tracking events across PLP, search, and cart actions.",
    result:
      "Logged three confirmed defects (below) and ran a site-wide audit of unlinked navigation elements. Currently authoring the QA test plan for a checkout-page A/B test, including guardrail metrics.",
    tags: ["Manual QA", "Regression", "A/B test QA", "Live production"],
  },
  {
    id: "TC-02",
    title: "SIFAS \u2014 Inventory Forecasting Dashboard",
    status: "Complete",
    objective:
      "Validate forecasting logic and dashboard behavior for an inventory-management tool against expected business rules.",
    method:
      "Test case design against forecasting calculations; UI verification across data states (empty, partial, full datasets); cross-checked dashboard output against source data.",
    result:
      "Delivered a verified build with documented test coverage for core forecasting and dashboard views.",
    tags: ["Test design", "Data validation", "Dashboard QA"],
  },
  {
    id: "TC-03",
    title: "osTicket \u2014 Enterprise Documentation",
    status: "Complete",
    objective:
      "Document ticketing workflows for an open-source support desk platform deployed in an enterprise context.",
    method:
      "Walked every ticketing workflow end to end as a test path, noting deviations, unclear states, and edge cases along the way.",
    result:
      "Produced enterprise-ready documentation that doubles as a manual test reference for the platform's core workflows.",
    tags: ["Documentation", "Workflow testing"],
  },
];

export const bugLog = [
  {
    id: "BUG-001",
    title: "Search ignores adversarial input instead of rejecting it",
    severity: "Low",
    summary:
      "Submitting a SQL-injection-style string (e.g. ' OR '1'='1) into search returns the entire catalog instead of a \u201cno results\u201d state.",
    note:
      "Confirmed with the backend team this is a relevance-logic bug, not an actual injection vulnerability \u2014 but it's still the wrong result for malformed input, and worth fixing for search quality.",
  },
  {
    id: "BUG-002",
    title: "Newsletter modal ignores successful subscription",
    severity: "Medium",
    summary:
      "The signup prompt reappears on every page refresh or navigation, even after a user has already subscribed \u2014 with their email auto-filled, which makes the repetition harder to miss.",
    note: "Repro'd consistently across three sessions; flagged as a state-persistence bug.",
  },
  {
    id: "BUG-003",
    title: "Review CTA isn't a real link",
    severity: "Medium",
    summary:
      "The \u201cClick here\u201d call-to-action on product reviews is a <span>, not an <a href>. It's not keyboard-focusable and fails basic accessibility checks.",
    note: "Found during a keyboard-only navigation pass; logged alongside three other unlinked-element cases from a site-wide href audit.",
  },
];

export const environment = [
  { group: "Automation", tools: ["Selenium", "Python"] },
  { group: "Data & backend validation", tools: ["SQL", "MySQL"] },
  { group: "API & performance", tools: ["Postman", "JMeter"] },
  { group: "Process & tracking", tools: ["Git", "Jira"] },
];

export const otherWork = {
  title: "3D Product Modeling \u2014 TOV / Renegade Furniture",
  description:
    "Outside of QA, I build photorealistic 3D furniture models in Blender for a furniture brand's product catalog \u2014 nightstands, chairs, sofas, and more \u2014 using scripted, repeatable workflows instead of manual point-and-click, so pieces stay consistent across sessions.",
  details:
    "Also handles the texture pipeline: dewarping and quilting real fabric photos into seamless, tileable textures with Python, and building procedural shaders for materials like bouclé, linen, and lacquer.",
  tags: ["Blender", "Python", "Procedural shading", "Image processing"],
};

export const coverage = [
  {
    when: "2022 \u2014 present",
    what: "Final-year Computer Engineering, International Islamic University Islamabad",
  },
  {
    when: "Internship",
    what: "Database management, Entracloud",
  },
  {
    when: "Interview",
    what: "Campus hiring interview for a QA role at Nayatel \u2014 debrief identified concrete gaps in migration procedures and networking, now folded back into study.",
  },
];
