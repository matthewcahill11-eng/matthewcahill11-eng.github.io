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
    title: "Master's Thesis WP1: Simulink Model of Thermo King Advancer VCC",
    description:
      "Built real-time Simulink/Simscape model of Thermo King Advancer A-500 for HiL testing:\n• 19.5 kW cooling capacity at 0°C validated against bench data\n• Real-time execution at 0.1s timestep on commodity hardware\n• Full evaporator, trailer thermal network, and Cycle-Sentry controller\n• First HiL simulator demonstrated for transport refrigeration",
    tags: ["Simulink", "Simscape", "HiL", "Digital Twin", "VCC", "Real-Time Simulation", "MATLAB"],
    date: "M.E. Mechanical Engineering, University of Galway",
    slug: "masters-thesis-wp1",
    section: "Trane Technologies",
    headline: true,
    images: ["/wp1 image.png", "/wp1 2.png"],
    content: `<h2>Master's Thesis Work Package 1: Simulink Model of the Thermo King Advancer Vapour Compression Cycle</h2>
<p><strong>M.E. Mechanical Engineering, University of Galway — industry-sponsored by Thermo King / Trane Technologies</strong></p>

<p>Built a real-time-capable Simulink and Simscape Fluids model of the Thermo King Advancer A-500 single-temperature vapour compression cycle, tuned to the system's rated 19.5 kW cooling capacity at 0°C, with a Cycle-Sentry-equivalent On-Off hysteresis controller running inside the model. Part of the first hardware-in-the-loop simulator demonstrated for transport refrigeration in the literature.</p>

<p><strong>Result: 19.5 kW cooling capacity at 0°C reproduced. Real-time execution on commodity hardware. Behaviour validated against bench data from a real Advancer A-500.</strong></p>

<p>The model is the digital half of the HiL system — the component the embedded controller talks to as if it were wired to a real Advancer. The original plan was a mathematical model from scratch, built on the Alleyne research group's two-phase heat exchanger models; this was carried through to December and could not be integrated with the HiL system in time. The model was rebuilt from scratch in January using Simscape Fluids, with the compressor and condenser deliberately simplified to fluid reservoirs to keep the system real-time-capable for HiL operation.</p>

<h3>Scope of the model</h3>
<ul>
<li><strong>Simscape Fluids two-phase network</strong> — full evaporator subsystem (cross-flow heat exchanger against the trailer return air), refrigerant mass-flow source, and fixed-enthalpy reservoirs standing in for the compressor and condenser.</li>
<li><strong>Trailer thermal network</strong> — Simscape moist-air constant-volume chamber for the cargo box, plus a lumped thermal resistance and thermal-mass network for the trailer walls, parameterised against Bin Li's 13 m trailer model.</li>
<li><strong>Cycle-Sentry-equivalent controller</strong> — On-Off hysteresis with a 0°C lower and +3°C upper threshold relative to setpoint, replicating the engine-modulation behaviour of the real Cycle Sentry operating mode.</li>
<li><strong>Solver configuration</strong> — ode1 Euler forwards at a 0.1 s fixed timestep. Backwards Euler was trialled and failed with tick-missed errors at the minimum stable timestep, so Euler forwards was retained as the only solver that held both stability and real-time compliance.</li>
<li><strong>Honest scope limits</strong> — refrigerant in the model is R134a, against R452A in the real Advancer; compressor and condenser are reservoirs rather than first-principles models. Both are named in the discussion chapter and are real sources of discrepancy against the bench data.</li>
</ul>

<h3>How the gap surfaced</h3>
<p>During validation, the model's modulation cycle ran roughly 4.32× faster than the real Advancer — the bench data showed an 1,080 s peak-to-peak first modulation cycle against 250 s in simulation. Rather than tuning parameters until the curves matched, the discrepancy was diagnosed by reading the source code of the Simscape constant-volume moist-air chamber block. Line 578 of the block sums total internal energy across all ports instantaneously — the block assumes the cargo box reaches thermal equilibrium with no flow resistance or thermal inertia. That assumption is the root cause of the acceleration, and it cannot be parameterised out. The diagnosis was carried through to the discussion chapter as the principal limitation of the trailer subsystem, with a reduced-order CFD-trained surrogate flagged as the credible next step.</p>

<h3>Delivered</h3>
<ul>
<li>A validated VCC model of the Advancer A-500 tuned to 19.5 kW at 0°C, with peak cooling capacity verified close to specification across the -10°C case-study setpoint at 10°C ambient.</li>
<li>A Cycle-Sentry-equivalent controller running inside Simulink, validated to behave consistently with the intended 0°C / +3°C hysteresis design and reusable on the Arduino side of the HiL system.</li>
<li>A real-time-capable simulation that runs on commodity hardware at a 0.1 s fixed timestep — the prerequisite for using the model as the simulated machine in a HiL test loop.</li>
<li>A diagnosed limitation in the trailer cargo-box dynamics, root-caused to the Simscape block's instantaneous-equilibrium assumption rather than left as an unexplained discrepancy.</li>
</ul>

<h3>Recognition</h3>
<p>M.E. thesis at University of Galway (Module ME5110), industry-sponsored by Thermo King / Trane Technologies (Galway). Supervised by Mr. Padraig Conneely with industry advisor Marcus O'Mahony at Thermo King. Submitted 31st March 2025.</p>`,
  },
  {
    title: "Master's Thesis WP2: Arduino-based HiL Simulator for Transport Refrigeration",
    description:
      "Two-Arduino HiL rig bridging Simulink VCC model with real embedded controller:\n• 0.92°C RMSE temperature emulation via MCP4261 digital potentiometer\n• PT1000 RTD sensor emulation with SPI control and voltage divider\n• Validated On-Off control switching at −10°C setpoint\n• First demonstration of HiL for transport refrigeration controls",
    tags: ["Arduino", "HiL", "Embedded Systems", "SPI", "Control Systems", "Sensor Emulation", "C++"],
    date: "M.E. Mechanical Engineering, University of Galway",
    slug: "masters-thesis-wp2",
    section: "Trane Technologies",
    headline: true,
    images: ["/wp2.png", "/wp2 2.png", "/wp2 3.png"],
    content: `<h2>Master's Thesis Work Package 2: Arduino-based Hardware-in-the-Loop Simulator for Transport Refrigeration Controls</h2>
<p><strong>M.E. thesis (WP2), University of Galway — industry-sponsored by Thermo King / Trane Technologies</strong></p>

<p>Transport refrigeration controls development is gated by long, fuel-burning bench tests on real refrigeration units — a constraint Hardware-in-the-Loop (HiL) testing has solved in automotive but never been demonstrated for transport refrigeration. WP2 of this thesis designed and built the prototype HiL simulator: a two-Arduino rig that lets a real embedded controller interact with a Simulink vapour-compression-cycle model as if it were wired into a real Advancer A-500.</p>

<p><strong>Result: 0.92°C RMSE between Simulink-commanded temperature and Arduino-measured temperature across the operating wiper range; ±1°C accuracy on temperature emulation; correct On-Off control switching validated against the Simulink setpoint at −10°C with error well below the RMSE.</strong></p>

<p>The architecture follows the Gambino et al engine-HiL pattern, adapted to the PT1000 RTD sensor stack the Advancer uses for return and delivered air temperature.</p>

<h3>Scope of the work</h3>
<ul>
<li><strong>HiL front-end (Arduino #1)</strong> — A digital potentiometer (MCP4261) emulates the resistance behaviour of the PT1000 RTDs on the return and delivered air lines. Simulink runs in Connected I/O mode and writes the model's predicted air temperatures to the Arduino each timestep.</li>
<li><strong>Temperature-to-wiper mapping</strong> — A calibrated algorithm converts a model-predicted temperature into a wiper position, with the wiper position translated into the SPI command frame the MCP4261 expects.</li>
<li><strong>Embedded controller (Arduino #2)</strong> — Runs an On-Off hysteresis controller behaviourally equivalent to Thermo King's Cycle Sentry. Reads the potentiometer resistance via a voltage divider, computes temperature, and outputs the engine On/Off signal back into Simulink.</li>
<li><strong>Operating-range restriction (wiper positions 50–255)</strong> — Characterisation testing showed the voltage divider behaves linearly above wiper position 50 but exponentially below it. The operating range was restricted to the linear region rather than fitted with a piecewise correction — a deliberate scope call for a feasibility prototype.</li>
<li><strong>Solver and timestep</strong> — Simulink runs at a 0.1 s timestep with the ode1 Euler-forwards solver for real-time compatibility; backwards Euler was trialled and discarded after tick-missed errors.</li>
</ul>

<h3>How the operating-range decision surfaced</h3>
<p>The voltage divider feeding the controller Arduino showed a clean linear voltage-to-wiper relationship at high wiper values and an exponential rise at the low end. Tracing this back to the resistance-divider equation, the cause is straightforward — as the wiper resistance R₂ approaches zero the divider output blows up — so the nonlinearity is intrinsic to the topology, not a calibration artefact. The engineering call was to restrict the operating range to wiper positions 50–255 where the relationship is linear, accept the reduced span, and document the constraint. This is what the prototype is for: surfacing the integration realities of the sensor-emulation pipeline before a deployable design picks the topology.</p>

<h3>Delivered</h3>
<ul>
<li>Working two-Arduino HiL rig integrated with the Simulink VCC model via Connected I/O, with the model's predicted air temperatures driving the emulated PT1000 resistance in real time.</li>
<li>0.921768°C RMSE across the operating wiper range, computed across all sample points with the temperature control signal inside the 10°C to −30°C bounds.</li>
<li>Control-signal validation at the −10°C setpoint case: the Arduino controller correctly produced the On-Off engine command against the Simulink setpoint, with switching error well below the RMSE.</li>
<li><strong>Novel pipeline contribution</strong> — bridging a Simulink-modelled VCC with a real embedded controller via emulated sensors is the specific gap in the transport-refrigeration HiL literature this WP fills. Existing work covered partial load emulation (Otten et al) and small commercial fridges (Ramaswamy et al); neither closed the loop the way this rig does.</li>
</ul>

<h3>Honest framing</h3>
<p>The system is a prototype, not a deployed product. ATP certification for refrigerated transport allows ±0.5°C drift; the 0.92°C RMSE is below ATP tolerance for a prototype but would not be application-ready without further reduction. An industrial build using Speedgoat resistance I/O boards (spec'd to ±1 Ω accuracy) would meet ATP — this Arduino prototype is the feasibility demonstrator that justifies that investment.</p>

<h3>Recognition</h3>
<p>WP2 of an M.E. thesis at University of Galway, industry-sponsored by Thermo King / Trane Technologies. Supervised by Mr. Padraig Conneely (University of Galway) with industry advisor Marcus O'Mahony (Thermo King). The thesis is the first reported demonstration of HiL simulation applied to transport refrigeration.</p>`,
  },
  {
    title: "Master's Thesis WP3: Experimental Validation of Prototype HiL Simulator",
    description:
      "Ground-truth validation of HiL system against real Advancer A-500:\n• 6-hour bench test at Thermo King Galway with MultiDAC data acquisition\n• Behavioural validation confirmed at programme level\n• 4.32× modulation acceleration root-caused to Simscape assumption\n• ~50% cooling overshoot attributed to controller and refrigerant differences",
    tags: ["Experimental Validation", "Data Acquisition", "Root Cause Analysis", "MultiDAC", "Bench Testing"],
    date: "M.E. Mechanical Engineering, University of Galway",
    slug: "masters-thesis-wp3",
    section: "Trane Technologies",
    headline: true,
    images: ["/wp3 1.png", "/wp3 2.png", "/wp3 3.png"],
    content: `<h2>Master's Thesis Work Package 3: Experimental Validation of a Prototype HiL Simulator Against a Real Thermo King Advancer</h2>
<p><strong>M.E. thesis (WP3), University of Galway — industry-sponsored by Thermo King / Trane Technologies</strong></p>

<p>The first two work packages built a Simulink vapour-compression-cycle model and an Arduino-based HiL simulator for the Thermo King Advancer single-temperature platform. WP3 ran ground-truth bench testing on a real Advancer A-500 at the Galway R&D facility, cross-compared the model and HiL output against the measured data, and root-caused the discrepancies that surfaced.</p>

<p><strong>Result: behavioural validation of the model and HiL system confirmed at programme level. Two discrepancies isolated and root-caused — a 4.32× acceleration in modulation dynamics, traced to the Simscape constant-volume chamber's instantaneous-equilibrium assumption, and a ~50% cooling-capacity overshoot, attributed to the controls difference (real Cycle Sentry vs prototype On-Off) and the refrigerant difference (R134a in the model vs R452A in the real Advancer).</strong></p>

<h3>Scope of the testing</h3>
<ul>
<li><strong>Unit under test</strong> — Advancer A-500 single-temperature system, labelled MAB9 in the Thermo King Galway R&D yard, mounted on a Schmitz Cargobull 13 m three-axle trailer with an empty cargo box.</li>
<li><strong>Test conditions</strong> — −22°C setpoint, 10°C ambient at test start, ~6 hour duration, Cycle Sentry operating mode, diesel fuel, single zone covering the full trailer volume.</li>
<li><strong>Data acquisition</strong> — MultiDAC software via USB to the controller HMI, 5-second sample rate. Logged channels: return and delivered air temperature (PT1000 RTDs), engine flywheel rpm, setpoint and cooling capacity requests from the CAN bus, ambient temperature.</li>
<li><strong>Comparison basis</strong> — Real Advancer experimental data versus the WP1 Simulink VCC model and the WP2 HiL simulator run at equivalent setpoints. Comparison performed on modulation cycle period, peak cooling capacity, and engine On-Off behaviour.</li>
</ul>

<h3>How the discrepancies surfaced</h3>
<p>Two gaps appeared on the first model-vs-experiment overlay. The model's first modulation cycle ran at a peak-to-peak time of 250 seconds; the real Advancer's first modulation cycle ran at 1080 seconds — a 4.32× acceleration of the simulated dynamics. Separately, at comparable conditions the model applied 11.3 kW of cooling at −20°C while the real unit applied only 5 kW at −22°C — roughly 50% overshoot in cooling delivered.</p>

<p>The first discrepancy was traced back into the Simscape library itself. The trailer cargo box was modelled with the constant-volume moist-air chamber block, whose source code (line 578) sums total internal energy across all ports instantaneously — meaning the block assumes the cargo box reaches thermal equilibrium with the inlet air at every timestep, ignoring flow resistance and thermal inertia. That assumption is the root cause of the acceleration: the simulated trailer cools faster than a real trailer can, so the controller cycles faster.</p>

<p>The second discrepancy was attributed to two factors documented in the thesis discussion. First, the real Advancer's Cycle Sentry runs a multi-surface cost-function controller, not the On-Off hysteresis used in the prototype, so it modulates cooling capacity continuously rather than running flat-out between thresholds. Second, the model uses R134a as the working fluid while the production Advancer outside Saudi Arabia uses an R452A blend — a different enthalpy profile through the cycle. Both are real and named, and both bound the validity of the model in a way the discussion chapter spells out.</p>

<h3>Delivered</h3>
<ul>
<li>Ground-truth experimental dataset from one ~6 hour duty cycle on Unit MAB9 covering setpoint pull-down, modulation, and steady-state behaviour, logged via MultiDAC at 5-second resolution.</li>
<li>Programme-level behavioural validation of the WP1 model and WP2 HiL simulator — the system reproduces the qualitative engine On-Off behaviour and pull-down profile of the real Advancer.</li>
<li>Quantitative discrepancy report with both gaps root-caused: 4.32× dynamic acceleration attributed to the Simscape chamber's instantaneous-equilibrium assumption (line 578); ~50% cooling overshoot attributed to the controls and refrigerant differences between the model and the real unit.</li>
<li>Bounded validation outcome — the system is validated as a behaviourally equivalent test environment for embedded-controller development, not as a digital twin of the Advancer. Both bounds are documented for the follow-on engineer.</li>
</ul>

<h3>Honest framing</h3>
<p>Only one duty cycle test was performed. The R&D facility has limited availability and the test campaign was scoped accordingly — this WP is a validation pass, not a statistical characterisation, and the conclusions are written to that scope.</p>

<h3>Recognition</h3>
<p>WP3 of an M.E. thesis at University of Galway, industry-sponsored by Thermo King / Trane Technologies. Supervised by Mr. Padraig Conneely (University of Galway) with industry advisor Marcus O'Mahony (Thermo King). The thesis is the first reported demonstration of HiL simulation applied to transport refrigeration.</p>`,
  },
  {
    title: "ML-Accelerated Aeroelastic Modelling of Onshore Wind Turbines",
    description:
      "Literature review proposing ML to break computational barriers in wind turbine simulation:\n• 2.3–3.1× speed-up targets via CFD-ML coupling and neural turbulence closures\n• Graded 98% — highest in cohort\n• Adopted as reference document for master's research projects\n• Identified ML as unexploited lever for surrogate FEM integration",
    tags: ["CFD", "FEM", "Machine Learning", "Aeroelastics", "Research"],
    date: "MEng, University of Galway",
    slug: "wind-turbine-aeroelastic",
    section: "Engineering",
    headline: true,
    images: [
      "/preview-01.png",
      "/preview-02.png",
      "/preview-04.png",
      "/preview-05.png",
    ],
  },
  {
    title: "Physically-Based Yield Strength Modelling Tool for Low-Carbon Steels",
    description: "Process–structure–property model predicting steel yield strength from chemistry and heat treatment:\n• Four-stage model calibrated against five literature sources, validated against sixth\n• Six independent strengthening mechanisms (Taylor, Hall–Petch, Naylor, Orowan)\n• Derived activation energy Q = 104.85 kJ/mol for austenite grain growth\n• Independent validation against X-80 linepipe HAZ at 1000 K/s heating ramp",
    content: `<h2>Physically-Based Yield Strength Modelling Tool for Low-Carbon Steels</h2>
<p><strong>M.E. Mechanical Engineering research project, University of Galway — supervised by Dr. Richard Barrett</strong></p>

<p>Yield strength in steel isn't a material constant — it's the stress required to drive dislocations through the microstructure, which itself is set by chemical composition and heat treatment history. This project built a process–structure–property modelling tool in Octave that takes initial grain size, chemistry, and a heat treatment schedule, then predicts microstructural evolution (austenitisation, martensitic transformation) and the resulting yield strength from first principles.</p>

<p><strong>Result: four-stage mechanistic model calibrated against experimental data from five literature sources and validated against an independent sixth; linear summation and Kocks RMS strengthening models compared across equiaxed, hierarchical, and precipitate-containing microstructures.</strong></p>

<p>The intellectual move was treating yield strength as a sum of physical mechanisms rather than fitting a black-box correlation. Each strengthening contribution — Taylor hardening, Hall–Petch grain boundary, low-angle boundary via the Naylor model, Gypen–Deruyttere interstitial/substitutional solute, Ashby–Orowan precipitate, intrinsic lattice friction — was implemented independently and then combined, so the model stays physically interpretable when composition or processing changes. That's the property that lets it generalise beyond its calibration set.</p>

<h3>Scope of the work</h3>
<ul>
<li><strong>Strengthening physics</strong> — implemented six independent mechanisms and compared linear summation against Kocks RMS combination across four steels (pure Fe, Fe-0.2C, Fe-0.2C-2Mn, and Fe-0.2C-2Mn with precipitates).</li>
<li><strong>Austenite grain growth</strong> — derived activation energy Q = 104.85 kJ/mol and pre-exponential k₀ = 5.25 × 10⁻⁸ m²/s empirically from Kern et al. (2023) data via Arrhenius linearisation of ln(K(T)) vs 1/T.</li>
<li><strong>Martensite kinetics</strong> — fitted Mₛ = −490.78·C(wt%) + 927.26 from Morito et al. data, implemented Koistinen–Marburger-style volume fraction evolution over a cooling schedule, and benchmarked against two thermodynamically motivated models from Platl et al. (2020).</li>
<li><strong>Independent validation</strong> — tested the calibrated grain growth model against Banerjee et al. (non-isothermal X-80 linepipe HAZ data) at a 1000 K/s heating ramp; predictions tracked experimental points across 1200–1700 K without recalibration.</li>
<li><strong>Sensitivity analysis</strong> — identified that grain growth predictions are highly sensitive to k₀ and moderately sensitive to Q, flagging where additional experimental data would most improve the model.</li>
</ul>

<h3>How the model's limits surfaced</h3>
<p>The Fe-0.2C predictions overshot experimental yield strength by ~400 MPa at small grain sizes, while Fe-0.2C-2Mn converged with the RMS model above 3 µm. The discrepancy traced to four tractability assumptions: constant dislocation density, no residual austenite films between laths, no precipitate pinning of grain growth, and no martensite volume-fraction weighting in the strength calculation. The write-up names each assumption and proposes the specific extension that would close it — making the model honest about its operating envelope rather than papering over the gaps.</p>`,
    tags: ["Material Science", "Octave", "Computational Modelling", "Metallurgy", "Microstructure", "Steel"],
    date: "M.E., University of Galway",
    slug: "yield-strength-modelling",
    section: "Engineering",
    headline: true,
    images: ["/Screenshot 2026-05-22 022206.png", "/Screenshot 2026-05-22 022233.png", "/Screenshot 2026-05-22 022301.png"],
  },
  {
    title: "Physics based real time ML model - Patent Pending",
    description:
      "Real-time autoregressive LSTM for thermo-fluid simulation in HiL environment:\n• 40MB RAM footprint, stable across 150,000+ autoregressive iterations\n• 95% dynamics correlation, 90% magnitude — before large-scale fine-tuning\n• Passed Trane IP council first review in 4 months as graduate\n• Clean ONNX export path to embedded C++ deployment",
    section: "Trane Technologies",
    headline: true,
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
      "Self-hosted agentic coding platform for Fortune 500 R&D team:\n• Ollama + open-source VS Code agent + Open WebUI stack\n• Adopted by 2–5 engineers on departmental ML pipelines\n• Cursor-equivalent functionality with zero data egress\n• Triggered internal review into team-wide Claude adoption",
    section: "Trane Technologies",
    headline: false,
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
      "Led OTA telematics validation campaign as graduate, saving $2M+ in manual dealer campaigns:\n• 100% failure → 100% pass rate across 20+ tests in 2 months\n• Diagnosed server prioritization blocker via CAN bus log analysis\n• Sole communication point between Connected Solutions and R&D Lead\n• Shipped on time for flagship V1 release",
    section: "Trane Technologies",
    headline: true,
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
    description: "First electromagnet Halbach array for motor stators:\n• 30% peak torque increase vs standard pole array (1.9 Nm vs 0.5 Nm)\n• Validated via Ansys Maxwell CEM and 3D-printed prototype\n• Selected for Start100 accelerator with €4,000 funding\n• Offered funded PhD route and college-backed spinout path",
    headline: true,
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
    title: "IDA Eco AI Hackathon - 2nd Place",
    description: "Secured 2nd place at IDA Eco AI Hackathon.",
    content: "",
    tags: ["Hackathon", "AI", "Sustainability", "IDA"],
    date: "IDA Ireland",
    slug: "ida-eco-ai-hackathon",
    section: "Personal Projects",
    images: [],
  },
  {
    title: "Forge Robotics: Cloud Inference Pipeline for Robotics RL Models",
    description: "Built cloud inference pipeline for deploying reinforcement learning models on robotic systems.",
    content: "",
    tags: ["Robotics", "RL", "Cloud", "MLOps", "Inference Pipeline"],
    date: "Forge Robotics",
    slug: "forge-cloud-inference",
    section: "Personal Projects",
    images: [],
  },
  {
    title: "Forge Robotics: Vision Pipeline for Agentic Welding",
    description: "Developed vision pipeline for autonomous welding robotics system.",
    content: "",
    tags: ["Computer Vision", "Robotics", "Welding", "AI", "Agentic Systems"],
    date: "Forge Robotics",
    slug: "forge-vision-pipeline",
    section: "Personal Projects",
    images: [],
  },
  {
    title: "Invited to Y Combinator AI Startup School 2025",
    description: "Hand-picked for Y Combinator's inaugural AI Startup School:\n• 1 of 4 Irish attendees from 2,500 globally selected CS/ML students\n• Two-day conference at Pier 48, San Francisco (June 2025)\n• Talks from Altman, Musk, Nadella, Karpathy, Fei-Fei Li, Ng, Jumper\n• $25k AWS credits + direct VC introductions",
    headline: true,
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
  {
    title: "UoG Excellence Scholarship",
    description: "Master's scholarship awarded for obtaining a 1:1 grade in undergraduate degree. Maintained 1:1 grade (First Class Honours) for every semester of college. Achieved straight As in final year and master's year.",
    content: `<h2>UoG Excellence Scholarship</h2>
<ul>
<li>Master's scholarship awarded for obtaining a 1:1 grade in undergraduate degree</li>
<li>Maintained 1:1 grade (First Class Honours) for every semester of college</li>
<li>Achieved straight As in final year and master's year</li>
</ul>`,
    tags: ["Scholarship", "Academic Excellence", "First Class Honours"],
    date: "University of Galway",
    slug: "uog-excellence-scholarship",
    section: "Scholarships Awards honous & recognitionh",
    images: ["/nuig-logo.png"],
  },
  {
    title: "Fully Funded PhD Scholarship Offer",
    description: "Offered fully funded PhD scholarship for joint research project between Trane Technologies and University of Galway for developing a robotic application for induction brazing.",
    content: "",
    tags: ["PhD", "Research", "Robotics", "Induction Brazing"],
    date: "University of Galway & Trane Technologies",
    slug: "phd-scholarship-offer",
    section: "Scholarships Awards honous & recognitionh",
    images: [],
  },
  {
    title: "EF The Bridge",
    description: "Selected for the inaugural cohort of The Bridge — Entrepreneurs First's eight-week San Francisco residency for Europe's most ambitious early-stage founders, admitted pre-team and pre-idea on founder quality alone.\n• Up to $250k EF investment and $600k in partner credits (OpenAI, Anthropic, GitHub)\n• Direct path to follow-on rounds up to $3M and in-person Demo Day to US investors\n• Eight-week Bay Area residency with dedicated Hacker House",
    content: `<h2>Selected for The Bridge: Entrepreneurs First's Inaugural US Residency</h2>
<p><strong>Inaugural cohort, April 2026 — San Francisco Bay Area</strong></p>

<p>Entrepreneurs First is the world's leading talent investor — they back individuals before there is a team, an idea, or a company, and their portfolio has surpassed $13 billion in value. Selection is based on the founder, not the pitch, which is a materially higher bar than accelerators that admit existing startups.</p>

<p>In 2025, EF launched The Bridge — an eight-week San Francisco residency built as their highest-conviction bet on founding from scratch in the Bay Area. I was selected for the inaugural cohort, 40–50 founders drawn from across Europe and chosen pre-team and pre-idea.</p>

<p><strong>Result: Selected pre-team, pre-idea into the first cohort. Up to $250k initial EF investment, $600k in partner credits (OpenAI, Anthropic, GitHub), and a direct path to follow-on rounds up to $3M.</strong></p>

<h3>What happens next</h3>
<p>In April 2026, the cohort moves into a dedicated Hacker House in the Bay Area for eight weeks of ideation, team formation, and building from zero. Founders arrive as individuals and leave with a cofounder, a company, and EF backing.</p>

<ul>
<li><strong>EF investment up to $250k</strong> within 8–12 weeks of forming a company, with potential follow-on rounds up to $3M.</li>
<li><strong>$600k in partner credits</strong> from OpenAI, Anthropic, and GitHub.</li>
<li><strong>Silicon Valley advisory access</strong> — weekly sessions with experienced founders, operators, and US investors.</li>
<li><strong>In-person Demo Day</strong> pitching directly to US investors at the end of the residency.</li>
</ul>

<h3>Recognition</h3>
<p>Inaugural cohort selected directly by the EF team in London and San Francisco — the talent investor behind a portfolio now valued at over $13 billion — to identify the European founders most likely to build globally significant companies in the AI era.</p>`,
    tags: ["Entrepreneurship", "The Bridge", "EF", "Startups", "San Francisco", "AI"],
    date: "Entrepreneur First, April 2026",
    slug: "ef-the-bridge",
    section: "Scholarships Awards honous & recognitionh",
    headline: true,
    images: ["/join_thebridge_logo.jfif"],
  },
  {
    title: "Ireland 2050 Financial Modelling Award",
    description: "Awarded for financial modelling work on Ireland's 2050 energy transition.",
    content: "",
    tags: ["Energy", "Financial Modelling", "Sustainability", "Award"],
    date: "Irish Energy Institute",
    slug: "ireland-2050-award",
    section: "Scholarships Awards honous & recognitionh",
    images: [],
  },
  {
    title: "Bending Spoons Advanced Interview Offer",
    description: "Invited to advanced interview stage at Bending Spoons.",
    content: "",
    tags: ["Software Engineering", "Interview", "Tech"],
    date: "Bending Spoons",
    slug: "bending-spoons-interview",
    section: "Scholarships Awards honous & recognitionh",
    images: [],
  },
  {
    title: "NDRC AI Venture Forge Offer",
    description: "Offered place in NDRC AI Venture Forge program.",
    content: "",
    tags: ["AI", "Venture", "Entrepreneurship", "NDRC"],
    date: "NDRC",
    slug: "ndrc-ai-venture-forge",
    section: "Scholarships Awards honous & recognitionh",
    images: [],
  },
  {
    title: "Hult Prize Nationals Invite",
    description: "Invited to compete at Hult Prize National Finals.",
    content: "",
    tags: ["Entrepreneurship", "Competition", "Social Impact"],
    date: "Hult Prize",
    slug: "hult-prize-nationals",
    section: "Scholarships Awards honous & recognitionh",
    images: [],
  },
  {
    title: "Industry Funded Masters Thesis + Prototype Commissioning",
    description: "Masters thesis and prototype commissioning funded by industry partner.",
    content: "",
    tags: ["Research", "Industry Partnership", "Prototype", "Masters Thesis"],
    date: "University of Galway",
    slug: "industry-funded-thesis",
    section: "Scholarships Awards honous & recognitionh",
    images: [],
  },
  {
    title: "Co-founded Forge Robotics",
    description: "Co-founded Forge Robotics, an autonomous welding robotics startup. Left before YC S25 batch for family/health reasons. Company subsequently accepted to Y Combinator S25.",
    content: "",
    tags: ["Startup", "Robotics", "Co-founder", "Welding"],
    date: "Forge Robotics",
    slug: "forge-yc",
    section: "Scholarships Awards honous & recognitionh",
    images: [],
  },
  {
    title: "CFD Modelling of Air Flow Past a 2D Turbine Cascade",
    description: "Built a 2D CFD model of an SE1050 turbine cascade in Ansys Fluent — quantified the lift-vs-drag trade-off across five inlet/blade-angle scenarios, demonstrating that shallow-angle multi-stage cascades extract work more efficiently than aggressive single-stage designs.",
    content: `<h2>Project: CFD Modelling of Air Flow Past a 2D Turbine Cascade</h2>
<p><strong>ME426 Turbomachines & Advanced Fluid Dynamics, University of Galway — April 2025</strong></p>

<p>Built a 2D CFD model of a steam turbine blade cascade in Ansys Fluent to quantify how inlet velocity and blade attack angle trade off against each other in the extraction of mechanical work from a flow stream. Five scenarios spanning 10–70 m/s inlet velocities and ±10° blade angle deviations were simulated to isolate the effect of each parameter on lift, drag, and total pressure loss across the cascade.</p>

<p><strong>Result: lift/drag ratio swung from 1.11 at +10° attack to 3.50 at -10°. Higher attack extracted ~951 N lift per blade but lost it to 859 N drag; lower attack extracted 671 N lift against only 192 N drag — quantifying the staging-vs-single-stage efficiency trade-off in turbine design.</strong></p>

<h3>Scope of the work</h3>
<ul>
<li><strong>Geometry & meshing</strong> — SE1050 aerofoil profile, five-blade cascade with 100 mm chord and 55.12 mm pitch, modelled in a 700 × 500 mm domain. Mesh inflation applied at wall boundaries to resolve the viscous sublayer required by the turbulence model.</li>
<li><strong>Turbulence modelling</strong> — k-ω SST governing equations (Menter, 1994) selected for stable resolution of the wall-bounded turbulent flow across the blade row.</li>
<li><strong>Boundary conditions</strong> — velocity inlet, outlet-vent with no-back-flow, no-slip walls on the cascade boundaries and aerofoil surfaces.</li>
<li><strong>Parametric sweep</strong> — three inlet velocity cases (70 / 40 / 10 m/s) and two blade angle deviations (322.89° baseline, ±10°), with drag, lift, total pressure, and flow angle extracted from the second aerofoil and the trailing-edge monitoring line.</li>
<li><strong>Post-processing</strong> — static and total pressure contour maps, velocity vector fields, streamline plots, and a 100-point trailing-edge line probe to compute outlet flow angle and total pressure profiles.</li>
</ul>

<h3>How the trade-off surfaced</h3>
<p>Increasing attack angle widened the flow separation angle and raised the pressure differential across the blade — which produces more lift, and by Euler's turbomachine equation, more shaft work per stage. But the same mechanism that compresses the fluid below the blade also pulls harder against the flow direction, and the drag scales faster than the lift. Reading the static pressure maps alongside the lift/drag table makes the result legible: a +10° aggressive blade extracts the most work per stage but bleeds the most energy to drag, while a -10° shallow blade has a much higher lift/drag ratio. The engineering conclusion — that multiple shallow-angle stages can outperform a single steep stage on net efficiency — falls out of the data rather than being asserted.</p>`,
    tags: ["CFD", "Ansys Fluent", "Turbomachines", "Fluid Dynamics", "Engineering"],
    date: "University of Galway, April 2025",
    slug: "cfd-turbine-cascade",
    section: "Engineering",
    images: ["/image-000.png", "/image-001.png", "/image-002.png", "/image-003.png"],
  },
  {
    title: "CFD Solver Studies — Biomedical, Mixing, and Electronics Cooling",
    description: "Three Ansys Fluent studies covering distinct physical regimes — arterial plaque flow, turbulent mixing validation, and electronics cooling with radiation. Each lab swapped governing equations, mesh strategy, and validation approach.",
    content: `<h2>Academic Project: CFD Solver Studies — Biomedical, Mixing, and Electronics Cooling</h2>
<p><strong>Final-year coursework, BE Mechanical Engineering, University of Galway — Autumn 2023</strong></p>

<p>Three Ansys Fluent studies covering distinct physical regimes — turbulent flow with wall-bounded geometry, multi-stream thermal mixing with theoretical validation, and conjugate heat transfer with radiation. Each lab swapped the governing equations, mesh strategy, and validation approach to fit the problem.</p>

<h3>Lab 1 — Plaque-induced disturbance in arterial blood flow</h3>
<p>Parametric sweep of seven plaque radii (1.0–3.0 mm) in a 4 mm vessel, K-ε / K-ω turbulence models, blood approximated as water. Cross-referenced wall shear stress contours and downstream vortex formation against Gijsen et al. (2019, European Heart Journal) — peak shear 124 Pa at 1.5 mm rising to 239 Pa at 2.5 mm, with vortex growth tracking the platelet-aggregation mechanism described in the paper.</p>

<h3>Lab 2 — Turbulent fluid mixing in a tee junction</h3>
<p>Two water inlets at 280 K and 350 K, inlet 2 velocity swept 0–24 m/s, K-ε with energy equation. Derived an enthalpy-balance theoretical model (ṁ₁h₁ + ṁ₂h₂ = ṁ₃h₃) as an independent validation reference — CFD outlet temperature matched theory within 0.5% average error across all eight cases. Documented convergence behaviour at low inlet 2 velocity as a K-ε limitation in low-turbulence regimes (311 iterations at 1 m/s vs. 69 at 7 m/s).</p>

<h3>Lab 3 — Electronics cooling with natural convection and radiation</h3>
<p>75 W chip on FR-4 PCB with copper finned heat sink in a closed chamber, modelled with and without surface-to-surface ray-traced radiation. Including radiation dropped average component temperature by 14°C and redistributed thermal load onto the chamber walls — a 27°C peak difference visible in the PCB contour comparison. Demonstrated radiation is not negligible in mixed-mode heat transfer problems.</p>

<h3>Shared methodology</h3>
<ul>
<li><strong>Mesh refinement</strong> — inflation layers at walls across all three labs to align cell faces with near-wall flow; element sizes selected by trading convergence time against accuracy.</li>
<li><strong>Independent validation</strong> — each lab paired the CFD result against an external reference (published literature, derived thermodynamic theory, or a paired comparison case) rather than treating the solver output as ground truth.</li>
<li><strong>Residual diagnostics</strong> — convergence behaviour treated as a model-quality signal, not just a stopping criterion (flagged K-ε instability at low Reynolds, S2S sawtooth from raytrace recalculation).</li>
</ul>`,
    tags: ["CFD", "Ansys Fluent", "Turbulence Modelling", "Heat Transfer", "Biomedical", "Thermal Analysis"],
    date: "University of Galway, Autumn 2023",
    slug: "cfd-solver-studies",
    section: "Engineering",
    images: ["/CaseComparisonplusdiff.png", "/Screenshot 2026-05-22 020256.png"],
  },
  {
    title: "Computational Solver for Elastoplastic Hardening",
    description: "Built a computational solver in Excel implementing the Chaboche nonlinear hardening algorithm with integrated parameter fitting, cross-validated against an Abaqus axisymmetric FEA model — fit SSE 406.62, ±17% agreement on small-deformation loads.",
    content: `<h2>Computational Solver for Elastoplastic Hardening, Validated Against FEA</h2>
<p><strong>Chaboche nonlinear isotropic hardening algorithm — Excel implementation, Abaqus cross-validation</strong></p>

<p>Built a computational solver in Excel implementing the Chaboche nonlinear isotropic hardening algorithm, with an integrated parameter-fitting routine driven by Excel Solver. Cross-validated against an axisymmetric Abaqus FEA model using the same identified parameters to bound the solver's region of validity.</p>

<p><strong>Result: solver fit to 316 stainless steel test data with SSE = 406.62. Solver and FEA agreed within ±17% on small-deformation loads; nonlinear-geometry case diverged to 68% on failure load, marking the solver's edge of validity at large strain.</strong></p>

<h3>Scope of the work</h3>
<ul>
<li><strong>Solver algorithm</strong> — implemented the iterative Chaboche stress update dσ = E(1 − E/(E + b(Q − r(p)))) dε with strain-controlled increments of 0.001, hardening state r(p) updated each step against saturation stress Q.</li>
<li><strong>Parameter-fitting routine</strong> — paired the solver with a least-squares objective driven by Excel Solver, identifying b = 4.43, Q = 500 MPa, σy = 229.6 MPa, E = 69.2 GPa from engineering stress-strain test data.</li>
<li><strong>FEA cross-validation</strong> — axisymmetric Abaqus model (CAX8R reduced-integration elements, mesh size 2), leader-follower equation constraint on the top edge to enforce uniform U2 displacement, run in tension and compression with NLGEOM on/off.</li>
<li><strong>Failure analysis</strong> — identified tensile failure at 271 kN (NLGEOM on) where load drops indicate cross-sectional collapse; linear-geometry case continues to 440 kN because FEA doesn't model rupture.</li>
</ul>

<h3>What the comparison surfaced</h3>
<p>Tension and compression matched under linear geometry. Switching NLGEOM on broke the symmetry: compression rises exponentially as incompressible plastic flow forces constant volume; tension peaks then drops as the section necks. The Excel solver — which doesn't track geometry — tracks the linear FEA case closely but mispredicts failure under large deformation, defining a clean boundary for where the algorithm is trustworthy.</p>`,
    tags: ["Excel", "FEA", "Abaqus", "Material Science", "Computational Mechanics"],
    date: "University of Galway",
    slug: "elastoplastic-hardening-solver",
    section: "Engineering",
    images: ["/image-004.png", "/image-005.png", "/image-006.png"],
  },
  {
    title: "B.E Capstone Machine Design Project",
    description: "Led 4-person team designing fully automated 1000 kg EV battery swap system:\n• Owned scissor lift sub-assembly: kinematics, FEA, hydraulics, full CAD\n• 300+ part assembly for University of Galway capstone (2023)\n• Designed automated lifting and battery exchange mechanism\n• Complete hydraulic system design and structural validation",
    content: "",
    tags: ["Mechanical Design", "CAD", "FEA", "Hydraulics", "Team Lead", "Project Management"],
    date: "University of Galway, April 2023",
    slug: "ev-battery-swap-mechanism",
    section: "Engineering",
    headline: true,
    images: ["/image-013.png", "/image-014.png", "/image-015.png", "/image-016.png", "/image-017.png", "/image-018.png"],
  },
  // {
  //   title: "Boxing in Pink",
  //   description: "Owned marketing for a student charity boxing tournament while competing on the card — 400 tickets sold, €13,000 raised for breast cancer research, Monster Energy secured as headline sponsor.",
  //   content: `<h2>Head of Marketing, University Boxing Club</h2>
  // <p><strong>Student-run charity tournament for breast cancer research</strong></p>

  // <p>Owned the marketing function for a student boxing tournament raising money for breast cancer research, while also competing as one of the boxers on the card. The brief was to fill the venue and maximise the donation — both depended on ticket sales and sponsorship moving in parallel.</p>

  // <p><strong>Result: 400 tickets sold, €13,000 raised for charity, Monster Energy secured as headline sponsor.</strong></p>

  // <h3>Scope of the work</h3>
  // <ul>
  // <li><strong>Sponsorship</strong> — Monster Energy. Pitched and closed a Monster Energy sponsorship as the headline commercial partner, covering production costs and freeing ticket revenue for the charity total.</li>
  // <li><strong>Social media campaign</strong> — Produced short-form video content for the run-up to the event; several pieces went viral within the student audience and drove the bulk of late ticket sales.</li>
  // <li><strong>Print and venue collateral</strong> — Designed the poster set used across campus and venue branding on the night.</li>
  // <li><strong>Ticket sales</strong> — 400 tickets shifted through the campaign — the funnel that converted the €13,000 charity total.</li>
  // </ul>

  // <h3>Competing on the night</h3>
  // <p>Also fought on the card the same evening. Splitting attention between running the marketing for the event and preparing to compete in it forced sharp prioritisation in the final week — sponsorship and ticket commitments were locked early so the last days could be spent training without the campaign slipping.</p>`,
  //   tags: ["Marketing", "Event Management", "Charity", "Sponsorship", "Boxing"],
  //   date: "University of Galway",
  //   slug: "boxing-in-pink",
  //   section: "Sports & Extra",
  //   images: ["/image-025.png", "/image-026.png"],
  // },
  {
    title: "Student Success Panel Speaker",
    description: "Invited as one of 20 students to speak to the incoming class of 1000 STEM students, on study and student success tips.",
    content: "",
    tags: ["Public Speaking", "Mentorship", "University", "STEM"],
    date: "University of Galway",
    slug: "student-success-panel",
    section: "Scholarships Awards honous & recognitionh",
    images: ["/Screenshot_2026-05-18_072906.webp"],
  },
];

