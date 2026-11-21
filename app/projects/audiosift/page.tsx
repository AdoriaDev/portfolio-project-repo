import type { Metadata } from 'next';
import Link from 'next/link';
import './AudioSift.css';

export const metadata: Metadata = {
  title: 'AudioSift',
  description:
    'AudioSift: a full-stack app that analyzes uploaded songs for BPM, key, waveform, genre and mood. Built with React, TypeScript, Node.js, PostgreSQL and a BullMQ/Redis job queue.',
};

const LIVE_URL = 'https://audiosift-frontend.onrender.com/';

const stack = [
  'React', 'TypeScript', 'Node.js / Express', 'PostgreSQL', 'BullMQ / Redis',
  'ffmpeg', 'Essentia.js', 'Jest', 'Swagger', 'Render',
];

const pipeline = [
  { title: 'Upload', detail: 'Drag-and-drop single or batch uploads in the React front end' },
  { title: 'API', detail: 'Express validates the file, checks the daily limit and stores it' },
  { title: 'Job queue', detail: 'The track is queued in BullMQ on Redis, so uploads return right away' },
  { title: 'Worker', detail: 'ffmpeg, music-metadata and Essentia.js extract metadata, BPM, key, waveform, genre and mood' },
  { title: 'Results', detail: 'Results are saved to PostgreSQL, and the UI shows live processing status' },
];

const screenshots = [
  {
    src: '/projects/audiosift/song-detail.jpg',
    alt: 'AudioSift song page showing technical audio information, BPM, key, time signature and a waveform',
    caption: 'Analysis results for a track: technical details, musical information and waveform.',
  },
  {
    src: '/projects/audiosift/browse.jpg',
    alt: 'AudioSift Browse Songs page with a search bar, advanced filters and a paginated list of songs',
    caption: 'Browse and search other users’ sifts, with advanced filters and pagination.',
  },
  {
    src: '/projects/audiosift/home.jpg',
    alt: 'AudioSift landing page with the headline "Discover Your Music’s DNA"',
    caption: 'Landing page.',
  },
  {
    src: '/projects/audiosift/login.jpg',
    alt: 'AudioSift login form with Remember Me and Forgot your password links',
    caption: 'Login, backed by JWT sessions, email verification and password reset.',
  },
];

export default function AudioSiftPage() {
  return (
    <article className="case-study">
      <Link href="/projects" className="back-link">← All projects</Link>

      <header className="cs-hero">
        <p className="cs-eyebrow">Software Development capstone · Mohawk College</p>
        <h1 className="page-title cs-title">AudioSift</h1>
        <p className="cs-lede">
          A full-stack web app where you upload a song and get back its BPM, key, waveform, ID3
          metadata and AI-detected genre and mood, then search, compare and export the results.
        </p>
        <div className="cs-actions">
          <a href={LIVE_URL} className="cta-button cta-primary" target="_blank" rel="noopener noreferrer">
            Try the live site ↗
          </a>
        </div>
        <p className="cs-note">Hosted on Render: the first load can take up to a minute while the server wakes up.</p>
        <ul className="cs-stack" aria-label="Tech stack">
          {stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </header>

      <figure className="cs-figure cs-figure-lead">
        <img src={screenshots[0].src} alt={screenshots[0].alt} width={1600} height={1000} />
        <figcaption>{screenshots[0].caption}</figcaption>
      </figure>

      <section className="cs-section">
        <h2>The problem</h2>
        <p>
          Finding out a track’s tempo, key and technical details usually means juggling several
          tools. AudioSift puts it in one place: upload a song, and it “sifts” out everything worth
          knowing about it, keeps it in your library, and lets you compare it against other songs to
          find similar ones.
        </p>
      </section>

      <section className="cs-section">
        <h2>What it does</h2>
        <ul className="cs-list">
          <li>Analyzes MP3, WAV and other formats for BPM, key, time signature, waveform, ID3 metadata, and AI-detected genre and mood</li>
          <li>Personal library with song groups, plus search, filtering, song comparison and JSON export</li>
          <li>Browse and download other users’ sifts</li>
          <li>Drag-and-drop single and batch uploads</li>
          <li>Tiered free, general and premium plans with daily upload limits</li>
        </ul>
      </section>

      <section className="cs-section">
        <h2>How it’s built</h2>
        <p>
          Audio analysis is too slow to run inside a web request, so uploads go through an
          asynchronous pipeline. The API responds immediately, and a background worker does the
          heavy lifting while the UI shows live processing status.
        </p>
        <ol className="cs-pipeline" aria-label="Processing pipeline">
          {pipeline.map((step, i) => (
            <li key={step.title}>
              <span className="cs-step-num">{i + 1}</span>
              <strong>{step.title}</strong>
              <span>{step.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="cs-section cs-two-col">
        <div>
          <h2>Auth and security</h2>
          <ul className="cs-list">
            <li>JWT sessions and bcrypt password hashing</li>
            <li>Email verification and password reset through Nodemailer</li>
            <li>reCAPTCHA v3 after failed login attempts</li>
          </ul>
        </div>
        <div>
          <h2>Testing and docs</h2>
          <ul className="cs-list">
            <li>Jest tests for every API endpoint, including SQL injection checks</li>
            <li>A full end-to-end test plan and Lighthouse audits</li>
            <li>API documented in Swagger</li>
          </ul>
        </div>
      </section>

      <section className="cs-section">
        <h2>Deployment</h2>
        <p>
          The front end, API, PostgreSQL database and Redis all run on Render. I used Claude to speed
          up component conversion, auth setup and test writing, and reviewed and tested what it
          produced.
        </p>
      </section>

      <section className="cs-section">
        <h2>Screenshots</h2>
        <div className="cs-gallery">
          {screenshots.slice(1).map((shot) => (
            <figure key={shot.src} className="cs-figure">
              <a href={shot.src} target="_blank" rel="noopener noreferrer">
                <img src={shot.src} alt={shot.alt} width={1600} height={1000} loading="lazy" />
              </a>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="cs-footer-actions">
        <a href={LIVE_URL} className="cta-button cta-primary" target="_blank" rel="noopener noreferrer">
          Try the live site ↗
        </a>
        <Link href="/projects" className="cta-button cta-secondary">See more projects</Link>
      </div>
    </article>
  );
}
