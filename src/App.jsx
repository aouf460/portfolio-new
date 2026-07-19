import { useEffect, useMemo, useRef, useState } from "react";
import heroImageUrl from "../assets/developer-hero.png";
import logoUrl from "../assets/logo.svg";

const email = "aouf460@gmail.com";
const phone = "+971586828506";
const projectInquiryMailto = "mailto:aouf460@gmail.com?subject=Project%20Inquiry";

const navItems = ["work", "value", "stack", "contact"];

const projects = [
  {
    title: "Laminim",
    type: "Shopify Commerce",
    year: "2026",
    href: "https://laminim.ae",
    tags: ["Shopify", "E-commerce", "Brand UX"],
    text: "Built a refined menswear commerce experience for a UAE fashion brand, focused on minimal product storytelling, clean shopping flows, and a premium front-of-store feel.",
  },
  {
    title: "Private Workflow Platform",
    type: "Business Platform",
    year: "2025",
    tags: ["Full Stack", "Workflows", "Permissions", "Reporting"],
    text: "Improved platform architecture, administrative workflows, permission handling, reporting, and delivery structure for a complex internal business system.",
  },
  {
    title: "Enterprise Delivery",
    type: "Solution Architecture",
    year: "2023+",
    tags: ["RFPs", "Integrations", "Leadership"],
    text: "Translated business requirements and RFPs into scalable architectures, team plans, integration strategies, and production delivery across enterprise-grade digital platforms.",
  },
];

const stack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "APIs",
  "SQL",
  "SCSS",
  "GitHub",
  "Product UX",
  "Automation",
  "Dashboards",
  "Deployment",
  "Liferay",
  "Sitecore",
  "Shopify",
  "WordPress",
  "Zoho",
  "Salesforce",
];

const stackGroups = [
  ["Frontend", ["React", "TypeScript", "JavaScript", "SCSS", "Product UX"]],
  ["Backend", ["Node.js", "APIs", "SQL", "Automation"]],
  ["Platforms", ["Shopify", "Liferay", "Sitecore", "WordPress"]],
  ["Integrations", ["Zoho", "Salesforce"]],
  ["Delivery", ["GitHub", "Dashboards", "Deployment"]],
];

const metrics = [
  ["01", "Architecture before pixels"],
  ["02", "Delivery that reduces risk"],
  ["03", "Polish clients can feel"],
];

const valueCards = [
  {
    title: "Senior Thinking",
    text: "I do not just build screens. I define system shape, integrations, stack choices, team structure, and the delivery path before code starts getting expensive.",
  },
  {
    title: "Enterprise Calm",
    text: "RFPs, stakeholders, DXP platforms, CRM integrations, agile delivery, and production constraints are familiar territory, not surprises.",
  },
  {
    title: "Premium Frontend",
    text: "The interface gets the details: motion timing, responsive behavior, accessibility, spacing, performance, and the tiny moments that make work feel valuable.",
  },
  {
    title: "Confidential Delivery",
    text: "Some of the strongest work cannot be shown publicly. I can still explain the thinking, constraints, and outcomes without exposing private client details.",
  },
];

const bootLines = [
  "boot portfolio.system",
  "load react.interface",
  "compile premium.motion",
  "status ready",
];

function Logo() {
  return (
    <span className="logo-mark">
      <img src={logoUrl} alt="O slash dot logo" />
    </span>
  );
}

function SectionLabel({ index, label }) {
  return (
    <div className="section-label" aria-hidden="true">
      <span>{index}</span>
      <i>{label}</i>
    </div>
  );
}

function useReveal(setRevealed) {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.id || entry.target.dataset.revealKey;
            if (key) {
              setRevealed((current) => ({ ...current, [key]: true }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("work");
  const [pointer, setPointer] = useState({ x: 54, y: 42, px: 0.08, py: -0.16 });
  const [pulseSection, setPulseSection] = useState("");
  const [revealed, setRevealed] = useState({});
  const cursorRef = useRef(null);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useReveal(setRevealed);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    function handleGlobalPointerMove(event) {
      if (!cursorRef.current) return;

      cursorRef.current.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorRef.current.style.setProperty("--cursor-y", `${event.clientY}px`);
    }

    window.addEventListener("pointermove", handleGlobalPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleGlobalPointerMove);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.12, 0.3, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function revealHashSection() {
      const item = window.location.hash.replace("#", "");
      if (!navItems.includes(item)) return;

      setRevealed((current) => ({ ...current, [item]: true }));
      setActive(item);
      setPulseSection(item);
    }

    revealHashSection();
    window.addEventListener("hashchange", revealHashSection);
    return () => window.removeEventListener("hashchange", revealHashSection);
  }, []);

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.round(((event.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((event.clientY - rect.top) / rect.height) * 100);
    setPointer({
      x,
      y,
      px: Number(((x - 50) / 50).toFixed(3)),
      py: Number(((y - 50) / 50).toFixed(3)),
    });
  }

  function revealSection(item) {
    setRevealed((current) => ({ ...current, [item]: true }));
  }

  function handleNavClick(item) {
    setActive(item);
    setPulseSection(item);
    revealSection(item);
  }

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      return nextTheme;
    });
  }

  function handlePulseEnd(event) {
    if (event.animationName === "destinationPulse") {
      setPulseSection("");
    }
  }

  function sectionClass(name, key) {
    return [
      "section",
      name,
      revealed[key] ? "is-visible" : "",
      pulseSection === key ? "section--pulse" : "",
    ]
      .filter(Boolean)
      .join(" ");
  }

  return (
    <div className="site-shell">
      <div
        ref={cursorRef}
        className="site-cursor"
        aria-hidden="true"
      />
      <div className="crt-field" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Omar Aouf home">
          <Logo />
          <span>Omar Aouf</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              aria-current={active === item}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </header>

      <main id="top">
        <section
          className="hero"
          onPointerMove={handlePointerMove}
          style={{
            "--pointer-x": `${pointer.x}%`,
            "--pointer-y": `${pointer.y}%`,
            "--parallax-x": pointer.px,
            "--parallax-y": pointer.py,
          }}
        >
          <img
            className="hero__image"
            src={heroImageUrl}
            alt="Abstract developer workspace with code interfaces and refined lighting"
          />
          <div className="hero__light" aria-hidden="true" />
          <div className="hero__scan" aria-hidden="true" />
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__reflection" aria-hidden="true" />
          <div className="hero__panel hero__panel--one" aria-hidden="true" />
          <div className="hero__panel hero__panel--two" aria-hidden="true" />
          <div className="hero__panel hero__panel--three" aria-hidden="true" />

          <div className="hero__content">
            <div className="boot-strip animate-in" aria-label="System boot lines">
              {bootLines.map((line, index) => (
                <span key={line} style={{ "--boot-index": index }}>
                  {line}
                </span>
              ))}
            </div>
            <p className="eyebrow animate-in delay-1">Software Engineer / Solution Architect</p>
            <h1 className="hero-title animate-in delay-2">
              <span>Premium execution.</span>
              <span>Lower risk.</span>
              <span>Better outcomes.</span>
            </h1>
            <p className="hero__copy animate-in delay-2">
              I build premium web experiences and enterprise-grade digital platforms that help
              businesses grow with confidence. From architecture and Shopify stores to React
              applications and enterprise integrations, I deliver solutions that are fast, scalable,
              and built to last. My focus isn't just writing code-it's creating products that feel
              polished, perform exceptionally, and reduce risk from day one.
            </p>
            <div className="hero__actions animate-in delay-3">
              <a
                className="button button--primary"
                href="#work"
                onClick={() => handleNavClick("work")}
                style={{ "--button-index": 0 }}
              >
                View Work
              </a>
              <a
                className="button button--ghost"
                href="#value"
                onClick={() => handleNavClick("value")}
                style={{ "--button-index": 1 }}
              >
                Why Premium
              </a>
              <a
                className="button button--ghost"
                href={projectInquiryMailto}
                style={{ "--button-index": 2 }}
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="hero__console animate-in delay-4" aria-label="Availability card">
            <div className="console-top">
              <Logo />
              <span>omar@aouf.dev:~</span>
            </div>
            <div className="console-command">
              <span>$</span> audit --value
            </div>
            <div className="console-line">
              <span>experience</span>
              <strong>5+ years</strong>
            </div>
            <div className="console-line">
              <span>email</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="console-line">
              <span>phone</span>
              <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
            </div>
            <div className="console-meter" aria-hidden="true">
              <i />
            </div>
            <div className="console-status" aria-hidden="true">
              <span />
              delivery stable
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Core strengths">
          <div>
            {[
              "Solution Architecture",
              "React",
              "Shopify",
              "DXP",
              "RFPs",
              "Integrations",
              "Premium Motion",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div aria-hidden="true">
            {[
              "Solution Architecture",
              "React",
              "Shopify",
              "DXP",
              "RFPs",
              "Integrations",
              "Premium Motion",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className={`section intro ${revealed.intro ? "is-visible" : ""}`} data-reveal data-reveal-key="intro">
          <p>
            Clients do not pay premium for more code. They pay for less uncertainty, sharper
            decisions, cleaner systems, and a product that feels finished before anyone explains it.
          </p>
        </section>

        <section
          className={sectionClass("work", "work")}
          id="work"
          data-reveal
          onAnimationEnd={handlePulseEnd}
        >
          <SectionLabel index="01" label="Work Index" />
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Public work, confidential delivery, and architecture that ships.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title} style={{ "--index": index }}>
                <div className="project-card__signal" aria-hidden="true" />
                <div className="project-card__chrome">
                  <span>{project.type}</span>
                  <span className="year-badge">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tag} style={{ "--tag-index": tagIndex }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {project.href ? (
                  <a className="project-card__link" href={project.href} target="_blank" rel="noreferrer">
                    Open live site
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section
          className={sectionClass("value", "value")}
          id="value"
          data-reveal
          onAnimationEnd={handlePulseEnd}
        >
          <SectionLabel index="02" label="Value Modules" />
          <div className="section-heading">
            <p className="eyebrow">Why Expensive</p>
            <h2>Premium is the invisible work that prevents expensive mistakes.</h2>
          </div>
          <div className="value-grid">
            {valueCards.map((card, index) => (
              <article key={card.title} style={{ "--index": index }}>
                <span className="value-card__number">0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={sectionClass("split", "stack")}
          id="stack"
          data-reveal
          onAnimationEnd={handlePulseEnd}
        >
          <SectionLabel index="03" label="Stack Matrix" />
          <div className="section-heading">
            <p className="eyebrow">Stack</p>
            <h2>Tools for commerce, DXP platforms, integrations, and sharp interfaces.</h2>
          </div>
          <div className="stack-cloud">
            {stackGroups.map(([group, items], groupIndex) => (
              <div className="stack-group" key={group} style={{ "--group-index": groupIndex }}>
                <strong>{group}</strong>
                <div>
                  {items.map((item, itemIndex) => (
                    <span key={item} style={{ "--pill-index": itemIndex }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="stack-marquee" aria-hidden="true">
            <span>{stack.join(" / ")}</span>
            <span>{stack.join(" / ")}</span>
          </div>
        </section>

        <section className={`section method ${revealed.method ? "is-visible" : ""}`} id="method" data-reveal>
          <SectionLabel index="04" label="Delivery Protocol" />
          <div className="method-grid">
            {metrics.map(([number, label]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{label}</h3>
              </article>
            ))}
          </div>
          <div className="method-copy">
            <p className="eyebrow">Method</p>
            <h2>Architecture, delivery, then polish.</h2>
            <p>
              I translate scope and RFPs into clear architecture, plan the team and integration
              strategy, build the experience, and keep the delivery calm enough that quality has
              room to survive.
            </p>
          </div>
        </section>

        <section
          className={sectionClass("contact", "contact")}
          id="contact"
          data-reveal
          onAnimationEnd={handlePulseEnd}
        >
          <SectionLabel index="05" label="Contact Signal" />
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Bring the complicated brief. I will make it feel controlled.</h2>
          </div>
          <div className="contact-panel">
            <Logo />
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
            <span>Dubai, UAE</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Omar Aouf</span>
        <span>{currentYear}</span>
      </footer>
    </div>
  );
}

export default App;
