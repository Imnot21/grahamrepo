import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.ornament} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className="eyebrow">Premium quality since 2018</span>

          <h1 className={styles.title}>
            Little bites of
            <br />
            <em>sweetness,</em> hand-rolled.
          </h1>

          <p className={styles.subtitle}>
            Soft, creamy graham balls crafted fresh each morning — for parties that linger,
            gifts that matter, and the <em>merienda</em> a home deserves.
          </p>

          <div className={styles.buttons}>
            <a href="#products" className={styles.primaryButton}>
              Explore the menu
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Place an order
            </a>
          </div>
        </div>

        <div className={styles.media}>
          <figure className={styles.frame}>
            <img
              src="/grahamrepo/images/classic-graham-balls.png"
              alt="Classic graham balls, dusted with graham crumbs"
              className={styles.heroImage}
              loading="eager"
            />
          </figure>

          <div className={styles.stamp} aria-hidden="true">
            <svg viewBox="0 0 100 100" className={styles.stampSvg}>
              <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
              <path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" fill="none" />
              <text className={styles.stampText}>
                <textPath href="#circ">FRESH DAILY &nbsp;SINCE 2018 &nbsp;</textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default Hero;