import { PublicationSection } from "../PublicationSection/PublicationSection";

export function Journal({ journal }) {
  return (
    <main className="journal">
      {
        journal.map((publication, index) => (
          <PublicationSection publication={publication} index={index} />
        ))
      }
    </main>
  )
}