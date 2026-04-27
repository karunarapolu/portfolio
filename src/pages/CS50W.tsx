import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    n: "0",
    name: "Network",
    desc: "A Twitter-like social network — posts, profiles, follows, and an asynchronous like button.",
    video: "https://youtu.be/sOCfEKjYMUM",
    color: "bg-plum",
  },
  {
    n: "1",
    name: "Commerce",
    desc: "An eBay-style auction site — listings, bids, comments, watchlist, and categories.",
    video: "https://youtu.be/iUhiw6_mMac",
    color: "bg-violet",
  },
  {
    n: "2",
    name: "Mail",
    desc: "A single-page email client with a Django API and vanilla JavaScript on the front end.",
    video: "https://youtu.be/0UMIikimCto",
    color: "bg-berry",
  },
  {
    n: "3",
    name: "Wiki",
    desc: "An encyclopedia in Django — Markdown entries, search, edit, and a random-page button.",
    video: "https://youtu.be/GuCcQKIAvWU",
    color: "bg-teal",
  },
  {
    n: "4",
    name: "Search",
    desc: "A Google-Search clone — front page, results, and advanced search built with HTML & CSS.",
    video: "https://youtu.be/sAwJ044NTJ8",
    color: "bg-rose",
  },



];

const ytId = (url: string) => {
  const m = url.match(/youtu\.be\/([^?&]+)/);
  return m ? m[1] : "";
};

const CS50W = () => (
  <div className="min-h-screen text-ink">
    <Header />
    <section className="container pt-12 md:pt-20 pb-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 label-mono text-mist hover:text-berry"
      >
        <ArrowLeft className="w-4 h-4" /> back to portfolio
      </Link>

      <div className="mt-10 grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-9">
          <span className="chip">CASE STUDY · 2025—2026</span>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.9] mt-4 text-ink">
            CS50W —<br />
            <em className="text-berry">Web Programming</em>
            <br />with Python &amp; JavaScript
          </h1>
        </div>
        <div className="lg:col-span-3 label-mono text-mist">
          <p>5 PROJECTS</p>
          <p>HARVARD CS50W</p>
          <p>STATUS · IN PROGRESS</p>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/85">
        Five capstone projects covering Django, ORM design, JavaScript
        single-page apps, and full-stack architecture. Each card links to a
        recorded walkthrough on YouTube.
      </p>
    </section>

    <section className="container pb-24 space-y-6">
      {projects.map((p) => (
        <article
          key={p.name}
          className="paper p-6 md:p-8 grid md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-2">
            <div className={`sticker ${p.color} font-display !text-3xl !px-4 !py-2`}>
              0{p.n}
            </div>
          </div>
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl text-ink leading-tight">{p.name}</h2>
            <p className="mt-3 text-ink/80 leading-relaxed">{p.desc}</p>
            <a
              href={p.video}
              target="_blank"
              rel="noreferrer"
              className="sticker mt-5 inline-flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5" />
              Watch demo
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
          <div className="md:col-span-4">
            <a
              href={p.video}
              target="_blank"
              rel="noreferrer"
              className="block aspect-video frame-dotted overflow-hidden hover:opacity-90 transition relative bg-ink"
            >
              <img
                src={`https://img.youtube.com/vi/${ytId(p.video)}/hqdefault.jpg`}
                alt={`${p.name} demo thumbnail`}
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
            </a>
          </div>
        </article>
      ))}
    </section>

    <Footer />
  </div>
);

export default CS50W;
