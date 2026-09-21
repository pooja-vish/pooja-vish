import Footer from '../components/Footer'

const experience = [
  'Shipped 18+ features/fixes across a Java/Play Framework/PostgreSQL SaaS platform, including 3 Inspection Forms lifecycle features (copy, pause/reactivate, frequency editing) and a configurable Service Order map filtering system, end-to-end (DB → service → UI).',
  'Enhanced the Generic Importer framework across 3 tickets (service group validation, Completion Date support, sheet-name escaping) and shipped GeoTab GIS map-layer toggling, improving import reliability for utility field-service teams.',
  'Resolved 8+ production defects across Service Orders, Work Orders, and Tickets, landing all fixes through peer/PR review on a 12+ year, 600+ evolution legacy codebase.',
]

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Pooja Vishwakarma</h1>
        <p className="subtitle">Full Stack Developer | Enterprise Solutions</p>
      </section>

      <section id="experience" className="section">
        <p className="eyebrow">Experience</p>
        <h2>Software Engineer III @ SpryPoint</h2>
        <ul>
          {experience.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <Footer />
    </main>
  )
}
