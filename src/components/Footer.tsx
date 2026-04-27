import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-ink/30 mt-10">
    <div className="container py-12 grid gap-10 md:grid-cols-3">
      <div>
        <div className="font-display text-3xl text-ink leading-none">
          karuna<span className="text-berry">.</span>
        </div>
        <p className="label-mono text-mist mt-3">
          Made with serif type, dotted grids,<br />and a lot of coffee.
        </p>
      </div>
      <div>
        <p className="label-mono text-ink mb-3">Elsewhere</p>
        <ul className="space-y-2 font-mono text-sm">
          <li><a className="hover:text-berry inline-flex items-center gap-2" href="https://github.com/karunarapolu" target="_blank" rel="noreferrer"><Github className="w-4 h-4" /> github/karunarapolu</a></li>
          <li><a className="hover:text-berry inline-flex items-center gap-2" href="https://www.linkedin.com/in/karuna-rapolu" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4" /> linkedin/karuna-rapolu</a></li>
          <li><a className="hover:text-berry inline-flex items-center gap-2" href="https://medium.com/@karunarapolu430" target="_blank" rel="noreferrer"><BookOpen className="w-4 h-4" /> medium/@karunarapolu430</a></li>
          <li><a className="hover:text-berry inline-flex items-center gap-2" href="mailto:karunarapolu430@gmail.com"><Mail className="w-4 h-4" /> karunarapolu430@gmail.com</a></li>
        </ul>
      </div>
      <div>

        <p className="label-mono text-mist mt-4">© {new Date().getFullYear()} — All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
