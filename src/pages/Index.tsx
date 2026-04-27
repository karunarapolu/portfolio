import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, BookOpen, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

/* ---------- Data ---------- */

const socials = [
  { label: "GitHub", href: "https://github.com/karunarapolu", icon: Github, handle: "@karunarapolu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/karuna-rapolu", icon: Linkedin, handle: "karuna-rapolu" },
  { label: "Medium", href: "https://medium.com/@karunarapolu430", icon: BookOpen, handle: "@karunarapolu430" },
  { label: "Email", href: "mailto:karunarapolu430@gmail.com", icon: Mail, handle: "karunarapolu430@gmail.com" },
];

const education = [
  {
    year: "2024 — 2027",
    school: "Little Flower Degree College",
    detail: "BSc in Mathematics, Statistics & Computer Science",
    grade: "CGPA 8.4 / 10.0",
    color: "bg-rose",
  },
  {
    year: "2022 — 2024",
    school: "Johnson Grammar School (ISC)",
    detail: "Maths · Economics · Computer Science",
    grade: "Grade 12 — 88%",
    color: "bg-teal",
  },
  {
    year: "2020 — 2022",
    school: "Johnson Grammar School (ICSE)",
    detail: "Maths · Science · Computer Science",
    grade: "Grade 10 — 94%",
    color: "bg-violet",
  },
];

const projects = [
  {
    name: "Sol — GSoC RAG Chatbot",
    stack: ["LangChain", "Qdrant", "Gemini API", "BM25", "Streamlit"],
    blurb:
      "Hybrid retrieval combining semantic search with BM25 over GSoC archives — improved accuracy by 45%.",
    link: "https://github.com/karunarapolu/sol",
    accent: "bg-berry text-background",
  },
  {
    name: "Monetary Policy RL Environment",
    stack: ["RL", "Docker", "FastAPI", "HuggingFace"],
    blurb:
      "Macroeconomic simulation with 15 policy instruments and 6 scenarios. Deployed on Hugging Face Spaces.",
    link: "https://github.com/karunarapolu/monetary_policy_rl",
    accent: "bg-teal text-ink",
  },
  {
    name: "TalkBits",
    stack: ["Django", "Tailwind", "SQLite"],
    blurb:
      "Multilingual learning platform — Hindi, Telugu, Tamil, English — with offline access and sign-language mapping.",
    link: "https://github.com/keerthi-manasvi/Talkbits",
    accent: "bg-rose text-ink",
  },
  {
    name: "Productivity Predictor API",
    stack: ["Logistic Regression", "FastAPI", "Docker"],
    blurb:
      "REST API with a from-scratch logistic regression (gradient descent), containerised with Docker.",
    link: "https://github.com/karunarapolu/productivity-prediction-api",
    accent: "bg-violet text-background",
  },
];

const skillGroups = [
  { title: "Languages", items: ["Python", "Java", "JavaScript", "HTML5", "CSS3"] },
  { title: "AI / ML", items: ["LangChain", "Sentence Transformers", "Reinforcement Learning", "RAG", "BM25"] },
  { title: "Frameworks", items: ["Django", "FastAPI", "Flask", "Streamlit", "TypeScript", "Tailwind", "Bootstrap"] },
  { title: "Databases", items: ["Qdrant (Vector)", "PostgreSQL", "SQLite", "MySQL"] },
  { title: "Tools", items: ["Docker", "Git", "HuggingFace Spaces", "Linux", "Canva"] },
];

const experience = [
  {
    role: "Open Source Contributor",
    org: "OWASP Foundation — Bug Logging Tool (BLT)",
    period: "Nov 2025 — Present",
    bullets: [
      "Contributed 7+ merged PRs implementing features and resolving critical bugs.",
      "Fixed migration errors and 500 server exceptions, improving platform stability.",
      "Worked across the Django codebase and shipped UI/UX improvements.",
    ],
  },
  {
    role: "Head of Graphic Design",
    org: "Rewrite The Stars Review — Literary Magazine",
    period: "2022 — Present",
    bullets: [
      "Led graphic design across 7+ published issues, directing creative vision.",
      "Personally created 50+ original designs.",
      "Coordinated and presided over a team of designers.",
    ],
  },
];

const certificates = [
  { title: "CS50x — Introduction to Computer Science", issuer: "Harvard University", tag: "Completed" },
  { title: "CS50W — Web Programming with Python & JavaScript", issuer: "Harvard University", tag: "In Progress" },
  { title: "Machine Learning Specialization", issuer: "Andrew Ng · Coursera", tag: "Audited" },
  { title: "Python 3.4.3", issuer: "IIT Bombay", tag: "Completed" },
  { title: "Data Science & Analytics", issuer: "NASSCOM", tag: "Completed" },
  { title: "Introduction to Cybersecurity", issuer: "IBM SkillsBuild", tag: "Completed" },
];

/* ---------- Decorative bits ---------- */

const PixelStar = ({ className = "" }: { className?: string }) => (
  <span className={`pixel text-2xl text-teal ${className}`}>✦</span>
);

const Wireframe = () => (
  <svg
    viewBox="0 0 300 300"
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <g className="animate-spin-slow" style={{ transformOrigin: "150px 150px" }}>
      <path d="M60 90 L240 90 L260 60 L80 60 Z" />
      <path d="M60 90 L60 230 L80 260 L80 60" />
      <path d="M240 90 L240 230 L260 260 L260 60" />
      <path d="M60 230 L240 230 L260 260 L80 260 Z" />
      <path d="M110 130 L210 130 L220 115 L120 115 Z" />
      <path d="M110 130 L110 200 L120 215 L120 115" />
      <path d="M210 130 L210 200 L220 215 L220 115" />
      <path d="M110 200 L210 200 L220 215 L120 215 Z" />
    </g>
  </svg>
);

/* ---------- Page ---------- */

const Index = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    );
  }, []);

  return (
    <div className="min-h-screen text-ink">
      <Header />

      {/* ============= LANDING ============= */}
      <section
        id="landing"
        className="relative overflow-hidden border-b border-ink/20"
      >
        <div className="container relative pt-16 md:pt-24 pb-20 md:pb-28">
          {/* corner marks */}
          <div className="absolute top-6 left-6 label-mono text-mist hidden md:block">::</div>
          <div className="absolute top-6 right-6 label-mono text-mist hidden md:block">
            {date}
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="pixel-game text-[6vw] md:text-[4.5rem] leading-[1.2] tracking-normal text-rose">
                Karuna
                <br />
                <span className="text-teal">Rapolu</span>
                <PixelStar className="align-top ml-2 inline-block animate-float w-[0.4em] h-[0.4em]" />
              </h1>
              <p className="mt-8 max-w-xl text-lg md:text-xl text-ink/80 leading-relaxed">
                Undergraduate in Maths, Stats & CS. I build{" "}
                <span className="text-berry italic">full-stack</span> web apps,
                tinker with <span className="text-berry italic">RAG</span> &
                reinforcement learning, and ship open-source code to{" "}
                <span className="text-berry italic">OWASP</span>.
              </p>

              {/* socials */}
              <div className="mt-10 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="sticker group"
                  >
                    <s.icon className="w-3.5 h-3.5 mr-2" />
                    {s.label}
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-50 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square frame-dotted p-6 paper">
                <div className="absolute -top-3 -left-3 chip chip-filled">{`> identity.json`}</div>
                <div className="absolute top-4 right-4 label-mono text-mist">
                  034.8473 W
                </div>
                <div className="text-mist h-full w-full">
                  <Wireframe />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between label-mono text-ink">
                  <span>HOSTED AT /</span>
                  <span>HYDERABAD, IN</span>
                </div>
              </div>

              {/* floating stickers */}
              <div className="absolute -top-4 -right-4 sticker bg-teal" style={{ ['--r' as any]: '8deg' }}>
                <span className="pixel text-base">she/her</span>
              </div>
              <div className="absolute -bottom-6 -left-6 sticker bg-rose animate-float" style={{ ['--r' as any]: '-6deg' }}>
                7+ merged PRs ✓
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============= ABOUT ============= */}
      <Section id="about" index="01" title="About" kicker="A brief introduction">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-ink/85">
            <p>
              I’m an undergrad reading Mathematics, Statistics, and Computer
              Science — a combination that keeps me equally happy proving
              theorems, fitting models, and shipping software.
            </p>
            <p>
              My day-to-day is full-stack web development with{" "}
              <span className="serif-display text-berry">Django</span>,{" "}
              <span className="serif-display text-berry">FastAPI</span>, and
              modern frontends. On the ML side I’m drawn to retrieval systems
              (RAG, vector DBs) and reinforcement learning. I package most of my
              work in Docker and deploy on Hugging Face or small cloud boxes.
            </p>
            <p>
              I’m an active open-source contributor at the{" "}
              <span className="serif-display text-berry">OWASP Foundation</span>,
              with 7+ merged PRs to the Bug Logging Tool. I also lead graphic
              design for a literary magazine — words and pixels both, basically.
            </p>
          </div>
          <div className="md:col-span-2 space-y-3">
            {[
              ["Based in", "Hyderabad, India"],
              ["Studying", "BSc Maths · Stats · CS"],
              ["Currently", "OSS @ OWASP-BLT"],
              ["Tinkering with", "RAG · RL · Vector DBs"],

            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-4 frame-dotted px-4 py-3"
              >
                <span className="label-mono text-mist">{k}</span>
                <span className="font-mono text-sm text-ink text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============= EDUCATION ============= */}
      <Section id="education" index="02" title="Education" kicker="The paper trail">
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((e) => (
            <div key={e.school} className="paper p-6 relative group hover:-translate-y-1 transition-transform">
              <div className={`absolute -top-3 -left-3 sticker ${e.color}`}>
                {e.year}
              </div>
              <h3 className="font-display text-2xl text-ink mt-4 leading-tight">
                {e.school}
              </h3>
              <p className="text-ink/75 mt-2 text-sm leading-relaxed">{e.detail}</p>
              <div className="mt-6 pt-4 border-t border-ink/20 label-mono text-berry">
                {e.grade}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============= PROJECTS ============= */}
      <Section id="projects" index="03" title="Projects" kicker="Things I've built">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="paper p-7 group block hover:-translate-y-1 hover:translate-x-[-2px] transition-transform"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="label-mono text-mist">P/0{i + 1}</span>
                <ArrowUpRight className="w-5 h-5 text-ink opacity-40 group-hover:opacity-100 group-hover:text-berry transition" />
              </div>
              <h3 className="font-display text-3xl mt-3 text-ink leading-tight">
                {p.name}
              </h3>
              <p className="mt-3 text-ink/80 text-[15px] leading-relaxed">
                {p.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* CS50W card */}
        <div className="mt-6">
          <Link
            to="/cs50w"
            className="paper p-7 group block hover:-translate-y-1 hover:translate-x-[-2px] transition-transform"
          >
            <div className="flex items-start justify-between gap-4">
              {/* Keeping consistent labeling or using a special tag */}
              <span className="label-mono text-mist">COURSE</span>
              <ArrowUpRight className="w-5 h-5 text-ink opacity-40 group-hover:opacity-100 group-hover:text-berry transition" />
            </div>

            <h3 className="font-display text-3xl mt-3 text-ink leading-tight">
              Web Programming with <em>Python & JavaScript</em>
            </h3>

            <p className="mt-3 text-ink/80 text-[15px] leading-relaxed">
              Five capstone projects completed under Harvard University's CS50W curriculum,
              ranging from social networks to auction sites.
            </p>

            <div className="mt-5 flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap gap-1.5">
                <span className="chip">HARVARD CS50W</span>
                <span className="chip">DJANGO</span>
                <span className="chip">REACT</span>
              </div>

              <span className="text-[12px] font-bold uppercase tracking-wider text-berry opacity-0 group-hover:opacity-100 transition-opacity">
                Open Case Study →
              </span>
            </div>
          </Link>
        </div>
      </Section>

      {/* ============= SKILLS ============= */}
      <Section id="skills" index="04" title="Skills" kicker="The tool belt">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="frame-dotted p-6">
              <h3 className="label-mono text-berry mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============= BLOG ============= */}
      <Section id="blog" index="05" title="Blog" kicker="Words on what I learn">
        <Link
          to="/blog/owasp-blt"
          className="paper-lg block p-8 md:p-12 group hover:-translate-y-1 transition-transform"
        >
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="chip chip-filled">Featured</span>
                <span className="chip">Open Source</span>
                <span className="chip">OWASP</span>
                <span className="chip">Guide</span>
              </div>
              <h3 className="font-display text-3xl md:text-5xl text-ink leading-[0.95]">
                My Path to Open Source with{" "}
                <em className="text-berry">OWASP-BLT</em>: A Beginner’s Guide
              </h3>
              <p className="mt-5 text-ink/80 text-lg leading-relaxed">
                From the configuration abyss to my first merged PR — a guide for
                the perfectionist beginner.
              </p>
              <div className="mt-6 flex items-center gap-4 label-mono text-mist">
                <span>6 MIN READ</span>
                <span>·</span>
                <span>MAR 2026</span>
              </div>
            </div>
            <div className="md:col-span-2 flex md:justify-end">
              <span className="sticker bg-teal text-ink inline-flex items-center gap-2">
                Read the article <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </Section>

      {/* ============= EXPERIENCE ============= */}
      <Section id="experience" index="06" title="Experience" kicker="Work & roles">
        <div className="space-y-4">
          {experience.map((x, i) => (
            <div
              key={x.role}
              className="grid md:grid-cols-12 gap-6 frame-dotted p-6 md:p-8 hover:bg-card transition-colors"
            >
              <div className="md:col-span-3">
                <span className="label-mono text-mist">E/0{i + 1}</span>
                <p className="label-mono text-berry mt-2">{x.period}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-3xl text-ink leading-tight">
                  {x.role}
                </h3>
                <p className="text-ink/70 italic mt-1">{x.org}</p>
                <ul className="mt-4 space-y-2 text-ink/85">
                  {x.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-teal mt-1">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============= CERTIFICATES ============= */}
      <Section id="certificates" index="07" title="Certificates" kicker="Coursework">
        <div className="grid md:grid-cols-2 gap-4">
          {certificates.map((c) => (
            <div
              key={c.title}
              className="frame-dotted p-5 flex items-start justify-between gap-4 hover:bg-card transition-colors"
            >
              <div>
                <h3 className="font-display text-xl text-ink leading-snug">
                  {c.title}
                </h3>
                <p className="label-mono text-mist mt-1">{c.issuer}</p>
              </div>
              <span
                className={`chip whitespace-nowrap ${c.tag == "chip-filled"
                  }`}
              >
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ============= CONTACT ============= */}
      <Section id="contact" index="08" title="Contact" kicker="Say hello">
        <div className="paper-lg p-8 md:p-14 text-center relative overflow-hidden">
          <PixelStar className="absolute top-6 left-6 animate-float" />
          <PixelStar className="absolute bottom-6 right-6 animate-float text-rose" />
          <p className="label-mono text-mist">// reach out</p>
          <h3 className="font-display text-4xl md:text-7xl text-ink mt-4 leading-[0.95]">
            Let’s build
            <br />
            <em className="text-berry">something good.</em>
          </h3>
          <a
            href="mailto:karunarapolu430@gmail.com"
            className="font-mono text-base md:text-xl underline decoration-2 decoration-teal underline-offset-8 mt-8 inline-block hover:text-berry transition-colors"
          >
            karunarapolu430@gmail.com
          </a>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="sticker"
              >
                <s.icon className="w-3.5 h-3.5 mr-2" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
