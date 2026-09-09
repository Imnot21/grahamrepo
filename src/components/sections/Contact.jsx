import { useState } from 'react';
import { companyInfo } from '../../data/products';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.subject) next.subject = 'Please choose a subject.';
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = 'Tell us a little more (at least 10 characters).';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    // Simulate a network round-trip; wire to your backend / messaging API here.
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 800);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="eyebrow">Get in touch</span>
          <h2 className={styles.title}>Ready to order?</h2>
          <p className={styles.subtitle}>
            Questions about flavors, wholesale pricing, or your event? Send us a note and we&apos;ll
            reply within a day.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>We grew up on feedback</h3>
            <p className={styles.infoSubtitle}>
              Reach us on any channel — phone, email, or WhatsApp. Orders large or small welcome.
            </p>

            <ul className={styles.contactList}>
              {[
                { icon: 'phone', title: 'Phone', value: companyInfo.phone },
                { icon: 'mail', title: 'Email', value: companyInfo.email },
                { icon: 'pin', title: 'Location', value: companyInfo.address },
                { icon: 'clock', title: 'Hours', value: companyInfo.hours }
              ].map((item, i) => (
                <li key={i} className={styles.contactItem}>
                  <span className={styles.iconWrapper}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      {item.icon === 'phone' && (
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      )}
                      {item.icon === 'mail' && (
                        <>
                          <rect x="2" y="4" width="20" height="16" rx="2"/>
                          <path d="M22 7l-10 6L2 7"/>
                        </>
                      )}
                      {item.icon === 'pin' && (
                        <>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </>
                      )}
                      {item.icon === 'clock' && (
                        <>
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </>
                      )}
                    </svg>
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <span className={styles.contactValue}>{item.value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.socialRow}>
              <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>

            <a
              href={`${companyInfo.social.whatsapp}?text=${encodeURIComponent("Hi! I'd like to inquire about your graham balls.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCta}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message us on WhatsApp
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <h3 className={styles.formTitle}>
              {status === 'success' ? 'Message received' : 'Send us a message'}
            </h3>

            {status === 'success' ? (
              <div className={styles.success} role="status">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <p>Thanks, {form.name || 'friend'}. We&apos;ll get back to you within a day.</p>
                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={() => setStatus('idle')}
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Full name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={update}
                      className={`${styles.input} ${errors.name ? styles.invalid : ''}`}
                      placeholder="Maria Santos"
                      autoComplete="name"
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      className={`${styles.input} ${errors.email ? styles.invalid : ''}`}
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      className={styles.input}
                      placeholder="+63 912 345 6789"
                      autoComplete="tel"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={update}
                      className={`${styles.select} ${errors.subject ? styles.invalid : ''}`}
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Place an order</option>
                      <option value="wholesale">Wholesale inquiry</option>
                      <option value="custom">Custom order</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Something else</option>
                    </select>
                    {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={update}
                    className={`${styles.textarea} ${errors.message ? styles.invalid : ''}`}
                    placeholder="Tell us about your order or occasion..."
                    rows="5"
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;