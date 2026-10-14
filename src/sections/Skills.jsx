import SkillTag from '../components/ui/SkillTag.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import skills from '../data/skills.js'

const tracks = [
  {
    number: '01',
    name: 'Electronics',
    symbol: '⌁',
    label: 'Hardware / circuits',
    description: 'Exploring circuits, components, and how hardware works together.',
    topics: ['Circuits', 'Components'],
    color: '#c4f12f',
  },
  {
    number: '02',
    name: 'Mathematics',
    symbol: '∑',
    label: 'Logic / linear algebra',
    description: 'Studying linear algebra and strengthening the way I solve problems.',
    topics: ['Linear algebra', 'Problem solving'],
    color: '#22b7a4',
  },
  {
    number: '03',
    name: 'Web development',
    symbol: '</>',
    label: 'Design / development',
    description: 'Making responsive, interactive websites and learning through projects.',
    topics: ['Responsive layouts', 'Web projects'],
    color: '#91a5ff',
  },
]

function Skills() {
  return (
    <section id="skills">
      <div className="section-ambience" aria-hidden="true" />
      <SectionTitle
        number="02"
        label="Skills"
        description="The fields I’m exploring, one project and one new idea at a time."
        aside="03 learning tracks"
      >
        Learning through building
      </SectionTitle>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-7">
        {tracks.map((track) => (
          <article
            className="skill-track-card group relative flex min-h-[25rem] flex-col overflow-hidden border border-[var(--color-border)] bg-[var(--color-panel)] p-5 transition-colors hover:border-[var(--color-accent-ink)] sm:min-h-[28rem] sm:p-6"
            key={track.number}
            style={{ '--track-color': track.color }}
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--color-accent-ink)]">TRACK / {track.number}</span>
              <span className="size-2 rounded-full bg-[var(--track-color)] shadow-[0_0_12px_var(--track-color)]" aria-hidden="true" />
            </div>
            <div className="skill-track-art" aria-hidden="true">
              <span className="skill-track-halo" />
              <span className="skill-track-symbol">{track.symbol}</span>
              <span className="skill-track-orbit" />
            </div>
            <div className="relative z-10 mt-auto">
              <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[var(--color-muted)]">{track.label}</p>
              <h3 className="text-xl font-semibold tracking-[-0.035em]">{track.name}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--color-muted)]">{track.description}</p>
              <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                {track.topics.map((topic) => <li className="skill-topic" key={topic}>{topic}</li>)}
              </ul>
            </div>
            <span className="skill-track-corner" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>

      <div className="skills-practice mt-5 flex flex-col gap-4 border border-[var(--color-border)] bg-[var(--color-panel)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-4">
          <span className="skills-practice-mark grid size-10 shrink-0 place-items-center border border-[var(--color-border)] font-mono text-lg text-[var(--color-accent-ink)]" aria-hidden="true">↗</span>
          <div>
            <p className="font-medium">I learn best by building.</p>
            <p className="mt-1 max-w-xl text-sm leading-6 text-[var(--color-muted)]">My projects are where these interests meet and become something hands-on.</p>
          </div>
        </div>
        <a className="skills-practice-link inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-accent-ink)]" href="#projects">Explore projects <span aria-hidden="true">↗</span></a>
      </div>

      {skills.length > 0 && (
        <div className="mt-8 border-t border-[var(--color-border)] pt-5">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-muted)]">Tools in my toolkit</p>
          <ul className="flex list-none flex-wrap gap-3 p-0">
            {skills.map((skill) => <li key={skill}><SkillTag>{skill}</SkillTag></li>)}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Skills
