import ProjectWriteup from '../components/ProjectWriteup'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'The Problem' },
  { id: 'system', label: 'System Design' },
  { id: 'agents', label: 'Agent Network' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'outcome', label: 'Outcome' },
]

function Content() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* Overview */}
      <section id="overview" data-section>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-offwhite mb-6">
          Overview
        </h2>
        <p className="font-heading text-offwhite/60 text-base md:text-lg leading-relaxed mb-4">
          Mission Control is a personal AI operating system — a single dashboard that coordinates 9 specialised AI agents, task orchestration, semantic memory, and business execution. It's the command centre for running an entire operation with AI.
        </p>
        <p className="font-heading text-offwhite/60 text-base md:text-lg leading-relaxed">
          Built on React and Supabase with real-time data, it integrates with Telegram for mobile command and uses the EOS (Entrepreneurial Operating System) framework to align every AI action with quarterly business objectives.
        </p>
      </section>

      {/* The Problem */}
      <section id="problem" data-section>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-offwhite mb-6">
          The Problem
        </h2>
        <p className="font-heading text-offwhite/60 text-base md:text-lg leading-relaxed mb-4">
          Running a one-person operation means juggling research, content creation, code reviews, deployments, marketing, and project management. AI tools exist for each of these, but they're siloed — no shared context, no coordination, no memory of what happened yesterday.
        </p>
        <p className="font-heading text-offwhite/60 text-base md:text-lg leading-relaxed">
          Mission Control solves this by giving every agent access to the same semantic memory, the same task queue, and the same business objectives. The operator focuses on strategy. The agents handle execution.
        </p>
      </section>

      {/* System Design */}
      <section id="system" data-section>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-offwhite mb-6">
          System Design
        </h2>
        <div className="bg-[#1A1210] border border-offwhite/[0.06] rounded-2xl p-6 md:p-8 mb-6">
          <div className="font-mono text-[11px] text-offwhite/50 leading-relaxed space-y-1">
            <p className="text-offwhite/30">{'// System architecture'}</p>
            <p><span className="text-signal">Operator</span> (Telegram / Dashboard)</p>
            <p>&nbsp;&nbsp;{'→'} <span className="text-offwhite/70">Jarvis</span> (central orchestrator)</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{'→'} <span className="text-offwhite/70">Semantic Memory</span> (Supabase + pgvector)</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{'→'} <span className="text-offwhite/70">Task Queue</span> (priority-weighted, agent-assigned)</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{'→'} <span className="text-offwhite/70">Agent Pool</span> (9 agents, skill-routed)</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{'→'} <span className="text-offwhite/70">EOS Layer</span> (rocks, scorecard, issues)</p>
            <p>&nbsp;&nbsp;{'→'} <span className="text-signal">Real-time Dashboard</span></p>
          </div>
        </div>
        <p className="font-heading text-offwhite/60 text-base md:text-lg leading-relaxed">
          Every interaction is logged, vectorised, and stored in semantic memory. When any agent picks up a new task, it retrieves relevant context from past interactions, making the system genuinely smarter over time.
        </p>
      </section>

      {/* Agent Network */}
      <section id="agents" data-section>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-offwhite mb-6">
          Agent Network
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'Jarvis', role: 'Orchestrator', desc: 'Central hub. Routes tasks, maintains context, coordinates all agents via Telegram and dashboard.' },
            { name: 'Sola', role: 'Researcher', desc: 'Deep research on any topic. Produces structured reports with sources and recommendations.' },
            { name: 'Archie', role: 'Architect', desc: 'Technical architecture and system design. Produces specs that Kai can execute against.' },
            { name: 'Kai', role: 'Builder', desc: 'Full-stack code generation. Builds features, fixes bugs, writes tests.' },
            { name: 'Iris', role: 'Reviewer', desc: 'Code review, QA, and quality enforcement. Blocks anything that doesn\'t meet standards.' },
            { name: 'Luna', role: 'Designer', desc: 'Visual asset generation. Icons, social graphics, brand materials via AI image models.' },
            { name: 'Echo', role: 'Writer', desc: 'Long-form content, marketing copy, email sequences. Matches brand voice.' },
            { name: 'Dash', role: 'DevOps', desc: 'Deployment, monitoring, infrastructure. Keeps everything running.' },
            { name: 'Quinn', role: 'PM', desc: 'Product management. Tracks rocks, scorecards, and EOS execution metrics.' },
          ].map((agent) => (
            <div
              key={agent.name}
              className="bg-offwhite/[0.03] border border-offwhite/[0.06] rounded-xl p-4 md:p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading font-bold text-sm text-offwhite">{agent.name}</span>
                <span className="font-mono text-[10px] text-signal">{agent.role}</span>
              </div>
              <p className="font-heading text-sm text-offwhite/40 leading-relaxed">{agent.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard */}
      <section id="dashboard" data-section>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-offwhite mb-6">
          Dashboard
        </h2>
        <p className="font-heading text-offwhite/60 text-base md:text-lg leading-relaxed mb-6">
          The real-time dashboard is the single pane of glass for the entire operation. It surfaces live agent activity, task throughput, system health, and business metrics in one view.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { feature: 'Live Agent Feed', desc: 'Real-time stream of every agent action, colour-coded by type.' },
            { feature: 'Throughput Chart', desc: 'Task completion velocity over time, with spike detection.' },
            { feature: 'EOS Scorecard', desc: 'Weekly business metrics aligned to quarterly rocks and goals.' },
          ].map((f) => (
            <div key={f.feature} className="bg-offwhite/[0.03] border border-offwhite/[0.06] rounded-xl p-4">
              <span className="font-heading font-semibold text-sm text-offwhite block mb-1">{f.feature}</span>
              <span className="font-heading text-xs text-offwhite/40">{f.desc}</span>
            </div>
          ))}
        </div>
        <p className="font-heading text-offwhite/60 text-base md:text-lg leading-relaxed">
          The operator can issue commands via Telegram or the dashboard. Jarvis interprets natural language instructions, breaks them into sub-tasks, and routes them to the right agents. Status updates flow back in real time.
        </p>
      </section>

      {/* Tech Stack */}
      <section id="stack" data-section>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-offwhite mb-6">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { category: 'Frontend', items: 'React, Tailwind CSS, GSAP, Recharts' },
            { category: 'Backend', items: 'Supabase (Postgres, Auth, Realtime, Edge Functions)' },
            { category: 'AI Layer', items: 'GPT-4o, Claude, pgvector for semantic search' },
            { category: 'Integration', items: 'Telegram Bot API, EOS framework, webhook system' },
          ].map((row) => (
            <div key={row.category} className="bg-offwhite/[0.03] border border-offwhite/[0.06] rounded-xl p-4">
              <span className="font-mono text-[10px] text-signal uppercase block mb-1">{row.category}</span>
              <span className="font-heading text-sm text-offwhite/60">{row.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section id="outcome" data-section>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-offwhite mb-6">
          Outcome
        </h2>
        <p className="font-heading text-offwhite/60 text-base md:text-lg leading-relaxed mb-4">
          Mission Control demonstrates that a single operator, armed with the right AI infrastructure, can run a complex operation that would traditionally require a full team. Every agent is production-grade, every interaction is logged, and the system compounds in value through semantic memory.
        </p>
        <p className="font-heading text-offwhite/60 text-base md:text-lg leading-relaxed mb-8">
          This is the operating system I use daily — it's not a concept project. It manages real tasks, produces real outputs, and gets measurably better at understanding my business every week.
        </p>
        <div className="flex flex-wrap gap-6">
          {[
            { metric: '9', label: 'Active Agents' },
            { metric: '847+', label: 'Tasks Routed' },
            { metric: '99.7%', label: 'System Uptime' },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="font-heading font-bold text-3xl md:text-4xl text-signal block">{stat.metric}</span>
              <span className="font-mono text-[10px] text-offwhite/30 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default function MissionWriteup() {
  return (
    <ProjectWriteup
      project={{
        title: 'Mission Control',
        tagline: 'One dashboard to run an entire AI-powered operation.',
        year: '2025',
        tags: ['TypeScript', 'React', 'Supabase', 'Semantic Memory', 'EOS'],
        github: 'https://github.com/u-kaushik/Mission-Control-Portfolio',
        live: 'https://demomissioncontrol.netlify.app/',
        sections,
        content: <Content />,
      }}
    />
  )
}
