export const profile = {
  name: "Amna Taj",
  role: "QA Engineer",
  affiliation: "Final-year Computer Engineering, IIUI",
  location: "Islamabad, Pakistan",
  email: "amnataj675@gmail.com",
  linkedin: "https://www.linkedin.com/in/amna-taj-06475142b",
  github: "https://github.com/amnataj",
  statusTag: "Open to QA roles",
};

export const hero = {
  headline: "I find the bugs before your users do.",
  sub:
    "I design test cases the way most people write code: systematically, with the failure paths mapped out first. Search bars, checkout flows, forecasting dashboards \u2014 if it has a happy path, I've probably already tried to break it.",
};

export const testCases = [
  {
    id: "PRJ-01",
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
    id: "PRJ-02",
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
    id: "PRJ-03",
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
  {
    id: "PRJ-04",
    title: "Playwright E2E Test Automation Framework",
    status: "Complete",
    objective:
      "Build an automated end-to-end UI test framework for an e-commerce site covering login, cart, and checkout flows, and run it automatically in CI.",
    method:
      "Python, Pytest, and Playwright using the Page Object Model; reusable fixtures for login and cart setup; data-driven tests with parametrization and JSON test data; positive and negative scenarios including form validation and order-total checks; parallel execution with pytest-xdist; screenshots, video, and traces captured on failure.",
    result:
      "15 automated tests running through GitHub Actions on every push, pull request, and nightly schedule, with HTML reports and failure traces published as artifacts. Debugged a parallel-run failure caused by base URL configuration and fixed it with a session-scoped fixture.",
    tags: ["Playwright", "Pytest", "Page Object Model", "GitHub Actions", "CI/CD"],
    link: "https://github.com/amnataj/playwright-qa-framework",
  },
  {
    id: "PRJ-05",
    title: "Petstore API Test Automation",
    status: "Complete",
    objective:
      "Build an automated API test suite for the Swagger Petstore covering the pet, store, and user endpoints, and run it automatically in CI.",
    method:
      "Python, pytest, and requests with a reusable API client class and request logging; fixtures that create and clean up their own data so tests never depend on each other; JSON schema validation of pet, order, and user responses; positive and negative scenarios across all three endpoint groups.",
    result:
      "25 automated tests (23 passing, 2 documented spec deviations kept as strict xfail tests so the suite stays green and the bugs stay visible), running through GitHub Actions on every push with a downloadable HTML report.",
    tags: ["API testing", "Python", "pytest", "requests", "JSON Schema", "GitHub Actions"],
    link: "https://github.com/amnataj/petstore-api-tests",
  },
  {
    id: "PRJ-06",
    title: "JMeter Performance Testing: Flight Booking Flow",
    status: "Complete",
    objective:
      "Measure how a web application behaves under normal, steadily increasing, and sudden traffic, and check the results against targets set in advance (95th percentile under 2 seconds, error rate under 1%).",
    method:
      "Apache JMeter test plan for a four-step booking flow on a demo flight-booking site, with CSV-driven passenger data, page-content and response-time assertions, think-time timers, and request timeouts; load (20 users), stress (ramp to 60 users), and spike (50 users in 5 seconds) scenarios run from the command line, with HTML dashboard reports.",
    result:
      "All three scenarios met both targets: 95th percentile of 672 ms (load), 545 ms (stress), and 948 ms (spike), with error rates of 0%, 0.09%, and 0.81%. Every failure was a response slower than 3 seconds, and the spike run showed a temporary mid-run slowdown that recovered on its own. Findings and the limits of the test are documented in the repo.",
    tags: ["JMeter", "Performance testing", "Load testing", "Stress testing", "Spike testing"],
    link: "https://github.com/amnataj/jmeter-performance-tests",
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
  {
    id: "BUG-004",
    title: "Petstore: invalid status filter returns 200 instead of 400",
    severity: "Low",
    summary:
      "GET /pet/findByStatus?status=invalid returns 200 OK, but the API spec documents a 400 Invalid status value response for this case.",
    note: "Found by the Petstore API suite and kept as a strict xfail test, so it stays visible without turning the pipeline red.",
  },
  {
    id: "BUG-005",
    title: "Petstore: pet created without required fields",
    severity: "Medium",
    summary:
      "POST /pet with required fields missing returns 200 OK and creates the pet without a name or photoUrls, where the spec documents a 405 Invalid input response.",
    note: "Found by the Petstore API suite and kept as a strict xfail test, so it stays visible without turning the pipeline red.",
  },
];

export const environment = [
  { group: "Automation", tools: ["Selenium", "Playwright", "Pytest", "Python"] },
  { group: "Data & backend validation", tools: ["SQL", "MySQL"] },
  { group: "API & performance", tools: ["Postman", "Requests", "JMeter"] },
  { group: "Process & tracking", tools: ["Git", "GitHub Actions", "Jira"] },
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
    when: "Current role",
    what: "QA Trainee, Renegade",
  },
  {
    when: "2022 \u2014 present",
    what: "Final-year Computer Engineering, International Islamic University Islamabad",
  },
  {
    when: "Internship",
    what: "Database management, Entracloud",
  },
];
