import { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, index, title, kicker, children, className = "" }: SectionProps) => (
  <section id={id} className={`container py-20 md:py-28 ${className}`}>
    <div className="flex items-baseline justify-between gap-4 mb-8 md:mb-12">
      <div className="flex items-baseline gap-4 md:gap-6 min-w-0">
        <span className="label-mono text-mist whitespace-nowrap">[ {index} ]</span>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] tracking-tight">
          {title}
        </h2>
      </div>
      {kicker && (
        <span className="label-mono text-mist hidden md:inline whitespace-nowrap">
          {kicker}
        </span>
      )}
    </div>
    <div className="section-rule pt-8 md:pt-10">{children}</div>
  </section>
);

export default Section;
