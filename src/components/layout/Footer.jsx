import { companyInfo } from '../../data/products';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.mark} aria-hidden="true">
                <span className={styles.markDot} />
                <span className={styles.markDot} />
                <span className={styles.markDot} />
              </span>
              <span>{companyInfo.name}</span>
            </a>
            <p className={styles.tagline}>{companyInfo.tagline}</p>
            <p className={styles.description}>{companyInfo.description}</p>
            <div className={styles.socialRow}>
              <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <h4 className={styles.heading}>Explore</h4>
            <ul className={styles.list}>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">Our story</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className={styles.contact}>
            <h4 className={styles.heading}>Reach us</h4>
            <ul className={styles.list}>
              <li><a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a></li>
              <li><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></li>
              <li><span>{companyInfo.address}</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} {companyInfo.name}. Handcrafted with care.</p>
          <div className={styles.legal}>
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;