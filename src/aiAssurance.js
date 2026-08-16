export const aiAssurance = {
  globotrotter: {
    principle:
      "Let the model be creative with the trip. Keep it well away from the money, identity and account rules.",
    items: [
      [
        "Bounded context",
        "Planner prompts receive the trip and preference context they need, without unrestricted access to the user account.",
      ],
      [
        "Schema validation",
        "Itineraries must match a typed response contract before the interface accepts or charges for the result.",
      ],
      [
        "Golden-trip evals",
        "Representative city, duration and preference cases test relevance, completeness, repetition and budget adherence across prompt or model changes.",
      ],
      [
        "Operational fallback",
        "Timeouts and malformed responses fail visibly without silently consuming fuel; server-side logs support diagnosis without exposing secrets.",
      ],
    ],
    maturity: {
      current: [
        "Server-side AI boundary",
        "Fuel and entitlement checks",
        "Visible failure states",
      ],
      next: [
        "Version prompt + model pairs",
        "Gate releases on golden-trip evals",
        "Canary new planner versions",
        "Monitor failure and regeneration rates",
      ],
    },
  },
  "clear-halal": {
    principle:
      "When trust matters, a reviewable rule is worth more than a very confident guess.",
    items: [
      [
        "Narrow authority",
        "OCR extracts visible text; the system does not issue religious rulings or invent certification status.",
      ],
      [
        "Deterministic classifier",
        "Known terms map to explicit outcomes, evidence and next steps through reviewable rules.",
      ],
      [
        "Label-suite evals",
        "A fixed corpus covers clear, ambiguous, misspelled and OCR-noisy labels, with expected triggers and acceptable uncertainty states.",
      ],
      [
        "Safe failure",
        "Low-confidence or source-dependent cases resolve to “check the source,” not an unjustified green light.",
      ],
    ],
    maturity: {
      current: [
        "On-device OCR",
        "Reviewable deterministic rules",
        "Explicit uncertainty state",
      ],
      next: [
        "Version the label corpus",
        "Set a zero-tolerance false-green gate",
        "Run OCR noise tests in CI",
        "Add corrected scans to regression cases",
      ],
    },
  },
  fullwise: {
    principle:
      "Give useful guidance, but never pretend a food estimate is a clinical fact.",
    items: [
      [
        "Scope boundaries",
        "The advisor supports reflection and everyday choices; prompts prohibit diagnosis, treatment and moral labels around food.",
      ],
      [
        "Structured estimates",
        "Meal analysis returns typed nutrients, uncertainty and editable assumptions rather than prose the interface has to guess at.",
      ],
      [
        "Scenario evals",
        "A harness tests ordinary meals, vague portions, eating-disorder cues, medical questions and adversarial instructions for accuracy and safe escalation.",
      ],
      [
        "Human correction loop",
        "Users can edit the estimate; corrections become improvement signals rather than being overwritten by model confidence.",
      ],
    ],
    maturity: {
      current: [
        "Editable estimates",
        "Durable processing queue",
        "App Check and server boundary",
      ],
      next: [
        "Version prompts, models and safety policy",
        "Gate on nutrition and safety scenarios",
        "Canary advisor changes",
        "Review sampled corrections for drift",
      ],
    },
  },
  "app-factory": {
    principle:
      "Trust the workflow, verify the artefact and do not let one confident agent mark its own homework.",
    items: [
      [
        "Least-privilege tools",
        "Agents receive only the tools and project scope required for their stage; deployment and destructive operations remain gated.",
      ],
      [
        "Structured handoffs",
        "Blueprints, patches and reviews follow versioned schemas so missing evidence is detectable before the next agent proceeds.",
      ],
      [
        "Regression harness",
        "Fixture projects score requirement coverage, build success, tests, security findings and release-asset completeness across model or prompt changes.",
      ],
      [
        "Independent review",
        "Builder and reviewer are separate roles; failed checks loop back with evidence, while consequential releases require human approval and an audit trail.",
      ],
    ],
    maturity: {
      current: [
        "Stage gates",
        "Structured artefact handoffs",
        "Separate builder and reviewer roles",
      ],
      next: [
        "Fixture-project eval suite",
        "Minimum CI scores by stage",
        "Pinned model/prompt registry",
        "Canary changes on low-risk projects first",
      ],
    },
  },
  "mission-control": {
    principle:
      "Automation can move the work along. It still needs to show who sent what, why it happened and how to stop it.",
    items: [
      [
        "Human send control",
        "Consequential campaigns and replies remain reviewable, with visible state before activity leaves the system.",
      ],
      [
        "Role boundaries",
        "Specialist agents have named responsibilities and scoped workflows instead of one general agent with access to everything.",
      ],
      [
        "Operational evidence",
        "Campaign, contact and conversation records preserve status and outcomes so automation can be audited against what actually happened.",
      ],
    ],
    maturity: {
      current: [
        "Named agent roles",
        "Visible campaign state",
        "Human-controlled sends",
        "Separate sample-data demo",
      ],
      next: [
        "Formal sending caps by campaign",
        "Approval logs for outbound changes",
        "Regression fixtures for agent handoffs",
        "Anomaly alerts for reply and bounce rates",
      ],
    },
  },
};
