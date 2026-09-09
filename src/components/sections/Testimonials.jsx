import { testimonials } from '../../data/products';
import styles from './Testimonials.module.css';

function initialsOf(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('');
}

function Stars({ count }) {
  return (
    <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? styles.starOn : styles.starOff} aria-hidden="true">
          {i < count ? '★' : '☆'}
        </span>
      ))}
    </span>
  );
}

function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="eyebrow">Word of mouth</span>
          <h2 className={styles.title}>Loved by homes &amp; events alike</h2>
          <p className={styles.subtitle}>
            From birthday parties to restaurant counters — here's what the people we serve say.
          </p>
        </div>

        <div className={styles.layout}>
          <article className={styles.featured}>
            <Stars count={featured.rating} />
            <blockquote className={styles.featuredQuote}>
              “{featured.content}”
            </blockquote>
            <footer className={styles.person}>
              <span className={styles.avatar}>{initialsOf(featured.name)}</span>
              <span className={styles.meta}>
                <span className={styles.name}>{featured.name}</span>
                <span className={styles.role}>{featured.role}</span>
              </span>
            </footer>
          </article>

          <div className={styles.grid}>
            {rest.map((t) => (
              <article key={t.id} className={styles.card}>
                <Stars count={t.rating} />
                <blockquote className={styles.quote}>“{t.content}”</blockquote>
                <footer className={styles.person}>
                  <span className={styles.avatar}>{initialsOf(t.name)}</span>
                  <span className={styles.meta}>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                  </span>
                </footer>
              </article>
            ))}

            <a href="#contact" className={styles.ctaCard}>
              <span className={styles.ctaMark} aria-hidden="true">+</span>
              <span className={styles.ctaText}>
                Your story could be next.
                <strong>Share your experience</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;