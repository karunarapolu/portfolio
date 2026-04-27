import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => (
  <div className="min-h-screen text-ink">
    <Header />
    <article className="container pt-12 md:pt-20 pb-20 max-w-3xl">
      <Link
        to="/"
        className="inline-flex items-center gap-2 label-mono text-mist hover:text-berry"
      >
        <ArrowLeft className="w-4 h-4" /> back to portfolio
      </Link>

      <header className="mt-10">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="chip chip-filled">Open Source</span>
          <span className="chip">OWASP</span>
          <span className="chip">Django</span>
          <span className="chip">Guide</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl leading-[0.95] text-ink">
          My Path to Open Source with{" "}
          <em className="text-berry">OWASP-BLT</em>: A Beginner’s Guide
        </h1>
        <p className="mt-6 text-xl text-ink/70 italic">
          From the configuration abyss to my first merged PR — a guide for the
          perfectionist beginner.
        </p>
        <div className="mt-6 flex items-center gap-4 label-mono text-mist">
          <span>KARUNA RAPOLU</span>
          <span>·</span>
          <span>6 MIN READ</span>
          <span>·</span>
          <span>MAR 2026</span>
        </div>
      </header>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-ink/90 font-serif">
        <p>
          When all you have got is half-baked side projects, you stumble upon
          open source and realise there are organisations, production-level,
          with real users and a community — it feels so real.
        </p>
        <p>
          All the learning starts to make sense. That’s what it felt like when
          I found out about open source. Admittedly, I did find it through
          Google Summer of Code, later realising it isn’t a competition but
          rather a collaboration.
        </p>

        <h2 className="font-display text-3xl mt-12 text-ink">
          1. The Phase of Exploration
        </h2>
        <p>
          Look for your tech stack. If you know Django, search for the{" "}
          <code className="font-mono text-berry">django</code> tag. When you
          find a project, don’t just look at the code. Check the <em>Issues</em>{" "}
          tab for labels like <em>good first issue</em> or <em>help wanted</em>.
          These are invitations. My journey started because I stopped looking
          at the <em>huge</em> project and started looking for one small feature
          I understood.
        </p>
        <p>
          After learning what open source was, I went through various
          organisations. It was interesting to realise that Python, Django, and
          many of the tools I use daily are themselves open-source projects.
        </p>
        <p>
          I started searching for projects which use Django, since that was the
          only web framework I knew at that time. I found{" "}
          <a className="text-berry underline underline-offset-4" href="https://github.com/owasp" target="_blank" rel="noreferrer">
            OWASP Foundation
          </a>
          , an organisation that works to improve the security of software, and
          inside it,{" "}
          <a className="text-berry underline underline-offset-4" href="https://github.com/OWASP-BLT" target="_blank" rel="noreferrer">
            OWASP BLT
          </a>
          . OWASP BLT (Bug Logging Tool) collects issue reports, routes
          sensitive vulnerabilities to BLT-Zero, and keeps community reporting
          transparent through a live leaderboard.
        </p>
        <p>
          I understood most of the codebase due to my familiarity with Django
          based projects, so I decided to make my first contribution there.
        </p>

        <h2 className="font-display text-3xl mt-12 text-ink">
          Configuration Abyss
        </h2>
        <p className="serif-display text-2xl text-berry not-italic">
          “It took me an entire month to set up the project locally.”
        </p>
        <p>
          I was already comfortable with Git, but tools like Docker and
          environment variables were new to me, so setting up the environment
          turned into a learning curve. Being someone who likes to learn
          everything about everything before getting started, it was quite a
          challenge to learn just enough about everything to get started without
          falling into rabbit holes.
        </p>
        <p>
          I had to solve WSL-Docker issues, version problems, and figure out
          why WSL got disconnected every two minutes (spoiler: it was a
          hardware-based resource constraint). The entire process was
          exhausting but rewarding.
        </p>
        <p>
          Open source is a <em>learn-on-the-go</em> environment. If you’re
          stuck in a setup loop, give yourself a time limit to fix it solo
          before asking for help. The goal isn’t to become an expert on your
          local machine’s configuration; the goal is to get the environment
          stable enough to start contributing. Don’t let the setup phase burn
          you out before you’ve even written your first line of production code.
        </p>

        <h2 className="font-display text-3xl mt-12 text-ink">
          Disastrous (or Not?) First Pull Request
        </h2>
        <p>
          After coding the feature, you have to ensure it survives the
          project’s automated gatekeepers. Before pushing it to the remote
          repository, in BLT, you must validate your work against the local
          test suite by running{" "}
          <code className="font-mono text-berry">python manage.py test</code>{" "}
          and pre-commit hooks. These tools catch linting errors and formatting
          inconsistencies.
        </p>
        <p>
          Once you push, your code enters the CI/CD pipeline on GitHub. It is
          common for these remote tests to flag edge cases you missed locally —
          don’t view this as a failure, but as a diagnostic step. Debug,
          re-commit, and the pipeline will re-run automatically.
        </p>
        <p>
          After passing the automated checks, your work moves into the
          peer-review phase. The BLT community is very friendly and helpful.
          They give suggestions, catch errors, and address any questions you
          might have.
        </p>
        <p>
          I went through good first issues, found one feature I could
          implement — the team badges feature. Since the project is built with
          Django, I was able to follow the structure of the codebase fairly
          comfortably. I created database models, implemented the frontend UI,
          the backend, and the signals to award them — only to realise the
          tests were failing.
        </p>
        <p>
          While investigating, I found a bug in the migration history, where
          the Badge model used a direct import. So, not so disastrous after all.
        </p>

        <h2 className="font-display text-3xl mt-12 text-ink">
          First Merged PR
        </h2>
        <p>
          Remember the migration bug I found while implementing Team Badges?
          It wasn’t a blocker but rather an opportunity. When running{" "}
          <code className="font-mono text-berry">python manage.py test</code>,
          I realised the local database couldn’t even initialise because of a
          direct model import in the migration history.
        </p>
        <p>
          Instead of feeling frustrated, I felt like a detective. I fixed the
          bug, pushed it to my fork, and created the PR. When that green{" "}
          <em>Merged</em> icon appeared, the shift in my confidence was
          immediate. That first PR wasn’t just about code; it was about proving
          to myself that I could navigate a production-level codebase.
        </p>
        <p>
          Since then, it has been a momentum-fuelled run. I’ve contributed to
          UI fixes, projects like BLT-SafeCloak, and even BLT-Hackathons. What
          started as a month-long setup battle turned into a smooth
          multi-repository contribution streak.
        </p>

        <h2 className="font-display text-3xl mt-12 text-ink">
          Social Lessons Learnt
        </h2>
        <p>
          Being a perfectionist, I spent a lot of time polishing the team
          badges feature, trying to learn everything I needed; I later realised
          it’s less about being perfect and more about understanding enough to
          contribute. I don’t have to master everything — I’m learning on the
          go.
        </p>
        <p>
          Initially, I thought I had to know everything to fit in. I quickly
          realised that wasn’t required. The community is incredibly friendly
          and helpful. I still remember the <em>dumb</em> questions I asked in
          huddles, but they were answered with patience.
        </p>
        <p className="serif-display text-2xl text-berry not-italic">
          “In open source, asking for help is a sign of growth, not weakness.”
        </p>

        <h2 className="font-display text-3xl mt-12 text-ink">Your Turn</h2>
        <p>
          Don’t wait until you master everything. Learn the basics until you
          understand enough to address an issue, and just start. You will learn
          the complex architectural patterns and “voodoo” configuration fixes
          along the way.
        </p>
        <p>
          If you’re waiting to be an expert before you push your first commit,
          you’ll be waiting forever. In open source, a working prototype is
          worth more than a perfect plan, because code in a PR can be improved,
          but a masterpiece inside your head can’t be helped.
        </p>
      </div>

      <div className="mt-16 paper p-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="label-mono text-mist">Originally published on Medium</p>
          <p className="font-display text-xl text-ink mt-1">
            medium.com/@karunarapolu430
          </p>
        </div>
        <a
          href="https://medium.com/@karunarapolu430/a-beginners-guide-to-owasp-blt-64035fb1bba5"
          target="_blank"
          rel="noreferrer"
          className="sticker bg-teal inline-flex items-center gap-2"
        >
          Read on Medium <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
    <Footer />
  </div>
);

export default BlogPost;
