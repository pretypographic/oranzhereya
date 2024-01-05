export function PublicationSection({ publication }) {
  return (
    <section className="publication-section">
      <h2 className="publication-section__title">{publication.date}</h2>
      {
        publication.epigraph && publication.epigraph.map((string, index) => (
          <blockquote className="publication-section__epigraph" key={index}>{string}</blockquote>
        ))
      } {
        publication.text.map((string, index) => (
          <p className="publication-section__text" key={index}>{string}</p>
        ))
      }
    </section>
  )
}