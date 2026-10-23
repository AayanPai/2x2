import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const bifrostUrl = 'https://bifrostd.netlify.app';

function ArrowUpRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="2×2 Software home">
        <img src="/assets/2x2-mark.png" alt="" className="brand-mark" />
        <span className="brand-name">2×2 <span>SOFTWARE</span></span>
      </a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span />
      </button>
      <nav className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <a href="#studio" onClick={closeMenu}>What we do</a>
        <a href="#bifrost" onClick={closeMenu}>Bifrost</a>
        <a href="#next" onClick={closeMenu}>What’s next</a>
        <a className="nav-cta" href={bifrostUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Visit Bifrost <ArrowUpRight size={14} /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero page-wrap" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> INDEPENDENT SOFTWARE STUDIO</div>
        <h1>We build<br /><span>software products.</span></h1>
        <p className="hero-description">Ideas become products here. We design and build digital experiences with a clear purpose, thoughtful details, and room to grow.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#bifrost">Explore our work <ArrowRight /></a>
          <a className="text-link" href="#studio">What we do <span className="down-arrow">↓</span></a>
        </div>
      </div>
      <div className="hero-art" aria-label="2×2 Software brand mark and product studio graphic">
        <div className="art-grid" />
        <div className="art-index">PRODUCT STUDIO <span>001—∞</span></div>
        <img className="hero-mark" src="/assets/2x2-mark.png" alt="2×2 geometric logo" />
        <div className="art-bottom"><span>BUILDING IN PUBLIC</span><span className="art-cross">×</span><span>MORE TO COME</span></div>
      </div>
      <div className="hero-footnote"><span>01 / PRODUCT-LED THINKING</span><span>BUILT TO BE USED. MADE TO EVOLVE.</span></div>
    </section>
  );
}

const pillars = [
  {
    n: '01',
    title: 'Product thinking',
    desc: 'Start with a real need, shape a clear idea, and make the experience feel obvious in the best way.'
  },
  {
    n: '02',
    title: 'Software, made real',
    desc: 'From web apps to platforms, we turn early concepts into usable products people can return to.'
  },
  {
    n: '03',
    title: 'Built to keep growing',
    desc: 'We ship, learn, refine, and build on what works. A product is a starting point, not a finish line.'
  }
];

function Studio() {
  return (
    <section className="studio-section page-wrap" id="studio">
      <div className="section-heading">
        <span className="section-index">[ WHAT WE DO ]</span>
        <div>
          <h2>Ideas are good.<br />Useful products are better.</h2>
          <p>2×2 Software is a product-focused software company. We make digital products of our own, giving ideas the design, engineering, and attention they need to become real.</p>
        </div>
      </div>
      <div className="pillar-grid">
        {pillars.map((pillar) => (
          <article className="pillar-card" key={pillar.n}>
            <span className="pillar-number">{pillar.n}</span>
            <div className="pillar-symbol" aria-hidden="true"><span /><span /></div>
            <h3>{pillar.title}</h3>
            <p>{pillar.desc}</p>
            <div className="pillar-rule" />
          </article>
        ))}
      </div>
    </section>
  );
}

const screenshots = [
  { src: '/assets/bifrost-home.jpg', alt: 'Bifrost home screen showing a gaming profile banner and recommended games', label: 'DISCOVER', title: 'A home for your gaming life', className: 'shot-wide' },
  { src: '/assets/bifrost-profile.jpg', alt: 'Bifrost player profile with a top games row', label: 'YOUR PROFILE', title: 'Your games, on record', className: '' },
  { src: '/assets/bifrost-analytics.png', alt: 'Bifrost gaming taste analytics with genre and game statistics', label: 'YOUR TASTE', title: 'Patterns in what you play', className: '' },
  { src: '/assets/bifrost-game-detail.png', alt: 'Bifrost game detail page with a distinctive rating gauge', label: 'GAME JOURNAL', title: 'More than a star rating', className: 'shot-wide' },
  { src: '/assets/bifrost-blend.jpg', alt: 'Bifrost Blend shared taste match and game recommendations between players', label: 'BIFROST BLEND', title: 'Find your common ground', className: 'shot-wide shot-blend' }
];

const features = [
  {
    number: '01',
    title: 'A personal gaming journal',
    desc: 'Track what you have played, rate and review games, keep a library, and build curated lists you can revisit.'
  },
  {
    number: '02',
    title: 'A rating system with a point of view',
    desc: 'A verdict-style scale gives your rating a little more personality than another row of stars.'
  },
  {
    number: '03',
    title: 'Bifrost Blend',
    desc: 'Compare gaming taste with another player, see what you have in common, and get recommendations to try together.'
  },
  {
    number: '04',
    title: 'Gaming taste analytics',
    desc: 'Explore your most-played genres, your recent decisions, and the shape of your gaming history.'
  }
];

function Bifrost() {
  return (
    <section className="bifrost-section" id="bifrost">
      <div className="bifrost-inner page-wrap">
        <div className="product-topline"><span>PRODUCT 001</span><span className="beta-pill"><i /> CURRENTLY IN BETA</span></div>
        <div className="product-intro">
          <div className="product-title-block">
            <div className="bifrost-brand"><img src="/assets/bifrost-mark.png" alt="" /><span>BIFROST</span></div>
            <h2>Your gaming life,<br /><span>all in one place.</span></h2>
          </div>
          <div className="product-summary">
            <p>Bifrost is a social web app where gamers can track, review, organize, and rediscover the games they play.</p>
            <p>Build your personal gaming journal, create curated collections, share your thoughts, and explore a growing community of players—all in one beautifully designed platform.</p>
            <a className="button button-blue" href={bifrostUrl} target="_blank" rel="noreferrer">Explore Bifrost <ArrowUpRight /></a>
          </div>
        </div>

        <div className="screen-gallery" aria-label="Bifrost product screenshots">
          {screenshots.map((shot, index) => (
            <figure className={`screen-card ${shot.className}`} key={shot.src}>
              <div className="screen-image-wrap"><img src={shot.src} alt={shot.alt} loading={index > 1 ? 'lazy' : 'eager'} /></div>
              <figcaption><span>{shot.label}</span><strong>{shot.title}</strong><span className="screen-arrow"><ArrowUpRight size={15} /></span></figcaption>
            </figure>
          ))}
        </div>

        <div className="feature-intro"><span className="section-index">[ INSIDE BIFROST ]</span><h3>Designed around how<br />you actually play.</h3></div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-item" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
              <span className="feature-corner" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        <div className="product-bottomline"><span>YOUR GAMES. YOUR STORY.</span><span>IN BETA — MORE TO COME</span></div>
      </div>
    </section>
  );
}

function NextUp() {
  return (
    <section className="next-section page-wrap" id="next">
      <div className="next-stamp"><div className="stamp-grid"><span /><span /><span /><span /></div><span>02×02</span></div>
      <div className="next-copy">
        <span className="section-index">[ AND THIS IS ONLY THE START ]</span>
        <h2>One product now.<br /><span>More projects soon.</span></h2>
        <p>Bifrost is one example of what we do—not the whole story. We build products, explore ideas, and bring new projects to life. There’s more on the way.</p>
        <a className="button button-dark" href={bifrostUrl} target="_blank" rel="noreferrer">See what we’re building <ArrowUpRight /></a>
      </div>
      <div className="next-side-note"><span className="note-line" />PRODUCTS IN PROGRESS<span>WATCH THIS SPACE</span></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer page-wrap">
      <a className="brand footer-brand" href="#top">
        <img src="/assets/2x2-mark.png" alt="" className="brand-mark" />
        <span className="brand-name">2×2 <span>SOFTWARE</span></span>
      </a>
      <span className="footer-motto">A SMALL STUDIO FOR BIG IDEAS.</span>
      <a className="back-top" href="#top">BACK TO TOP ↑</a>
      <span className="copyright">© {new Date().getFullYear()} 2×2 SOFTWARE</span>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Studio />
        <Bifrost />
        <NextUp />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
