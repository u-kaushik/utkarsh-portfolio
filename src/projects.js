const projectCatalog = [
  {
    slug: "globotrotter",
    title: "GloboTrotter",
    type: "Consumer travel · Web + iOS",
    status: "Live on App Store",
    cover: "/work/globotrotter/02-globe.png",
    gallery: [
      "/work/globotrotter/01-dashboard.png",
      "/work/globotrotter/02-globe.png",
      "/work/globotrotter/03-journal.png",
      "/work/globotrotter/04-planner.png",
      "/work/globotrotter/06-rewards.png",
    ],
    aside: "A travel app that remembers more than your login.",
    oneLine:
      "A personal travel globe that uses where you have been to make the next trip feel more like yours.",
    executiveSummary:
      "Most travel planners forget the user as soon as the itinerary is finished. GloboTrotter combines a personal travel history, journal and interactive globe with AI planning that becomes more relevant over time. I took the product across web and iOS, built the subscription journey and submitted the app for App Store approval.",
    growthLens: {
      status: "Launch learning",
      summary: "GloboTrotter is also the project that made the distribution gap clear. The product was built before enough market and content work had started, so I am now using that lesson to shape a better research-before-build process.",
      points: [
        ["What is real", "A working travel product, launch page, App Store story and a clear product idea built around travel memory."],
        ["What I am learning", "ASO research, competitor onboarding and shareable product moments need to shape the work earlier, not arrive as release admin."],
        ["What comes next", "Tighter positioning and a repeatable content plan built from real travel questions and moments inside the product."],
      ],
    },
    lenses: ["Positioning", "Consumer UX", "React", "iOS", "Subscriptions"],
    problem:
      "Most AI travel planners are useful for one conversation, then forget you. Journals keep the memories, but do very little with them. The useful product was sitting somewhere between the two.",
    bet: "Treat travel history as something the product can learn from. The more a person records, the more personal the next plan should become.",
    moves: [
      [
        "Product",
        "Built an interactive D3 globe, travel journal, AI planner and Time Capsule around one emotional core: your history.",
      ],
      [
        "Engineering",
        "Combined React, TypeScript, Firebase, serverless Claude workflows, Stripe and a Capacitor iOS shell.",
      ],
      [
        "Go to market",
        "Called model usage “fuel” because nobody has ever looked forward to buying tokens for a holiday. Then built the tier, upgrade and analytics journeys around it.",
      ],
    ],
    tradeoffs: [
      [
        "Delight vs. speed",
        "The interactive globe creates the emotional hook, but D3 and map data add weight. I kept the globe central, then simplified the surrounding interface and deferred secondary visual effects.",
      ],
      [
        "Personalisation vs. cold-start friction",
        "Better plans need travel history; demanding it upfront would hurt activation. The product works with a light first session, then earns richer inputs through journalling and rewards.",
      ],
      [
        "One codebase vs. native purity",
        "Capacitor accelerated web-to-iOS delivery and preserved product parity. The trade-off was accepting a native shell rather than rebuilding every interaction in SwiftUI.",
      ],
    ],
    decisions: [
      [
        "Make history the moat",
        "Generic itinerary generation is easy to copy. A growing personal travel dataset makes the output more relevant and the product harder to replace.",
      ],
      [
        "Call credits “fuel”",
        "It fits the travel metaphor and explains a finite resource without exposing model economics to users.",
      ],
      [
        "Put AI behind serverless functions",
        "API keys, usage checks and fuel deductions stay off-device, creating one controlled boundary for cost and abuse.",
      ],
    ],
    outcome:
      "A cross-platform travel product with a distinctive emotional hook, a growing personal-data advantage and a complete journey from first visit to paid subscription.",
    links: [
      ["Live product", "https://globotrottr.com"],
      ["GitHub", "https://github.com/u-kaushik/GloboTrotter-portfolio"],
    ],
  },
  {
    slug: "clear-halal",
    title: "Clear Halal",
    type: "Native iOS · Food confidence",
    status: "Live on App Store",
    cover: "/work/clearhalal/03-understand-the-why.png",
    gallery: [
      "/work/clearhalal/01-know-whats-inside.png",
      "/work/clearhalal/02-spot-halal-concerns.png",
      "/work/clearhalal/03-understand-the-why.png",
      "/work/clearhalal/04-save-trusted-foods.png",
      "/work/clearhalal/05-build-confidence.png",
    ],
    aside: "Halal guidance without false certainty.",
    oneLine:
      "Scan an ingredient label, see the concern and understand what to do next.",
    executiveSummary:
      "Halal ingredient checks are full of genuine grey areas, so a confident yes or no can do more harm than good. Clear Halal uses on-device OCR and reviewable rules to show the exact concern, explain the uncertainty and suggest a practical next step. I designed and built the native iOS product, which is now live on the App Store.",
    growthLens: {
      status: "In progress",
      summary: "Clear Halal is the first product I am using to join the full loop properly: market and creator research, product story, content production, organic learning and later paid tests.",
      points: [
        ["What is real", "The iOS app, interactive demo, landing page, App Store messaging and product screenshots are live."],
        ["What is in progress", "Research into competitor content, creator formats, common questions and an AI-assisted avatar and content workflow."],
        ["What comes next", "Start publishing, watch the response and only move useful creative into small paid tests once there is a signal worth backing."],
      ],
    },
    lenses: [
      "Customer insight",
      "SwiftUI",
      "Vision OCR",
      "Trust design",
      "ASO",
    ],
    problem:
      "Ingredient labels are full of awkward grey areas. Additives can come from different sources, certification varies and a simple yes or no can create confidence the evidence does not deserve.",
    bet: "Show the evidence. Point to the exact term, explain the concern in plain English and give the user a sensible next step.",
    moves: [
      [
        "Product",
        "Designed green, amber and red outcomes with cautious language and saved-food/history loops.",
      ],
      [
        "Engineering",
        "Built native SwiftUI flows with on-device Vision text recognition, typed models and deterministic classification.",
      ],
      [
        "Go to market",
        "Researched competing scanner apps, developed App Store messaging and made five screenshots tell one coherent story. A small victory over screenshot soup.",
      ],
    ],
    tradeoffs: [
      [
        "Clarity vs. false certainty",
        "A binary halal/not-halal answer is faster, but can misrepresent source-dependent ingredients. I used an explicit uncertain state even though it asks more of the user.",
      ],
      [
        "Privacy vs. cloud intelligence",
        "Cloud vision could support heavier analysis. On-device OCR keeps label images private, reduces latency and makes the core scan resilient without a connection.",
      ],
      [
        "Coverage vs. explainability",
        "A larger opaque model might recognise more edge cases. Deterministic rules provide narrower coverage, but every result can show exactly which term triggered it and why.",
      ],
    ],
    decisions: [
      [
        "Evidence before verdict",
        "The result starts with the ingredient and reasoning, not a mysterious confidence score. Trust is earned through traceability.",
      ],
      [
        "Use cautious language",
        "“Likely” and “check the source” are intentional product controls, not timid copy. The domain contains genuine ambiguity.",
      ],
      [
        "Build a deterministic web demo",
        "Reviewers can explore every outcome without granting camera access or manufacturing the right ingredient label.",
      ],
    ],
    outcome:
      "A trust-led native iOS product that turns ambiguous ingredient labels into traceable evidence, honest uncertainty and useful next steps, supported by subscriptions and accessible states.",
    links: [
      ["Interactive demo", "https://u-kaushik.github.io/clearhalal/"],
      ["GitHub", "https://github.com/u-kaushik/clearhalal"],
    ],
  },
  {
    slug: "fullwise",
    title: "Full Wise",
    type: "Native iOS · Nutrition",
    status: "Awaiting App Store approval",
    cover: "/work/fullwise/01-calorie-tracking-made-effortless.png",
    gallery: [
      "/work/fullwise/01-calorie-tracking-made-effortless.png",
      "/work/fullwise/02-log-meals-in-seconds.png",
      "/work/fullwise/04-understand-what-fills-you-up.png",
      "/work/fullwise/05-learn-from-your-patterns.png",
    ],
    aside: "Build food intuition, then need the app less.",
    oneLine:
      "Food logging that helps people understand what to eat next, and why.",
    executiveSummary:
      "Most nutrition apps help people log faster without helping them need the log less. Full Wise pairs editable AI estimates with fullness, calorie and protein context so each meal teaches something useful about the next choice. I shaped the position, brand and production architecture, then built the native iOS app now awaiting App Store approval.",
    lenses: [
      "Market research",
      "Product strategy",
      "SwiftUI",
      "AI workflows",
      "Brand",
    ],
    problem:
      "Nutrition apps have become very good at making logging faster. They are less good at helping someone understand what to eat next, or what their own patterns are trying to tell them.",
    bet: "Make the useful moment happen after the log: what fits next, why it fits and what the person can learn for next time.",
    moves: [
      [
        "Discovery",
        "Mapped the category, tore down incumbents and found a sharper wedge: useful guidance before the next choice, not another retrospective graph.",
      ],
      [
        "Product",
        "Designed an editable AI estimate, fullness guidance, remaining-calorie/protein context and an advisor with the tone of a sensible, candid relative.",
      ],
      [
        "Build",
        "Developing a native SwiftUI product with durable offline job queues, secure backend transport, Firebase App Check and subscriptions.",
      ],
    ],
    tradeoffs: [
      [
        "Logging speed vs. learning value",
        "Every extra question improves context but makes logging feel like admin. Capture stays fast; reflection appears after the meal when it can actually help.",
      ],
      [
        "Precision vs. honesty",
        "AI nutrition estimates look authoritative even when portions are unclear. Estimates remain editable and uncertainty is visible instead of hidden behind decimal places.",
      ],
      [
        "Rich advice vs. cognitive load",
        "The system could surface dozens of metrics. The primary view prioritises calories, protein and fullness, with deeper nutrition available progressively.",
      ],
    ],
    decisions: [
      [
        "Position around food intuition",
        "Faster photo logging is already crowded territory. Helping users understand what fits next creates a more defensible and humane promise.",
      ],
      [
        "Design for imperfect connectivity",
        "A durable local job queue preserves captures before processing, so a poor connection does not turn a meal log into lost work.",
      ],
      [
        "Give the advisor a point of view",
        "Warm, candid British English makes guidance feel human while strict boundaries prevent medical overreach or moralising food.",
      ],
    ],
    outcome:
      "A native nutrition product with a clear category position, its own visual identity and production-ready architecture built around learning, not permanent dependence on logging.",
    links: [],
  },
  {
    slug: "app-factory",
    title: "The App Factory",
    type: "Internal operations system",
    status: "Used in production",
    cover: "/work/app-factory/command-device-3x.jpg?v=6",
    mobileCover: "/work/app-factory/command-device-3x.jpg?v=6",
    mobileObjectPosition: "center top",
    mediaType: "desktop",
    galleryLayout: "phone-web",
    gallery: [
      "/work/app-factory/command-device-3x.jpg?v=6",
      "/work/app-factory/portfolio-device-3x.jpg?v=6",
      "/work/app-factory/project-device-3x.jpg?v=6",
    ],
    aside: "The place where app ideas have to survive the evidence.",
    oneLine:
      "An internal system that keeps app research, selection, delivery and release in one visible pipeline.",
    executiveSummary:
      "App research, ASO evidence and delivery status had become scattered across separate documents, which made project choices harder to defend and easier to forget. The App Factory turns that material into one operating pipeline, with evidence gates before build and a visible route through release. It is now used in production to choose, track and unblock the app portfolio.",
    lenses: ["Market validation", "ASO research", "Portfolio decisions", "Product ops"],
    problem:
      "The research lived in one place, competitor screenshots in another and build status somewhere else entirely. That made it too easy to fall in love with an idea and forget why we had chosen it by the time the build started.",
    bet: "Make an idea earn its place before code begins, then keep the original evidence attached all the way through release.",
    moves: [
      [
        "Validate",
        "Maps concept research, ASOdesk demand, difficulty, competitor screenshots and review gaps into a comparable portfolio and explicit development gate.",
      ],
      [
        "Choose",
        "Ranks candidate lanes, records strategic overrides and keeps one active shipping thesis visible so attractive new ideas do not constantly derail delivery.",
      ],
      [
        "Deliver",
        "Tracks each selected app across research, ideation, visual identity, validation, build, review, monetisation, App Store prep and manual testing. The original evidence stays attached.",
      ],
    ],
    tradeoffs: [
      [
        "Evidence depth vs. decision speed",
        "There is always more research to collect. Clear thresholds for demand, difficulty, risk and strategic fit tell us when to advance a concept and when to park it.",
      ],
      [
        "Portfolio throughput vs. product focus",
        "A factory invites parallel work, but too many active apps dilute shipping effort. The dashboard keeps a broad research queue while enforcing one primary shipping thesis at a time.",
      ],
      [
        "Standard stages vs. product-specific reality",
        "Every app needs research, build and release discipline, but not identical execution. Shared gates create consistency while project records preserve each product’s risks and evidence.",
      ],
    ],
    decisions: [
      [
        "Make ASO a gate, not a post-launch task",
        "Search demand, competition and review gaps influence which product enters development rather than being retrofitted after the app already exists.",
      ],
      [
        "Keep research attached to the project",
        "Keyword banks, competitor captures, positioning notes and decision rationale travel with the app so later design and marketing choices retain their original context.",
      ],
      [
        "Separate the idea queue from the build lane",
        "Many concepts can remain visible and ranked; only a deliberately promoted thesis consumes build capacity. Curiosity stays broad while delivery stays narrow.",
      ],
    ],
    outcome:
      "One operating system for moving from market evidence to a deliberate shipping decision, while keeping the original research, current delivery state and next handoff attached to every product.",
    links: [["GitHub", "https://github.com/u-kaushik/Auto-App-Factory-Portfolio"]],
  },
  {
    slug: "rca-flow",
    title: "RCA Flow",
    type: "Custom B2B software · Property surveying",
    status: "Built for a pilot firm",
    cover: "/work/rca/dashboard-device-3x.jpg?v=3",
    mobileCover: "/work/rca/dashboard-device-3x.jpg?v=3",
    mobileObjectPosition: "center top",
    mediaType: "desktop",
    galleryLayout: "phone-web",
    gallery: [
      "/work/rca/dashboard-device-3x.jpg?v=3",
      "/work/rca/development-device-3x.jpg?v=3",
      "/work/rca/valuation-device-3x.jpg?v=3",
    ],
    aside: "One working flow, instead of a spreadsheet for every block.",
    oneLine:
      "Bulk property assessments, controlled calculations and PDF reports in one workflow.",
    executiveSummary:
      "A surveying firm was producing Reinstatement Cost Assessments one spreadsheet and one property block at a time. RCA Flow replaced that repetition with CSV ingestion, faster structured entry, deterministic calculations from the firm’s own rates and generated PDF reports. I delivered the pilot in 13 days with role-based access and multi-tenant foundations for future firms.",
    growthLens: {
      status: "Customer-led B2B",
      summary: "The strongest go-to-market work here happened before the build. User conversations exposed the repeated spreadsheet work and gave the product a plain commercial story: faster reporting, clearer team visibility and fewer handoffs.",
      points: [
        ["Customer signal", "The workflow came from interviews and the pilot firm’s working process rather than a guessed feature list."],
        ["Product story", "The demo shows the whole path from bulk property input to controlled calculation and a final report."],
        ["Commercial next step", "Use the working pilot to test the same pain with similar surveying firms before widening the product."],
      ],
    },
    lenses: ["Custom software", "RBAC", "Multi-tenancy", "CSV ingestion", "PDF reporting"],
    problem:
      "The pilot firm created Reinstatement Cost Assessments one spreadsheet at a time. It worked, but large developments meant the same setup, entry, calculation and reporting work repeated block after block.",
    bet: "Build closely around the pilot firm’s real process, without trapping the product inside one company or giving every user the keys to everything.",
    moves: [
      [
        "Workflow",
        "Modelled the firm’s real hierarchy of developments, blocks, floors and adjustments, then added CSV ingestion to create large developments quickly.",
      ],
      [
        "Product",
        "Designed faster block-level data entry, deterministic calculations from rates entered by the firm, and PDF report generation at the end of the flow.",
      ],
      [
        "Engineering",
        "Built the React and TypeScript application with organisation-level data boundaries and role-based access for owners, managers and team members. AI supported engineering; it was not part of the product’s decision-making.",
      ],
    ],
    tradeoffs: [
      [
        "Guidance vs. expert flexibility",
        "A rigid wizard improves consistency but frustrates experienced surveyors. The seven-step spine standardises the core while preserving anomalies and specialist adjustments.",
      ],
      [
        "Pilot specificity vs. platform readiness",
        "The first firm needed a workflow that felt made for its team. Organisation boundaries and reusable permissions preserved that fit while leaving room for other surveying companies to join later.",
      ],
      [
        "Automation vs. rate control",
        "Automating rate selection would have reduced entry further, but the firm needed authority over its assumptions. Rates remain manually entered; the software applies them consistently and transparently.",
      ],
    ],
    decisions: [
      [
        "Make the organisation a real boundary",
        "Each company owns its users, rates, developments and assessments. That keeps the pilot experience focused while preventing future tenants from seeing or affecting one another’s work.",
      ],
      [
        "Match access to responsibility",
        "Owners, managers and team members receive different permissions, so everyday contributors can do their work without inheriting company-level control.",
      ],
      [
        "Generate the report from the assessment",
        "PDF output uses the same structured data that drives the calculation, reducing re-keying and keeping the final report aligned with the working assessment.",
      ],
    ],
    outcome:
      "A spreadsheet-heavy assessment process turned into a structured B2B workflow, with bulk development creation, controlled calculations, generated reports and platform foundations for more than one firm.",
    links: [
      ["Live demo", "https://demorcaflow.netlify.app/"],
      ["GitHub", "https://github.com/u-kaushik/RCA-Flow-Portfolio"],
    ],
  },
  {
    slug: "mission-control",
    title: "Mission Control",
    type: "Internal operations system",
    status: "Used in production",
    cover: "/work/mission-control/campaigns-device-3x.jpg?v=3",
    mobileCover: "/work/mission-control/campaigns-device-3x.jpg?v=3",
    mobileObjectPosition: "center top",
    mediaType: "desktop",
    galleryLayout: "phone-web",
    gallery: [
      "/work/mission-control/campaigns-device-3x.jpg?v=3",
      "/work/mission-control/prospects-device-3x.jpg?v=3",
      "/work/mission-control/inbox-device-3x.jpg?v=3",
    ],
    aside: "Outbound work without the usual twelve-tab circus.",
    oneLine:
      "A modular outbound system connecting prospects, campaigns and replies in one working loop.",
    executiveSummary:
      "Outbound work was split between prospect lists, sending tools, campaign reports and inboxes, leaving the operating picture hidden in the handoffs. Mission Control connects prospects, campaigns and replies in one modular system with visible state and human control over consequential sends. It is used in production, with a public sample-data demo for safe evaluation.",
    growthLens: {
      status: "Marketing operations",
      summary: "Mission Control is the clearest proof that I can work on the system behind a campaign, not only the message. It joins prospect research, campaign state, replies and reporting while keeping important actions under human control.",
      points: [
        ["Operating problem", "Lists, sending, inboxes and reports were separate, so the next useful action was hard to see."],
        ["System response", "Connected records and focused views keep the source, campaign, reply and follow-up attached."],
        ["Working principle", "Automate the repetitive movement of information, but keep consequential sends and replies reviewable."],
      ],
    },
    lenses: ["Growth operations", "Internal tools", "Outbound systems", "Workflow design"],
    problem:
      "Prospect lists, sending, replies and campaign reporting all lived in different tools. Each one worked. Together, they made it surprisingly hard to answer three basic questions: what happened, what needs attention and did any of this create a useful conversation?",
    bet: "Put the whole outbound loop in one place: choose the prospects, run the campaign, collect the replies and keep the history attached.",
    moves: [
      [
        "Operating model",
        "Turned contacts, lists, campaigns, conversations, tasks and weekly goals into connected records rather than separate admin surfaces.",
      ],
      [
        "Outbound engine",
        "Built an in-house sending and warm-up workflow around SMTP2Go, with campaign sequences, list controls, volume checks and performance reporting.",
      ],
      [
        "Product system",
        "Created modular views for the dashboard, contacts, campaigns and a unified inbox, then added focused agent roles so automation stayed visible and reviewable.",
      ],
    ],
    tradeoffs: [
      [
        "Breadth vs. coherence",
        "A control room can become a cupboard for every feature. Each module had to earn its place by supporting the same loop from prospect selection to reply and follow-up.",
      ],
      [
        "Automation vs. sender control",
        "Faster sending is easy to automate and easy to misuse. Campaign state, volume and replies remain visible, while consequential sends and responses stay under human control.",
      ],
      [
        "Dense information vs. daily usability",
        "The product holds a lot of operational detail. Summary cards answer the immediate question; tables and record views carry the evidence when a closer inspection is needed.",
      ],
    ],
    decisions: [
      [
        "Build the loop, not another dashboard",
        "Metrics are useful only when they lead to the next action. Contacts, campaigns and conversations link back to the work that produced them.",
      ],
      [
        "Own the sending layer",
        "An in-house SMTP2Go workflow gave me control over lists, sequences, warm-up and reporting without making another subscription tool the source of truth.",
      ],
      [
        "Make modularity visible",
        "Each operational area has a focused view, but navigation, shared records and common status language make the product feel like one system.",
      ],
    ],
    outcome:
      "A coherent outbound operating loop that connects prospects, campaigns and replies, while keeping activity visible, reviewable and under human control.",
    links: [
      ["Live demo", "https://demomissioncontrol.netlify.app/"],
      ["GitHub", "https://github.com/u-kaushik/Mission-Control-Portfolio"],
    ],
  },
  {
    slug: "propfolio",
    title: "Propfolio",
    type: "B2B software",
    status: "Live product + public demo",
    cover: "/work/propfolio/list-device-3x.jpg?v=5",
    mobileCover: "/work/propfolio/list-device-3x.jpg?v=5",
    mobileObjectPosition: "center top",
    mediaType: "desktop",
    galleryLayout: "phone-web",
    gallery: [
      "/work/propfolio/list-device-3x.jpg?v=5",
      "/work/propfolio/pipeline-device-3x.jpg?v=5",
      "/work/propfolio/manager-device-3x.jpg?v=5",
      "/work/propfolio/analysis-device-3x.jpg?v=5",
    ],
    aside: "Property deal analysis without the spreadsheet sprawl.",
    oneLine:
      "A property workspace for deal analysis, financial modelling and acquisition progress.",
    executiveSummary:
      "Property opportunities often lose their reasoning as they move between calculators, spreadsheets and informal deal lists. Propfolio makes each financial scenario a durable deal record, connecting rapid triage, deeper ROI modelling and the acquisition pipeline. The React and Firebase product is live, with a populated public demo that shows the workflow without exposing a real portfolio.",
    lenses: ["PropTech", "Financial modelling", "Product workflow", "React", "Firebase"],
    problem:
      "Property opportunities move between calculators, spreadsheets, notes and informal deal lists. The analysis can be detailed, but the reasoning is easily lost as a lead becomes a real project.",
    bet:
      "Treat the calculation as the start of the deal, not a disposable answer. Keep the assumptions with the record as it moves through the acquisition pipeline.",
    moves: [
      [
        "Model",
        "Built title-split and ROI analysis around acquisition, finance, refurbishment, refinance, rent and investor-facing returns rather than a generic mortgage calculator.",
      ],
      [
        "Operate",
        "Connected saved opportunities, favourites, custom lists, rapid calculations and real acquisition stages so the team can move from first look to active delivery without re-keying the deal.",
      ],
      [
        "Demonstrate",
        "Created a recruiter-safe public demo with preloaded deals and a local fallback, allowing the product thinking to be explored without exposing live credentials or portfolio data.",
      ],
    ],
    tradeoffs: [
      [
        "Modelling depth vs. first-pass speed",
        "A complete property model asks for a lot of inputs before an opportunity has earned that effort. Rapid Calc captures the early thesis; promising deals graduate into the deeper analysis workspace.",
      ],
      [
        "Flexible scenarios vs. comparable deals",
        "Every property has quirks, but wholly free-form models become impossible to compare. A shared financial spine preserves consistent metrics while allowing title-split and refinance assumptions to vary.",
      ],
      [
        "Live realism vs. portfolio safety",
        "The strongest demo would use real deals and team activity, but that would expose sensitive commercial information. Sample records reproduce the operating pattern while authentication and local fallback keep the public experience dependable.",
      ],
    ],
    decisions: [
      [
        "Make calculations durable",
        "An analysis can be saved, revisited and moved through the pipeline, so the assumptions that justified a deal remain attached to its later execution.",
      ],
      [
        "Separate rapid triage from full underwriting",
        "Early opportunities need speed; serious opportunities need depth. Distinct modes prevent detailed modelling from becoming a barrier to capturing a promising lead.",
      ],
      [
        "Design the demo as a product surface",
        "Guest access is the primary public route, with preloaded data and a safe fallback. Reviewers experience the workflow instead of meeting an empty login screen.",
      ],
    ],
    outcome:
      "A durable property-deal workspace that keeps the financial thesis attached from first-pass analysis through acquisition, giving teams one place to compare, progress and revisit opportunities.",
    links: [
      ["Interactive demo", "https://propfolio-demo.netlify.app/?demo=1"],
      ["GitHub", "https://github.com/u-kaushik/Propfolio-Portfolio"],
    ],
  },
];

const projectOrder = [
  "globotrotter",
  "clear-halal",
  "fullwise",
  "app-factory",
  "mission-control",
  "rca-flow",
  "propfolio",
];

export const projects = projectOrder.map((slug) => projectCatalog.find((project) => project.slug === slug));
