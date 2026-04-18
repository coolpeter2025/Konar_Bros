/* global React, BRAND, SERVICES, PORTFOLIO, IMG, STATS */
const { useState, useEffect } = React;

// ─────────────────────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────────────────────
function HomePage({ onNavigate, openConsult }) {
  return (
    <div>
      <window.Hero openConsult={openConsult}/>
      <window.Differentiators openConsult={openConsult}/>
      <window.ServicesStrip onNavigate={onNavigate}/>
      <window.FounderNote/>
      <window.StatsBand/>
      <window.PortfolioBand onNavigate={onNavigate}/>
      <window.TestimonialCarousel/>
      <window.ProcessStrip/>
      <window.Newsletter/>
      <window.ClosingCTA openConsult={openConsult}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE HEADER — used by About / Services / Portfolio / Contact
// ─────────────────────────────────────────────────────────────
function PageHeader({ eyebrow, title, sub, image }) {
  return (
    <section style={{ position: "relative", minHeight: 480, background: "#0e1821", overflow: "hidden" }}>
      {image && (
        <img src={image} alt="" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", opacity: 0.55,
        }}/>
      )}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(14,24,33,0.70) 0%, rgba(14,24,33,0.88) 100%)",
      }}/>
      <div className="container kb-page-header-inner" style={{
        position: "relative", padding: "180px 32px 100px", maxWidth: 1200, color: "#fff",
      }}>
        {eyebrow && <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 20 }}>{eyebrow}</p>}
        <h1 style={{
          fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 500, lineHeight: 1.05,
          letterSpacing: "-0.025em", margin: "0 0 24px", maxWidth: 900,
        }} dangerouslySetInnerHTML={{
          __html: title.replace(/\*(.+?)\*/g, '<em style="font-style:italic;color:var(--lavender);font-weight:500">$1</em>')
        }}/>
        {sub && <p style={{ fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,.88)", maxWidth: 640, margin: 0 }}>{sub}</p>}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────
function AboutPage({ onNavigate, openConsult }) {
  return (
    <div>
      <PageHeader
        eyebrow="About Konar Bros"
        title="Built by *tilers* — not by a sales office."
        sub="Twelve years, 380 homes, and a crew that still runs its own trowels. Meet the family behind Konar Bros."
        image={IMG.team}
      />
      <section style={{ padding: "120px 0", background: "var(--surface)" }}>
        <div className="container" style={{ padding: "0 32px", maxWidth: 880 }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Our Story</p>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 32px" }}>
            Two brothers, one obsession with clean grout lines.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--gray-700)", marginBottom: 24 }}>
            We started Konar Bros in 2014 out of a garage in Town 'n' Country with
            a used tile saw and a customer list of three friends. Twelve years
            later, we've tiled 380 Tampa Bay homes, won nine Houzz awards, and
            built a crew of fifteen full-time setters who still run their own tools.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--gray-700)", marginBottom: 24 }}>
            What hasn't changed: we only do tile and stone. No roofing
            side-gigs, no cabinetry margin-chasing. Specialization lets us run
            cleaner jobsites, hold tighter tolerances, and give homeowners a
            schedule we actually keep.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--gray-700)", margin: 0 }}>
            We treat your home the way we'd want someone to treat ours — drop
            cloths down, shoes off, nothing cut on the kitchen island.
          </p>
        </div>
      </section>
      <window.StatsBand/>
      <section style={{ padding: "120px 0", background: "var(--lavender)" }}>
        <div className="container" style={{ padding: "0 32px", maxWidth: 1200 }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Our Values</p>
            <h2 style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.12, color: "var(--ink)", margin: 0 }}>
              What you can count on, every single day.
            </h2>
          </div>
          <div className="kb-values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { t: "Craft before speed", d: "We won't rush a layout. Better to spend a day on a cut than deliver a room you'll squint at for a decade." },
              { t: "One number, one crew", d: "No phone-tree, no sub-contracted surprises. Our setters are W-2 employees we trained ourselves." },
              { t: "No final bill until you're happy", d: "Every Konar Bros project closes with a walk-through. If we missed something, we come back — before you pay." },
            ].map(v => (
              <div key={v.t} style={{ background: "var(--surface)", border: "1px solid var(--lavender-hover)", borderRadius: 8, padding: 32 }}>
                <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--navy)", margin: "0 0 14px" }}>{v.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--gray-600)", margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <window.ProcessStrip/>
      <window.ClosingCTA openConsult={openConsult}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SERVICES LISTING
// ─────────────────────────────────────────────────────────────
function ServicesPage({ onNavigate, openConsult }) {
  return (
    <div>
      <PageHeader
        eyebrow="What We Do"
        title="Tile installation, done *right*, every room."
        sub="Bathrooms, showers, kitchen backsplashes, and floors — installed by a small residential-focused crew across Tampa Bay."
        image={SERVICES[0].image}
      />
      <section style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div className="container" style={{ padding: "0 32px", maxWidth: 1200 }}>
          <div className="kb-services-list-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {SERVICES.map((s, i) => (
              <button key={s.slug} onClick={() => onNavigate(`service/${s.slug}`)} style={{
                textAlign: "left", background: "none", border: 0, padding: 0, cursor: "pointer",
                fontFamily: "inherit", color: "var(--ink)",
              }}>
                <div style={{ aspectRatio: "3/2", borderRadius: 4, overflow: "hidden", marginBottom: 20, background: "var(--lavender)" }}>
                  <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                </div>
                <p className="eyebrow" style={{ marginBottom: 10 }}>0{i + 1} · Specialty</p>
                <h3 style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 10px" }}>{s.name}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--gray-600)", margin: "0 0 16px" }}>{s.short}</p>
                <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: 13, letterSpacing: ".04em", textTransform: "uppercase" }}>
                  Learn more →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <window.ClosingCTA openConsult={openConsult}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SERVICE DETAIL
// ─────────────────────────────────────────────────────────────
function ServiceDetailPage({ slug, onNavigate, openConsult }) {
  const s = SERVICES.find(x => x.slug === slug) || SERVICES[0];
  return (
    <div>
      <PageHeader
        eyebrow={s.name}
        title={`*${s.name.split(" ")[0]}* that lasts decades, not seasons.`}
        sub={s.short}
        image={s.image}
      />
      <section style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div className="container" style={{ padding: "0 32px", maxWidth: 1100 }}>
          <div className="kb-service-detail-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64 }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Scope</p>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 24px" }}>
                What a Konar Bros {s.name.toLowerCase()} project includes.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--gray-700)", marginBottom: 24 }}>
                Every project starts with an in-home measure, a 3D layout, and a
                written specification that covers waterproofing, substrate prep,
                grout color, and transition strip detailing. Nothing gets ordered
                until you've signed off on every line.
              </p>
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                {s.scope.map(line => (
                  <li key={line} style={{ display: "flex", gap: 14, padding: "14px 0", borderTop: "1px solid var(--lavender-hover)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M5 12l5 5L20 7"/>
                    </svg>
                    <span style={{ fontSize: 16, color: "var(--ink)" }}>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ background: "var(--lavender)", border: "1px solid var(--lavender-hover)", borderRadius: 8, padding: 32, position: "sticky", top: 120 }}>
                <p className="eyebrow" style={{ marginBottom: 14 }}>Next Step</p>
                <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--ink)", margin: "0 0 16px" }}>
                  Book an in-home consultation.
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--gray-600)", margin: "0 0 20px" }}>
                  One of the Konars will come out, take measurements, and walk
                  your space with you. No deposit, no pressure.
                </p>
                <button onClick={openConsult} style={{
                  width: "100%", background: "var(--accent)", color: "var(--on-accent)", border: 0, borderRadius: 6,
                  padding: "14px 20px", fontWeight: 700, fontSize: 13,
                  letterSpacing: ".06em", textTransform: "uppercase", cursor: "pointer",
                  fontFamily: "inherit",
                }}>Request a Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 0", background: "var(--lavender)" }}>
        <div className="container" style={{ padding: "0 32px", maxWidth: 1200 }}>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: 16 }}>More Services</p>
          <h3 style={{ textAlign: "center", fontSize: "clamp(24px, 2.6vw, 32px)", fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 40px" }}>
            Explore other Konar Bros specialties.
          </h3>
          <div className="kb-service-more-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {SERVICES.filter(x => x.slug !== s.slug).map(x => (
              <button key={x.slug} onClick={() => onNavigate(`service/${x.slug}`)} style={{
                background: "var(--surface)", border: "1px solid var(--lavender-hover)", borderRadius: 6,
                padding: 20, textAlign: "left", cursor: "pointer", fontFamily: "inherit",
                color: "var(--ink)",
              }}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, color: "var(--navy)" }}>{x.name}</div>
                <div style={{ fontSize: 13, color: "var(--gray-600)" }}>Learn more →</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PORTFOLIO
// ─────────────────────────────────────────────────────────────
function PortfolioPage({ onNavigate, openConsult }) {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const tags = ["All", "Bathroom", "Shower", "Backsplash", "Floor"];
  const items = PORTFOLIO.filter(p => filter === "All" || p.tag === filter);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <PageHeader
        eyebrow="Portfolio"
        title="Every project is a *one-of-one.*"
        sub="Twelve years of Tampa Bay tile — browse by room, or just scroll the grid until something stops you."
        image={PORTFOLIO[0].img}
      />
      <section style={{ padding: "60px 0 100px", background: "var(--surface)" }}>
        <div className="container" style={{ padding: "0 32px", maxWidth: 1280 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)} style={{
                padding: "10px 20px", borderRadius: 999,
                background: filter === t ? "var(--accent)" : "transparent",
                color: filter === t ? "var(--on-accent)" : "var(--ink)",
                border: filter === t ? "1px solid var(--accent)" : "1px solid var(--lavender-hover)",
                fontWeight: 600, fontSize: 13, letterSpacing: ".04em",
                textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit",
                transition: "all .15s ease",
              }}>{t}</button>
            ))}
          </div>
          <div className="kb-portfolio-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 16,
          }}>
            {items.map((p, i) => {
              // alternating column spans for editorial feel
              const spans = [6, 6, 4, 4, 4, 7, 5, 6, 6];
              const span = spans[i % spans.length];
              return (
                <button key={p.slug} onClick={() => setLightbox(p)} style={{
                  gridColumn: `span ${span}`,
                  padding: 0, background: "none", border: 0, cursor: "pointer",
                  textAlign: "left", fontFamily: "inherit", color: "var(--ink)",
                }}>
                  <div style={{
                    aspectRatio: span === 6 ? "3/2" : span === 7 ? "16/9" : span === 5 ? "4/3" : "1/1",
                    borderRadius: 4, overflow: "hidden", background: "var(--lavender)", marginBottom: 14,
                  }}>
                    <img src={p.img} alt={p.title} style={{
                      width: "100%", height: "100%", objectFit: "cover", display: "block",
                      transition: "transform .6s cubic-bezier(.2,.8,.2,1)",
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}/>
                  </div>
                  <div>
                    <span style={{
                      display: "inline-block",
                      fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase",
                      color: "var(--navy)", marginBottom: 8,
                    }}>{p.tag}</span>
                    <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.01em", margin: "0 0 4px" }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: "var(--gray-600)", margin: 0 }}>{p.area}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, background: "rgba(14,17,40,.92)", zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "center", padding: 32,
        }}>
          <button onClick={() => setLightbox(null)} aria-label="Close" style={{
            position: "absolute", top: 28, right: 32, width: 44, height: 44,
            borderRadius: 22, background: "transparent", border: "1px solid rgba(255,255,255,.3)",
            color: "#fff", fontSize: 20, cursor: "pointer", fontFamily: "inherit",
          }}>✕</button>
          <div onClick={e => e.stopPropagation()} style={{
            maxWidth: 1200, width: "100%", maxHeight: "85vh",
            display: "flex", flexDirection: "column", gap: 20, alignItems: "center",
          }}>
            <img src={lightbox.img} alt={lightbox.title} style={{
              maxWidth: "100%", maxHeight: "75vh", objectFit: "contain", borderRadius: 4,
            }}/>
            <div style={{ color: "#fff", textAlign: "center" }}>
              <h3 style={{ fontSize: 24, fontWeight: 500, margin: "0 0 4px", letterSpacing: "-0.01em" }}>{lightbox.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,.7)", margin: 0 }}>
                {lightbox.area} · {lightbox.tag}
              </p>
            </div>
          </div>
        </div>
      )}

      <window.ClosingCTA openConsult={openConsult}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Bathrooms", msg: "" });
  const [sent, setSent] = useState(false);
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div>
      <PageHeader
        eyebrow="Get in Touch"
        title="Request a *consultation.*"
        sub="Tell us about your space. One of the Konars will be in touch within one business day."
        image={IMG.newsletter}
      />
      <section style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div className="container" style={{ padding: "0 32px", maxWidth: 1100 }}>
          <div className="kb-contact-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64 }}>
            <div>
              {sent ? (
                <div style={{ padding: "60px 40px", background: "var(--lavender)", borderRadius: 8, textAlign: "center" }}>
                  <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--navy)", margin: "0 0 16px" }}>
                    Thank you — <em style={{ fontStyle: "italic" }}>we'll be in touch.</em>
                  </h2>
                  <p style={{ fontSize: 16, color: "var(--gray-700)", margin: 0 }}>
                    We read every inquiry ourselves. Expect an email or call from
                    Erin or Miles within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: "grid", gap: 20 }}>
                  <div className="kb-contact-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    <Field label="Your name">
                      <input required value={form.name} onChange={e => update("name", e.target.value)} style={inputStyle}/>
                    </Field>
                    <Field label="Email">
                      <input type="email" required value={form.email} onChange={e => update("email", e.target.value)} style={inputStyle}/>
                    </Field>
                  </div>
                  <div className="kb-contact-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    <Field label="Phone">
                      <input type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} style={inputStyle}/>
                    </Field>
                    <Field label="Service">
                      <select value={form.service} onChange={e => update("service", e.target.value)} style={inputStyle}>
                        {SERVICES.map(s => <option key={s.slug}>{s.name}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Tell us about your project">
                    <textarea value={form.msg} onChange={e => update("msg", e.target.value)} rows={6}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}/>
                  </Field>
                  <button type="submit" style={{
                    padding: "16px 32px", background: "var(--accent)", color: "var(--on-accent)",
                    border: 0, borderRadius: 6, fontWeight: 700, fontSize: 14,
                    letterSpacing: ".06em", textTransform: "uppercase", cursor: "pointer",
                    fontFamily: "inherit", justifySelf: "start",
                  }}>Send Inquiry</button>
                </form>
              )}
            </div>
            <div>
              <div style={{ padding: 32, background: "var(--lavender)", borderRadius: 8 }}>
                <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em", margin: "0 0 24px", color: "var(--ink)" }}>
                  Reach us directly.
                </h3>
                <ContactRow label="Tampa Studio" body={BRAND.address}/>
                <ContactRow label="Phone" body={
                  <a href={`tel:${BRAND.phoneTampaTel}`} style={{ color: "var(--accent)", textDecoration: "none", display: "block", fontWeight: 600 }}>{BRAND.phoneTampa}</a>
                }/>
                <ContactRow label="Email" body={
                  <a href={`mailto:${BRAND.email}`} style={{ color: "var(--navy)", fontWeight: 600, textDecoration: "none" }}>{BRAND.email}</a>
                } last/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
const inputStyle = {
  width: "100%", padding: "13px 16px", borderRadius: 6,
  border: "1px solid var(--lavender-hover)", background: "var(--surface)",
  fontFamily: "inherit", fontSize: 15, color: "var(--ink)", outline: "none",
  boxSizing: "border-box",
};
function Field({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 8 }}>{label}</div>
      {children}
    </label>
  );
}
function ContactRow({ label, body, last }) {
  return (
    <div style={{ padding: "14px 0", borderBottom: last ? "none" : "1px solid var(--lavender-hover)" }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray-600)", marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}

Object.assign(window, { HomePage, AboutPage, ServicesPage, ServiceDetailPage, PortfolioPage, ContactPage });
