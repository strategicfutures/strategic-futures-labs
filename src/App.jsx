import logo from "./assets/sfl-logo.png"
export default function App() {
const briefingUrl = "https://gamma.app/docs/Executive-Summary-The-Strategic-Initiative-Decision-System-dj848df0p951g4d"
  return (
    <div
      id="top"
      className="min-h-screen bg-[#05070B] text-white overflow-x-hidden"
    >
      
      {/* NAVBAR */}
      <nav className="backdrop-blur-md bg-[#05070B]/95 flex items-center justify-between px-6 md:px-8 py-4 border-b border-white/10">
        <img
          src={logo}
          alt="Strategic Futures Labs"
          className="h-12 md:h-16 w-auto"
        />

        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#SID system">SID System</a>
          <a href="#workflow">How It Works</a>
          <a href="#customers">Customers</a>
          <a href="#about">Why Us</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center">
        
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-10 mt-6">
            Elevate Your Transformation Strategy With
          </p>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-tight mb-8">
            <p className="text-5xl lg:text-7xl font-semibold leading-tight mb-8"> 
              Built-In Decision Intelligence.
            </p>
            <p className="text-5xl lg:text-7xl font-semibold leading-tight mb-8"> 
              Better Strategic Outcomes.
            </p>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            Strategic Futures Labs builds intelligent decision systems that help organizations form, evaluate, and govern strategic initiatives{" "}
            <span className="font-semibold text-white">before</span>{" "}
            commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#briefing"
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-cyan-300 transition inline-block"
            >
              Request Executive Summary
            </a>
            <a
              href="#contact"
              className="border border-white/20 px-6 py-3 rounded-xl hover:border-cyan-400 transition">
            
              Request Demo
            </a>
          </div>
        </div>

{/* DECISION QUALITY SECTION */}
<div className="bg-[#081120] border border-white/20 rounded-3xl p-10 mt-20">

  <div className="text-center mb-12">

    <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
      Why an Intelligent Structure Matters
    </p>

    <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
      Weak initiatives create costly downstream consequences.
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-[#0E1726] border border-amber-500/20 rounded-3xl p-8">

              <p className="text-5xl font-semibold text-cyan-400 mb-4">
                70%
              </p>

              <p className="text-lg text-white leading-relaxed">
                of strategic initiatives fail to achieve intended outcomes or expected value.
              </p>

              <p className="text-sm text-gray-500 mt-4">
                Source: McKinsey & Company
              </p>

            </div>

            {/* CARD 2 */}
            <div className="bg-[#0E1726] border border-amber-500/20 rounded-3xl p-8">

              <p className="text-5xl font-semibold text-cyan-400 mb-4">
                $2T
              </p>

              <p className="text-lg text-white leading-relaxed">
                estimated annual cost of failed transformation efforts globally.
              </p>

              <p className="text-sm text-gray-500 mt-4">
                Source: Forbes / McKinsey synthesis
              </p>

            </div>

            {/* CARD 3 */}
            <div className="bg-[#0E1726] border border-amber-500/20 rounded-3xl p-8">

              <p className="text-5xl font-semibold text-cyan-400 mb-4">
                43%
              </p>

              <p className="text-lg text-white leading-relaxed">
                of transformation leaders identified weak problem definition as the most common point of initiative breakdown.
              </p>

              <p className="text-sm text-gray-500 mt-4">
                Source: Strategic Futures Initiative Poll
              </p>

            </div>

          </div>

        </div>

      </section>
{/* PROBLEM SECTION */}
<section id="problem" className="border-t border-white/10 bg-[#081120]">
  <div className="max-w-7xl mx-auto px-8 py-24">
    
    <div className="max-w-3xl mb-16">
      <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
        The Strategic Gap
      </p>

      <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
        Strategic initiatives often fail before execution begins.
      </h2>

      <p className="text-lg text-gray-400 leading-relaxed">
        Most organizations have good systems in place to execute initiatives.
        Far fewer have structured systems for determining which initiatives to execute—before time, capital, workforce capacity, and executive attention are committed.     
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed mt-4">
        Once weak initiatives gain momentum, they become increasingly difficult to stop.     
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      
      <div className="bg-[#081120] border border-white/20 rounded-2xl p-6">
        <h3 className="text-xl font-medium mb-3">Weak Problem or Opportunity Validation</h3>
        <p className="text-gray-400 leading-relaxed">
          Initiatives move forward without clearly defined problems or opportunities,
          evidence that the problem or opportunity is real, urgent, and strategically meaningful.
        </p>
      </div>

      <div className="bg-[#081120] border border-white/20 rounded-2xl p-6">
        <h3 className="text-xl font-medium mb-3">Pressure To Move Fast</h3>
        <p className="text-gray-400 leading-relaxed">
          Organizations often prioritize speed over decision quality, advancing ideas
          before assumptions, risks, and readiness are tested.
        </p>
      </div>

      <div className="bg-[#081120] border border-white/20 rounded-2xl p-6">
        <h3 className="text-xl font-medium mb-3">Governance Too Late</h3>
        <p className="text-gray-400 leading-relaxed">
          Governance is frequently applied after execution begins, when changing course
          becomes more expensive and politically difficult.
        </p>
      </div>

    </div>
  </div>
</section>
{/* SID System SECTION */}
<section id="SID system" className="border-t border-white/10 bg-[#081120]">
  <div className="max-w-7xl mx-auto px-8 py-24">

    <div className="max-w-3xl mb-16">
      <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
        Introducing The SID System
      </p>

      <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
        Intelligent evaluation at the point of greatest impact.
      </h2>

      <p className="text-lg text-gray-400 leading-relaxed">
        The Strategic Initiative Decision (SID) System brings consistency, evidence, and analytical rigor to the evaluation of strategic initiatives before
        organizations commit substantial time, capital, workforce capacity,
        and operational focus.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      <div className="bg-[#081120] border border-white/20 rounded-3xl p-8">
        <p className="text-cyan-400 text-sm uppercase tracking-[0.2em] mb-4">
          What The SID System Does
        </p>

        <ul className="space-y-4 text-gray-300 leading-relaxed">
          <li>
            • Transforms loosely defined ideas into structured,
            decision-ready initiatives
          </li>

          <li>
            • Applies evidence-based evaluation before execution
          </li>

          <li>
            • Integrates AI-assisted analysis with human governance
          </li>

          <li>
            • Supports disciplined initiative advancement through
            structured decision gates
          </li>

          <li>
            • Improves strategic clarity, readiness, and decision confidence
          </li>
        </ul>
      </div>

      <div className="bg-[#081120] border border-white/20 rounded-3xl p-8">
        <p className="text-cyan-400 text-sm uppercase tracking-[0.2em] mb-4">
          What The SID System Is Not
        </p>

        <ul className="space-y-4 text-gray-300 leading-relaxed">
          <li>
            • Not a project management platform
          </li>

          <li>
            • Not an idea submission portal
          </li>

          <li>
            • Not a task management system
          </li>

          <li>
            • Not focused on low-consequence operational activities
          </li>

          <li>
            • Not designed to replace human decision-making
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
{/* HOW The SID System WORKS */}
<section id="workflow" className="border-t border-white/10 bg-[#081120]">
  <div className="max-w-7xl mx-auto px-8 py-24">

    <div className="max-w-3xl mb-20">
      <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
        How It Works
      </p>

      <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
        Structured formation and evaluation before execution.
      </h2>

      <p className="text-lg text-gray-400 leading-relaxed">
        The SID System applies AI-assisted analysis, structured governance,
        and decision gate checkpoints to help organizations form, evaluate,
        and govern strategic initiatives.
      </p>
      <p className="text-lg text-gray-400 leading-relaxed mt-4">
        Weak initiatives are{" "}
        <span className="text-400 font-semibold">
          stopped
        </span>.
        {" "}Strong initiatives{" "}
        <span className="text-400 font-semibold">
          advance
        </span>.
      </p>

    </div>
{/* WORKFLOW */}
<div className="bg-[#05070B] border border-white/10 rounded-3xl p-10">

  <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_.45fr_1.4fr_.45fr_1.4fr_.45fr_1.4fr] gap-4 items-center">

    {/* DISCOVER */}
    <div className="bg-[#0E1726] border border-white/10 rounded-2xl p-6 h-full">
      <p className="text-cyan-400 text-sm mb-3">DISCOVER</p>

      <h3 className="text-xl font-medium mb-4">
        Define The Initiative
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm">
        Transform loosely defined ideas into structured
        problem or opportunity statements.
      </p>
    </div>

    {/* GATE */}
    <div className="flex flex-col items-center justify-center text-center">
      <div className="hidden lg:block h-px w-full bg-white/20 mb-4"></div>

      <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
        Stage Gate
      </p>

      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
      </div>

      <div className="h-px w-full bg-white/20 mt-4"></div>
    </div>

    {/* EXPLORE */}
    <div className="bg-[#0E1726] border border-white/10 rounded-2xl p-6 h-full">
      <p className="text-cyan-400 text-sm mb-3">EXPLORE</p>

      <h3 className="text-xl font-medium mb-4">
        Evaluate Strategic Viability
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm">
        Apply structured evaluation and readiness analysis.
      </p>
    </div>

    {/* GATE */}
    <div className="flex flex-col items-center justify-center text-center">
      <div className="hidden lg:block h-px w-full bg-white/20 mb-4"></div>

      <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
        Stage Gate
      </p>

      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
      </div>

      <div className="h-px w-full bg-white/20 mt-4"></div>
    </div>

    {/* DEVELOP */}
    <div className="bg-[#0E1726] border border-white/10 rounded-2xl p-6 h-full">
      <p className="text-cyan-400 text-sm mb-3">DEVELOP</p>

      <h3 className="text-xl font-medium mb-4">
        Build Execution Pathways
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm">
        Establish implementation approaches and governance controls.
      </p>
    </div>

    {/* GATE */}
    <div className="flex flex-col items-center justify-center text-center">
      <div className="hidden lg:block h-px w-full bg-white/20 mb-4"></div>

      <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
        Stage Gate
      </p>

      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
      </div>

      <div className="h-px w-full bg-white/20 mt-4"></div>
    </div>

    {/* EXECUTE */}
    <div className="bg-[#0E1726] border border-white/10 rounded-2xl p-6 h-full">
      <p className="text-cyan-400 text-sm mb-3">EXECUTE</p>

      <h3 className="text-xl font-medium mb-4">
        Govern Delivery & Outcomes
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm">
        Support disciplined execution and measurable outcomes.
      </p>
    </div>

  </div>

      {/* STAGE GATE DECISION LAYER */}
      <div className="mt-16">

        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-white/20 w-full"></div>

          <p className="px-6 text-sm uppercase tracking-[0.2em] text-cyan-400 whitespace-nowrap">
            Stage Gate Decision
          </p>

          <div className="h-px bg-white/20 w-full"></div>
        </div>

        <div className="bg-[#081120] border border-white/10 rounded-3xl p-8">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#0E1726] border border-green-500/20 rounded-2xl p-6">
              <p className="text-green-400 text-sm mb-3">
                ADVANCE
              </p>

              <h3 className="text-xl font-medium mb-4">
                Proceed With Confidence
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                Evidence, alignment, readiness, and strategic
                value support advancement to the next stage.
              </p>
            </div>

            <div className="bg-[#0E1726] border border-yellow-500/20 rounded-2xl p-6">
              <p className="text-yellow-400 text-sm mb-3">
                REFINE
              </p>

              <h3 className="text-xl font-medium mb-4">
                Improve Before Advancing
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                Additional clarification, evidence, or alignment
                is required before further investment occurs.
              </p>
            </div>

            <div className="bg-[#0E1726] border border-red-500/20 rounded-2xl p-6">
              <p className="text-red-400 text-sm mb-3">
                FAIL FAST
              </p>

              <h3 className="text-xl font-medium mb-4">
                Avoid Costly Misalignment
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                Structured evaluation identifies initiatives that
                should not advance before significant resources
                are committed.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
</div>

</section>
{/* CASE STUDY SECTION */}
<section className="border-t border-white/10 bg-[#05070B]">
  <div className="max-w-7xl mx-auto px-8 py-24">

    <div className="text-center mb-16">
      <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
        Strategic Risk Case Studies
      </p>

      <h2 className="text-3xl lg:text-4xl font-semibold leading-tight max-w-4xl mx-auto">
        A system designed to help prevent high-stakes failures.
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      {/* CARD 1 */}
      <div className="bg-[#081120] border border-white/10 rounded-3xl p-10">

        <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-6">
          Case Study: Hertz Transformation
        </p>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              What Happened
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Large-scale modernization efforts advanced amid operational,
              governance, and implementation readiness challenges.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              What It Exposed
            </h3>

            <ul className="text-gray-400 space-y-2">
              <li>• Organizational readiness gaps</li>
              <li>• Operational continuity risk</li>
              <li>• Execution sequencing concerns</li>
              <li>• Governance and escalation limitations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              What the SID System Is Designed to Evaluate
            </h3>

            <ul className="text-gray-400 space-y-2">
              <li>• Transformation readiness</li>
              <li>• Strategic alignment</li>
              <li>• Operational risk exposure</li>
              <li>• Stakeholder impact</li>
              <li>• Decision confidence</li>
            </ul>
          </div>

        </div>

      </div>

      {/* CARD 2 */}
      <div className="bg-[#081120] border border-white/10 rounded-3xl p-10">

        <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-6">
          Case Study: CNN+ Launch
        </p>

        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              What Happened
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Significant investment proceeded despite broader uncertainty
              around demand validation and long-term strategic viability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              What It Exposed
            </h3>

            <ul className="text-gray-400 space-y-2">
              <li>• Weak demand validation</li>
              <li>• Strategic alignment concerns</li>
              <li>• Market timing risk</li>
              <li>• Investment readiness gaps</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              What the SID System Is Designed to Evaluate
            </h3>

            <ul className="text-gray-400 space-y-2">
              <li>• Demand environment validation</li>
              <li>• Strategic differentiation</li>
              <li>• Stakeholder alignment</li>
              <li>• Investment viability</li>
              <li>• Expected value realization</li>
            </ul>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* WHO IT'S BUILT FOR */}
<section id="customers" className="border-t border-white/10 bg-[#081120]">
  <div className="max-w-7xl mx-auto px-8 py-24">

    <div className="max-w-3xl mb-16">
      <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
        Built For Complex Decision Environments
      </p>

      <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
        Designed for organizations navigating strategic complexity.
      </h2>

      <p className="text-lg text-gray-400 leading-relaxed">
        Strategic Futures Labs supports organizations operating in
        environments where strategic decisions carry meaningful
        operational, financial, workforce, and mission impact.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-[#081120] border border-white/20 rounded-2xl p-6">
        <h3 className="text-xl font-medium mb-4">
          Government Agencies
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Support modernization, strategic investment evaluation,
          innovation governance, and mission-focused transformation.
        </p>
      </div>

      <div className="bg-[#081120] border border-white/20 rounded-2xl p-6">
        <h3 className="text-xl font-medium mb-4">
          Enterprise Transformation
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Improve initiative selection, governance discipline,
          and transformation decision quality.
        </p>
      </div>

      <div className="bg-[#081120] border border-white/20 rounded-2xl p-6">
        <h3 className="text-xl font-medium mb-4">
          PMO & Governance Offices
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Apply structured evaluation and stage-gated oversight
          before execution begins.
        </p>
      </div>

      <div className="bg-[#081120] border border-white/20 rounded-2xl p-6">
        <h3 className="text-xl font-medium mb-4">
          AI Governance Environments
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Integrate AI-assisted analysis with human judgment,
          accountability, and explainable governance.
        </p>
      </div>

    </div>

  </div>
</section>
{/* WHY STRATEGIC FUTURES LABS */}
<section id="about" className="border-t border-white/10 bg-[#081120]">
  <div className="max-w-7xl mx-auto px-8 py-24">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div>

        <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
          Why Strategic Futures Labs
        </p>

        <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-8">
          Building systems for a more complex future.
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed mb-6">
          Organizations today operate in environments shaped by accelerating
          technological change, increasing complexity, evolving risk landscapes,
          and growing pressure to move faster.
        </p>

        <p className="text-lg text-gray-400 leading-relaxed">
          Strategic Futures Labs was created to help organizations improve
          decision quality, strengthen governance, and integrate intelligent
          technologies in ways that enhance human judgment rather than replace it.
        </p>

      </div>

      {/* MIDDLE */}
      <div className="bg-[#05070B] border border-white/10 rounded-3xl p-10">

        <div className="space-y-8">

          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-[0.2em] mb-3">
              Decision Intelligence
            </p>

            <p className="text-gray-400 leading-relaxed">
              Improve strategic clarity and initiative evaluation before
              major resources are committed.
            </p>
          </div>

          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-[0.2em] mb-3">
              Governance By Design
            </p>

            <p className="text-gray-400 leading-relaxed">
              Embed structured oversight, accountability, and evidence-based
              decision-making into transformation environments.
            </p>
          </div>

          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-[0.2em] mb-3">
              Human + AI Integration
            </p>

            <p className="text-gray-400 leading-relaxed">
              Combine AI-assisted analysis with human expertise to support
              more informed, explainable, and trusted decisions.
            </p>
          </div>
                <div>
            <p className="text-cyan-400 text-sm uppercase tracking-[0.2em] mb-3">
              Practitioner-Built
            </p>

            <p className="text-gray-400 leading-relaxed">
              Strategic Futures Labs is grounded in practitioner-level
              experience.
            </p>

            <p className="text-gray-400 leading-relaxed mt-4">
              Founder Ken Anderson has more than 20 years of experience leading enterprise transformation, governance, operational modernization, and high-consequence initiatives supporting national-scale missions. Throughout his career, Ken observed organizations repeatedly commit significant resources to initiatives that lacked the strategic readiness to succeed.

              He made it his mission to build a system that mitigates risk through structured decision discipline applied to initiative formation, evaluation, and execution.

              The result is the SID System.{" "}
            
              <a
                href="https://www.linkedin.com/in/kennydanderson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-cyan-400 hover:text-cyan-300 transition"
              >
                LinkedIn Profile ↗
              </a>
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* MISSION / VISION / CTA */}
<section className="bg-[#05070B] border-t border-white/10">
  <div className="max-w-7xl mx-auto px-8 py-24">

    <div className="grid lg:grid-cols-2 gap-10 mb-20">

      {/* MISSION */}
      <div className="bg-[#081120] border border-white/10 rounded-3xl p-10">
        <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
          Mission
        </p>

        <p className="text-2xl leading-relaxed text-gray-200">
          To build intelligent systems, governance capabilities,
          and transformation solutions that help organizations
          make better decisions, adapt to change with confidence,
          and integrate human expertise with emerging technologies
          to achieve meaningful outcomes.
        </p>
      </div>

      {/* VISION */}
      <div className="bg-[#081120] border border-white/10 rounded-3xl p-10">
        <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
          Vision
        </p>

        <p className="text-2xl leading-relaxed text-gray-200">
          To create a future where organizations operate with
          clarity, adaptability, and trust by seamlessly integrating
          human judgment and intelligent technologies into the way
          decisions are made, initiatives are governed, and
          transformation is achieved.
        </p>
      </div>

    </div>

    {/* FINAL CTA */}
    <section id="contact" className="border-t border-white/10 bg-[#081120]"></section>
    <div className="text-center max-w-4xl mx-auto">

      <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-6">
        Strategic Futures Labs
      </p>

      <h2 className="text-5xl lg:text-6xl font-semibold leading-tight mb-8">
        Build decision advantage before execution begins.
      </h2>

      <p className="text-xl text-gray-400 leading-relaxed mb-12">
        Improve strategic clarity, governance discipline,
        and initiative decision quality in increasingly
        complex transformation environments.
      </p>

      <div className="max-w-2xl mx-auto bg-[#081120] border border-white/10 rounded-3xl p-10">

        <form
          action="https://formspree.io/f/xlgzwbrb"
          method="POST"
          className="space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                className="w-full bg-[#05070B] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                className="w-full bg-[#05070B] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Organization
              </label>

              <input
                type="text"
                name="organization"
                className="w-full bg-[#05070B] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Role / Title
              </label>

              <input
                type="text"
                name="role"
                className="w-full bg-[#05070B] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Area of Interest
            </label>

            <select
              name="interest"
              className="w-full bg-[#05070B] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
            >
              <option>Demonstration</option>
              <option>Executive Briefing</option>
              <option>Pilot Opportunity</option>
              <option>Strategic Partnership</option>
              <option>Government Engagement</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Message
            </label>

            <textarea
              name="message"
              rows="5"
              className="w-full bg-[#05070B] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-medium hover:bg-cyan-300 transition"
          >
            Submit Inquiry
          </button>

        </form>

      </div>

    </div>

  </div>
</section>
{/* EXECUTIVE BRIEFING FORM */}
<section id="briefing" className="bg-[#081120] border-t border-white/10">
  <div className="max-w-7xl mx-auto px-8 py-24">

    <div className="text-center max-w-3xl mx-auto mb-12">
      <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
        Executive Summary
      </p>

      <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
        Request the SID system executive summary.
      </h2>

      <p className="text-lg text-gray-400 leading-relaxed">
        Submit your information to receive access to the Strategic Initiatives
        Decision System executive summary.
      </p>
    </div>

    <div className="max-w-2xl mx-auto bg-[#05070B] border border-white/10 rounded-3xl p-10">
      <form
        action="https://formspree.io/f/xbdwaode"
        method="POST"
        className="space-y-6"
      >
        <input type="hidden" name="_redirect" value={briefingUrl} />

        <div className="grid md:grid-cols-2 gap-6">
          <input name="name" required placeholder="Name" className="w-full bg-[#081120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400" />
          <input type="email" name="email" required placeholder="Email" className="w-full bg-[#081120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input name="organization" placeholder="Organization" className="w-full bg-[#081120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400" />
          <input name="role" placeholder="Role / Title" className="w-full bg-[#081120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400" />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-400 text-black px-8 py-4 rounded-xl font-medium hover:bg-cyan-300 transition"
        >
          Request Access
        </button>
      </form>
    </div>

  </div>
</section>
{/* RETURN TO TOP */}
<a
  href="#top"
  className="fixed bottom-6 right-6 z-50 bg-cyan-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl font-semibold shadow-lg hover:bg-cyan-300 transition"
  aria-label="Return to top"
>
  ↑
</a>
{/* FOOTER */}
<footer className="border-t border-white/10 bg-[#05070B]">
  <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-start gap-10">

    {/* LEFT */}
    <div className="max-w-md">

      <h3 className="text-lg font-semibold">
        Strategic Futures Labs
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Decision Intelligence • Governance • Future-Ready Transformation
      </p>

      <p className="text-sm text-gray-500 mt-4 leading-relaxed">
        Built from thought leadership and strategic insights through the{" "}

        <a
          href="https://strategicfutureshub.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-cyan-400 transition"
        >
          Strategic Futures Initiative
        </a>.
      </p>

    </div>

    {/* RIGHT */}
    <div className="flex flex-col gap-3 text-sm text-gray-400 md:text-right">

      <a
        href="#SID system"
        className="hover:text-cyan-400 transition"
      >
        SID System
      </a>

      <a
        href="#about"
        className="hover:text-cyan-400 transition"
      >
        About
      </a>

      <a
        href="mailto:contact@strategicfutureslabs.com"
        className="hover:text-cyan-400 transition"
      >
        Email: contact@strategicfutureslabs.com
      </a>

    </div>

  </div>
</footer>
    </div>
  )
}

