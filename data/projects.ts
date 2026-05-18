import { ProjectData } from "@/components/ui/project-card";

/**
 * Projects Database
 *
 * Add new projects to this array. Each project should include:
 * - title: Project name
 * - description: Short description for card preview
 * - content: (optional) Full markdown/HTML content for detail page
 * - tags: Array of technology/skill tags
 * - date: Date or time period (e.g., "2024", "MEng, University of Galway")
 * - slug: URL slug for detail page (e.g., "project-name")
 * - images: (optional) Array of image paths in /public folder
 * - icon: (optional) Custom icon component (defaults to Code icon)
 */

export const projectsDatabase: ProjectData[] = [
  {
    title: "ML-Accelerated Aeroelastic Modelling of Onshore Wind Turbines",
    description:
      "Literature review and research study proposal identifying machine learning as the unexploited lever for breaking computational cost barriers in wind turbine simulation. Proposed ML-integration programme targeting 2.3–3.1× speed-ups through CFD-ML coupling, neural-network turbulence closures, and surrogate FEM. Graded 98% — highest in cohort, subsequently adopted as reference document for master's research projects.",
    tags: ["CFD", "FEM", "Machine Learning", "Aeroelastics", "Research"],
    date: "MEng, University of Galway",
    slug: "wind-turbine-aeroelastic",
    section: "headline",
    images: [
      "/preview-01.png",
      "/preview-02.png",
      "/preview-04.png",
      "/preview-05.png",
    ],
  },
  {
    title: "PhysicsML Patent",
    description:
      "Built a real-time autoregressive LSTM that solves a thermo-fluid simulation problem existing ML architectures couldn't handle — adapting Google DeepMind's early chatbot architecture to work on continuous physics.",
    section: "headline",
    content: `<h2>R&D Patent: Real-Time Autoregressive ML for Multiphysics Reduced-Order Modelling</h2>
<p><strong>Graduate R&D Engineer, Trane Technologies — patent passed internal IP council first review, under review at BrainBox AI ahead of submission</strong></p>

<p><em>The specific nature of the deployment and application is the patentable material and cannot be disclosed. The information below is limited to what can be shared publicly.</em></p>

<p>While building a real-time digital twin for hardware-in-the-loop testing, I had to model a thermo-fluid system whose dynamics were too heavy to compute in real time. The legacy non-linear variable solvers couldn't keep up, and I was being forced to scale down the dynamics to hold the HIL loop together. Rather than accept the degraded fidelity, I built a lightweight ML model that compressed the behaviour into 40MB of RAM and ran inside the Simulink real-time environment alongside the existing model stack.</p>

<p><strong>Result: 40MB RAM footprint, stable across 150,000+ autoregressive iterations, 95% correlation in dynamics and rate-of-change, 90% correlation in magnitude — all before large-scale fine-tuning. Patent passed IP council on first review in four months as a graduate.</strong></p>

<h3>Business value</h3>
<p>Current FMU-based models across the product line have been fidelity-reduced to stay real-time — a forced trade between accuracy and compute. This approach removes that trade. If the method scales, the same architecture can be retrained per product to increase the fidelity of existing real-time FMU models without increasing compute cost. Previous internal attempts to use ML for this broke when integrating into a C++ environment; this method leaves a clean export path via ONNX, which deploys directly into embedded C++.</p>

<h3>The framing move</h3>
<p>I treated this as a streaming prediction problem, not a forecasting one. Existing physics-ML tools in the literature predicted the next 20% of a system from the prior 80% — useful for offline analysis, useless for real-time HIL. I wanted a model that consumed the system tick-by-tick and produced the next state in real time. A literature review confirmed no existing system did this for multiphysics ROMs, so I reworked pre-transformer autoregressive text prediction architectures from DeepMind and adapted them to a continuous physics regime.</p>

<h3>Model architecture</h3>
<ul>
<li><strong>Sliding-window LSTM</strong> — ingests the last <em>n</em> points of dependent variable X with a paired window of control input Y</li>
<li><strong>Recursive rollout</strong> — predicts X at <em>t+1</em>, ejects the oldest entry from the inlet stack, appends the prediction to the end, rolls forward tick by tick</li>
<li><strong>Jumpstart seed</strong> — initial seed value starts the mechanism</li>
<li><strong>Scaleable windows</strong> — input and output window sizes configurable</li>
<li><strong>Physical realism constraint</strong> — enforced on the rollout itself, kept the model bounded and accurate past 150,000+ iterations</li>
</ul>

<h3>Training pipeline</h3>
<ul>
<li><strong>Modular and config-driven</strong> — Python/TensorFlow pipeline built so architecture, hyperparameters, and data settings could be swapped via config</li>
<li><strong>Data ingest</strong> — 600 hours of data at ~83ms sampling rate, with configurable timestep resampling</li>
<li><strong>Hyperparameter search</strong> — Optuna sweeps integrated into the pipeline</li>
<li><strong>Evaluation suite</strong> — RMSE plus a real-vs-predicted dynamics ratio across multiple physical parameters</li>
</ul>

<h3>Recognition</h3>
<ul>
<li>One of two patents submitted by the Irish R&D team that year, completed in four months as a graduate student</li>
<li>Passed Trane Technologies' internal IP council on first review</li>
<li>Currently under review at BrainBox AI ahead of external patent office submission</li>
</ul>`,
    tags: ["Machine Learning", "LSTM", "Python", "TensorFlow", "ONNX", "Patent", "Digital Twin", "Physics Simulation"],
    date: "Trane Technologies",
    slug: "physicsml-patent",
  },
  {
    title: "On-Prem Cursor",
    description:
      "Built an on-prem, IP-safe agentic coding platform (Ollama + open-source VS Code agent + Open WebUI) for a Fortune 500 hardware R&D team at Trane — adopted by 2–5 engineers, used on departmental ML pipelines.",
    section: "headline",
    content: `<h2>Side Project: On-Prem Agentic Coding Platform</h2>
<p><strong>Self-initiated tooling, Trane Technologies — adopted by 2–5 engineers; triggered an internal review into team-wide Claude adoption</strong></p>

<p>The department needed to scale up ML pipeline work and lift engineering throughput with AI, but had no viable route to get there. Frontier coding agents like Cursor were off-limits for IP reasons — proprietary source and physics code couldn't go to external API providers — and there was no existing internal stack, just legacy Python code that was undocumented and whose owners had departed.</p>

<p>I built the platform that closed both gaps: a self-hosted inference server on a GPU workstation running open-source models via Ollama, paired with an open-source agentic VS Code extension on each engineer's laptop pointed at the internal endpoint. Cursor-style agentic coding inside the network perimeter, with no data egress.</p>

<h3>Scope of the build</h3>
<ul>
<li><strong>Inference host</strong> — provisioned a GPU workstation as a shared inference node, served open-weights models through Ollama with concurrency handling</li>
<li><strong>Client integration</strong> — configured an open-source agentic VS Code extension on engineer laptops to route completions to the internal endpoint</li>
<li><strong>Open WebUI front-end</strong> — stood up Open WebUI on the host to give non-VS Code users a chat interface against the same models</li>
<li><strong>Powertrain review agent</strong> — a prompt and knowledge base scoped to engine powertrain requirements, judging machine performance data against spec</li>
</ul>

<h3>Technical skills demonstrated</h3>
<ul>
<li><strong>Local LLM inference & serving</strong> — Ollama, open-weights model selection, context-window tuning, concurrent request handling</li>
<li><strong>Agent orchestration</strong> — open-source agentic VS Code extension reconfigured against a non-default endpoint</li>
<li><strong>Applied LLM tooling</strong> — Open WebUI for shared chat + knowledge-base access</li>
<li><strong>MLOps / platform thinking</strong> — designing a shared internal service with sensible defaults for non-ML engineers</li>
</ul>

<h3>Business value delivered</h3>
<ul>
<li><strong>Removed the IP blocker</strong> on agentic coding — engineers could use Cursor-equivalent tooling on proprietary code without procurement or data egress concerns</li>
<li><strong>Closed the legacy-tooling gap</strong> — teammates began generating and maintaining their own internal utilities</li>
<li><strong>Lifted ML pipeline throughput</strong> — used as the primary coding assistant for the department's physics modelling ML pipeline work</li>
</ul>

<h3>Recognition</h3>
<ul>
<li>Internal review into team-wide Claude adoption triggered by platform traction</li>
<li>Powertrain review agent achieved 80–90% agreement with manual review</li>
</ul>`,
    tags: ["Ollama", "LLM", "VS Code", "Open WebUI", "MLOps", "Agent Orchestration", "Python"],
    date: "Trane Technologies",
    slug: "on-prem-cursor",
  },
  {
    title: "TK Telematics",
    description:
      "Stepped up as a graduate to own and lead the OTA telematics validation campaign at Trane Technologies — 100% failure to 100% pass rate, 20+ tests, $2M+ risk retired, shipped on time for flagship V1 release.",
    section: "headline",
    content: `<h2>Graduate Engineer, Trane Technologies</h2>

<p>A previous product launch without OTA update capability had cost the business <strong>over $2M</strong> in manual dealer workshop campaigns. With no existing validation campaign, no oversight, and the product approaching release, leadership identified that OTA capability had been overlooked and added late as a requirement. I stepped up as a graduate to own and lead the campaign from scratch, and subsequently delivered it in <strong>two months</strong>.</p>

<p><strong>Result: 100% failure rate → 100% pass rate. 20+ tests completed. Feature shipped on time for the flagship V1 product release.</strong></p>

<h3>The Challenge</h3>
<p>Connected Solutions, the internal division responsible for the telematics device and OTA infrastructure, were consistently missing deliverables and failing tests with no explanation surfacing through existing channels. No structured communication. No visibility. A gate deadline closing in on a flagship launch.</p>

<p>I became the single communication point between Connected Solutions and the wider engineering team — including the R&D Lead — responsible for bridging two teams that weren't talking.</p>

<h3>What I Did</h3>
<p>I designed the test plan from scratch and built a live tracking document visible to all engineering stakeholders, then drove the campaign — scheduling, holding Connected Solutions accountable, and keeping the wider engineering team and R&D Lead informed and aligned throughout.</p>

<p>When failures persisted, I led the diagnostic work. I downloaded and analysed CAN bus logs to diagnose communication chatter and capture update behaviour, logging all failures with supporting data in HPE ALM to build a traceable evidence base.</p>

<p>That investigation surfaced the root cause: Connected Solutions' internal development and production servers were not being correctly prioritised, silently blocking progress on both sides. I escalated to management with a clear case. Server priorities were reset and the team unblocked.</p>

<h3>Scope of the Campaign</h3>
<ul>
<li><strong>Test plan ownership</strong> — designed and sequenced a 20+ test matrix across nominal, edge, and deliberate failure conditions</li>
<li><strong>Key communication point</strong> — sole interface between Connected Solutions and the wider engineering team, including the R&D Lead</li>
<li><strong>Stakeholder tracking</strong> — built and maintained a live campaign tracker visible across the engineering organisation</li>
<li><strong>CAN bus diagnostics</strong> — extracted and analysed bus logs to diagnose communication chatter and evidence OTA update failures</li>
<li><strong>Defect management</strong> — logged all failures with diagnostic data in HPE ALM</li>
<li><strong>Root cause & escalation</strong> — identified server deprioritisation as the systemic blocker; escalated to management</li>
</ul>

<h3>Outcome</h3>
<p><strong>100% failure → 100% pass rate</strong>, including edge and failure cases. <strong>20+ validated tests</strong> delivered before the gate deadline in <strong>two months</strong>. OTA update capability shipped safely as part of the <strong>flagship V1 product release</strong> — retiring the conditions that had cost the previous programme <strong>$2M+</strong>.</p>`,
    tags: ["OTA Updates", "Telematics", "CAN Bus", "Testing", "Project Management", "HPE ALM"],
    date: "Trane Technologies",
    slug: "tk-telematics",
  },
  // Personal Projects
  {
    title: "Hallbach Motor",
    description: "Independent research project developing the first electromagnet Halbach array for motor stators. 30% increase in peak torque vs standard pole array, validated through Ansys Maxwell CEM modelling and 3D-printed prototype. Selected for Start100 accelerator with €4,000 funding, offered PhD route and spinout path.",
    content: `<h3>Independent Research Project: Halbach vs Standard Electromagnet Array for Motor Stators</h3>
<p><strong>Third-year summer research project, undergraduate engineering — selected for college startup accelerator, offered onward PhD route and spinout path</strong></p>

<p>While working on magnet configurations, I realised that although the Halbach array is well-characterised for permanent magnets, nobody had built or tested an <em>electromagnet</em> Halbach array — the same flux-shaping principle applied to wound coils rather than fixed magnets. The summer project set out to fill that gap: develop a computational electromagnetic model of an electromagnet Halbach configuration, verify it against analytical hand calculations, and validate it experimentally on a working prototype.</p>

<p><strong>Result: 30% increase in peak torque (Halbach electromagnet array vs standard pole array). Ansys Maxwell CEM model cross-checked with hand calculations and confirmed on a 3D-printed prototype stator. Selected for the Start100 accelerator with €4,000 in funding; offered both a PhD continuation and a college-backed startup spinout off the back of the work.</strong></p>

<p>I observed that the Halbach array concentrates flux on one side of the coil stack and cancels it on the other — which means the back iron in a conventional motor (there to provide a return path for the flux) becomes redundant. Removing it saves weight and shifts the operating envelope. For the same airgap flux density, you can drive the motor at higher voltage and lower current, which improves efficiency directly through reduced I²R losses. The novelty of applying this to electromagnets specifically is that flux strength becomes controllable in real time via coil current — something a permanent-magnet Halbach cannot do. Secondarily, high voltage architecture in EVs is much lighter as a reduced area of copper is required for the same power density. EV's follow a law where every kilo removed, removes a kilo of necessary battery weight, therefore, if you remove 50 kg of cumulative back iron, you remove 100kg of mass from the car, and subsequently increase the range.</p>

<h3>Scope of the project</h3>
<ul>
<li><strong>Ansys Maxwell CEM modelling</strong> — built side-by-side computational electromagnetic models of a standard pole array (peak field ~38.8 mT in the back iron) and a Halbach electromagnet array (peak ~27 mT, with the field redistributed into the airgap rather than the iron return path).</li>
<li><strong>Analytical cross-check</strong> — derived the expected field distributions by hand and verified that the Maxwell solver output matched first-principles electromagnetics, before trusting the simulation for downstream torque analysis.</li>
<li><strong>Full-motor field analysis</strong> — extended the comparison from linear coil stacks to a rotational stator geometry, comparing field distribution around the airgap and into the rotor.</li>
<li><strong>Torque-vs-angle characterization</strong> — swept rotor angle from −20° to +20° for both configurations. Halbach peaked at ~1.9 Nm vs ~0.5 Nm for the standard array — a ~30% gain at the operating point, with a much cleaner sinusoidal profile.</li>
<li><strong>Prototype build and experimental validation</strong> — designed and 3D-printed a stator housing, wound the coils in the Halbach orientation, fitted an existing two-pole induction rotor inside it, and confirmed the simulated torque improvement on the bench. Closed the loop between hand calculation, CEM prediction, and physical measurement.</li>
</ul>

<h3>Recognition</h3>
<ul>
<li><strong>Selected for UoG Start100, a highly competitive college startup summer accelerator</strong>, with €4,000 in funding to develop the topology commercially. Pitched the work to leading Irish founders as part of the programme.</li>
<li><strong>Offered a funded PhD route</strong> to continue the research at postgraduate level.</li>
<li><strong>Offered a college-backed startup spinout</strong> to commercialise the topology — the back-iron reduction case is commercially interesting because motor weight directly drives EV range and aerospace payload economics, and the controllable-flux aspect of an electromagnet variant opens applications a permanent-magnet Halbach cannot reach.</li>
<li>Chose to continue into industry rather than take either route, but the accelerator selection and both offers came directly off the strength of the validated electromagnet topology.</li>
</ul>`,
    tags: ["Motor Design", "Electromagnetics", "Ansys Maxwell", "CEM", "Prototyping", "Research", "3D Printing"],
    date: "University of Galway",
    slug: "hallbach-motor",
    section: "Personal Projects",
    images: ["/image.png", "/image 1.png", "/image 2.png", "/image 3.png"],
  },
  {
    title: "YC AI Startup School",
    description: "Hand-picked attendee for Y Combinator's inaugural AI Startup School — one of 2,500 top CS undergrads, masters, and PhD candidates in AI worldwide. Flown to San Francisco for two-day conference at Pier 48 with talks from Sam Altman, Elon Musk, Satya Nadella, Andrej Karpathy, Fei-Fei Li, Andrew Ng, John Jumper, and Aravind Srinivas.",
    content: `<h2>Selection: YC AI Startup School 2025</h2>
<p><strong>Hand-picked attendee, Y Combinator AI Startup School — San Francisco, June 2025</strong></p>

<p>Selected as one of four attendees from Ireland for Y Combinator's inaugural AI Startup School, a <strong>hand-picked gathering of 2,500 of the top CS undergrads, masters, and PhD candidates in AI worldwide.</strong> Flown out to San Francisco for the two-day conference at Pier 48 alongside fellow Irish attendee Eoin [surname].</p>

<p><strong>Result: 4 of 2,500 attendees globally. $25k AWS credits. Direct exposure to talks from Sam Altman, Elon Musk, Satya Nadella, Andrej Karpathy, Fei-Fei Li, Andrew Ng, John Jumper, and Aravind Srinivas.</strong></p>

<p><a href="https://events.ycombinator.com/ai-sus" target="_blank" rel="noopener noreferrer">https://events.ycombinator.com/ai-sus</a></p>

<h3>Selection bar</h3>
<ul>
<li><strong>Hand-picked admissions</strong> — YC reviewed technical achievements rather than credentials alone: shipped projects, papers, open-source contributions, products with real users.</li>
<li><strong>Cohort scale</strong> — 2,500 attendees globally drawn from CS, ML, applied maths, and robotics programmes; the cohort skewed heavily toward grad students and early-stage founders.</li>
<li><strong>Sponsor credits</strong> — $25k in AWS credits provided to attendees as a conference perk, applied toward subsequent build work.</li>
</ul>

<h3>What came out of it</h3>
<ul>
<li><strong>International network in AI and robotics</strong> — direct connections into the SF AI scene and across to ETH Zürich, spanning early-stage founders, robotics researchers, and applied ML engineers.</li>
<li><strong>VC introductions</strong> — intros to several top-tier US venture firms made on the back of the event.</li>
<li><strong>Speaker substance</strong> — talks from Altman (OpenAI's early-days near-misses on AGI), Karpathy (the trajectory of agents), Nadella, Musk, Fei-Fei Li, Andrew Ng, John Jumper (AlphaFold), and Aravind Srinivas (Perplexity). The candour on what doesn't work was the unexpected through-line.</li>
</ul>`,
    tags: ["Y Combinator", "AI", "Machine Learning", "Networking", "San Francisco", "Startups"],
    date: "June 2025",
    slug: "yc-ai-startup-school",
    section: "Scholarships Awards honous & recognitionh",
    images: ["/social_media_aisus-61de8e53bc438272.png"],
  },
];

