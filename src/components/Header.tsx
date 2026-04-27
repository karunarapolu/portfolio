import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { id: "landing", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-GB", { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      // If we aren't on home, go home with the hash
      navigate(`/#${id}`);
    } else {
      // If we are already home, just scroll
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Add this effect to handle scrolling when coming from another page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Timeout ensures the DOM is fully rendered before scrolling
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-ink/15">
      <div className="container flex items-center justify-between h-14">
        {/* logo button */}
        <button
          onClick={() => handleClick("landing")}
          className="flex items-center gap-2 group"
        >
          <span className="text-teal text-xl leading-none">✦</span>
          <span className="font-display text-xl text-ink tracking-tight">
            karuna<span className="text-berry">.</span>
          </span>
          <span className="label-mono hidden sm:inline text-mist ml-2">{time}</span>
        </button>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.slice(1).map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className="label-mono px-2.5 py-1 text-ink hover:text-berry transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* mobile menu toggle and menu logic remains the same... */}
        <button onClick={() => setOpen(!open)} className="lg:hidden chip chip-filled">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/15 bg-background">
          <div className="container py-4 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className="text-left label-mono py-2 text-ink hover:text-berry"
              >
                → {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
