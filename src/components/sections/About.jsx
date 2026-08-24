import { companyInfo } from '../../data/products';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1556217477-d425ace308d0?w=600&h=700&fit=crop"
              alt="Our team crafting delicious graham balls"
              className={styles.image}
            />
            <div className={styles.experience}>
              <span className={styles.experienceNumber}>8+</span>
              <span className={styles.experienceText}>Years of Excellence</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.badge}>About Us</span>
          <h2 className={styles.title}>Crafting Sweet Moments Since 2018</h2>
          <p className={styles.description}>
            {companyInfo.description}
          </p>
          <p className={styles.paragraph}>
            What started as a small home kitchen project has grown into a beloved local business.
            We take pride in using only the finest ingredients - premium graham crackers,
            quality condensed milk, and handpicked toppings - to create treats that bring joy to
            every occasion.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h4>Premium Quality</h4>
                <p>Made with only the finest ingredients sourced from trusted suppliers</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <h4>Fresh Daily</h4>
                <p>Every order is made fresh on the day of delivery for maximum freshness</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </div>
              <div>
                <h4>Made with Love</h4>
                <p>Handcrafted with care and passion in every batch we make</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <div>
                <h4>Community First</h4>
                <p>Proudly serving our local community and supporting local events</p>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            {companyInfo.stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className={styles.ctaButton}>
            Get in Touch
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
