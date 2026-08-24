import { companyInfo } from '../../data/products';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>
            🍪 Premium Quality Since 2018
          </span>

          <h1 className={styles.title}>
            Delicious <span className={styles.highlight}>Graham Balls</span> for Every Occasion
          </h1>

          <p className={styles.subtitle}>
            Handcrafted with premium ingredients, our graham balls are perfect for parties,
            gifts, or simply satisfying your sweet cravings. Fresh daily, delivered with love.
          </p>

          <div className={styles.buttons}>
            <a href="#products" className={styles.primaryButton}>
              View Our Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Contact Us
            </a>
          </div>

          <div className={styles.stats}>
            {companyInfo.stats.slice(0, 3).map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.decorativeCircle} aria-hidden="true"></div>
            <img
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&h=500&fit=crop"
              alt="Delicious graham balls assortment"
              className={styles.heroImage}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
