import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'Our Story' },
  { href: '#contact', label: 'Contact' }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const { theme, toggleTheme } = useTheme();

  // Scroll shadow on the bar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy — highlight the section in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = '#home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Primary">
      <div className={styles.container}>
        <a href="#home" className={styles.logo} aria-label="Graham Balls Delights home">
          <span className={styles.mark} aria-hidden="true">
            <span className={styles.markDot} />
            <span className={styles.markDot} />
            <span className={styles.markDot} />
          </span>
          <span className={styles.logoText}>Graham Balls <em>Delights</em></span>
        </a>

        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4.5"/>
                <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/>
              </svg>
            )}
          </button>

          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="navbar-menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} />
          </button>
        </div>

        <div
          id="navbar-menu"
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${active === link.href ? styles.active : ''}`}
              aria-current={active === link.href ? 'true' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.ctaButton}
            onClick={() => setIsMenuOpen(false)}
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;