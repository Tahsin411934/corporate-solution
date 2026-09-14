'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import { FiArrowUpRight, FiFileText, FiShield, FiPercent, FiUsers, FiBarChart, FiArrowRight, FiPause, FiPlay } from 'react-icons/fi';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import styles from './Banner.module.css';

export type HeroSlide = {
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  highlightedText: string;
  titleSuffix: string;
  description: string;
  services: { label: string; icon: IconType }[];
  primaryButton: { label: string; href: string };
  theme: 'navy' | 'blue' | 'midnight' | 'sky';
  note: string;
};

const services = [
  { label: 'Business Registration', icon: FiFileText },
  { label: 'VAT & Tax Consultancy', icon: FiPercent },
  { label: 'Legal Services', icon: FiUsers },
  { label: 'Ongoing Support', icon: FiBarChart },
];
const primaryButton = { label: 'Book a Consultation', href: '/contact' };
const slides: HeroSlide[] = [
  { desktopImage: '/images/hero-registration-desktop.webp', mobileImage: '/images/hero-reference-mobile.png', imageAlt: 'Business desk overlooking a waterfront city', eyebrow: 'Simple solutions for a stronger tomorrow', title: 'Business Registration,', highlightedText: 'Tax & Legal', titleSuffix: ' Support', description: 'Expert consultation for all your business needs in Bangladesh.', services, primaryButton, theme: 'navy', note: 'Grow. Comply. Succeed.' },
  { desktopImage: '/b2.png', mobileImage: '/images/hero-reference-mobile.png', imageAlt: 'Waterfront office terrace overlooking the city and bridge at sunset', eyebrow: 'Clarity for every business decision', title: 'VAT & Tax Consultancy,', highlightedText: 'Made Simple', titleSuffix: ' For You', description: 'Expert VAT and tax guidance for your business in Bangladesh.', services, primaryButton, theme: 'blue', note: 'Clarity. Confidence. Progress.' },
  { desktopImage: '/images/hero-legal-desktop.webp', mobileImage: '/images/hero-reference-mobile.png', imageAlt: 'Waterfront offices at sunset', eyebrow: 'A stronger foundation for your business', title: 'Legal & Compliance,', highlightedText: 'Trusted', titleSuffix: ' Support', description: 'Reliable legal and compliance support for your business.', services, primaryButton, theme: 'midnight', note: 'Built on trust.' },
];

export default function Banner({ items = slides }: { items?: HeroSlide[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || reducedMotion || items.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setCurrent(value => (value + 1) % items.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion, items.length]);
  const slide = items[current % items.length];
  if (!slide) return null;
  const stopped = paused || reducedMotion;

  return (
    <section data-theme={slide.theme} className={styles.banner} aria-label="Business consultancy services">
      <div className={styles.hero} data-theme={slide.theme} aria-roledescription="carousel"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
        <picture className={styles.picture} key={slide.desktopImage}>
          <source media="(max-width: 640px)" srcSet={slide.mobileImage} />
          <Image src={slide.desktopImage} alt={slide.imageAlt} fill sizes="100vw" loading="eager" fetchPriority={current === 0 ? 'high' : 'auto'} unoptimized className={styles.image} />
        </picture>
        <div className={styles.overlay} />
        <div className={styles.container}>
          <div className={styles.content} key={current} aria-live={stopped ? 'polite' : 'off'} aria-atomic="true">
            <p className={styles.eyebrow}><span />{slide.eyebrow}</p>
            <h1>{slide.title}<br /><em>{slide.highlightedText}</em><span className={styles.titleSuffix}>{slide.titleSuffix}</span></h1>
            <p className={styles.description}>{slide.description}</p>
            <ul className={styles.services}>
              {slide.services.map(({ label, icon: Icon }) => <li key={label}><span className={styles.serviceIcon}><Icon aria-hidden="true" /></span><span>{label}</span></li>)}
            </ul>
            <div className={styles.actions}>
              <Link className={styles.primary} href={slide.primaryButton.href}>{slide.primaryButton.label}<FiArrowRight aria-hidden="true" /></Link>
              <div className={styles.contact}>
                <a href="tel:+8801909221707" aria-label="Call Corporate Solution"><FaPhone aria-hidden="true" /><span>Call us</span></a>
                <a href="https://wa.me/8801909221707" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><FaWhatsapp aria-hidden="true" /><span>WhatsApp</span></a>
              </div>
            </div>
          </div>
          <div className={styles.note} aria-hidden="true"><FiArrowUpRight /><span>{slide.note}</span><small>CORPORATE SOLUTION · BANGLADESH</small></div>
        </div>
        {items.length > 1 && <div className={styles.controls}>
          <span className={styles.counter} aria-hidden="true">0{current % items.length + 1} <span>/ 0{items.length}</span></span>
          <div className={styles.dots}>{items.map((item, index) => <button key={item.desktopImage} onClick={() => setCurrent(index)} aria-label={`Show slide ${index + 1}: ${item.title}`} aria-current={current % items.length === index}><span /></button>)}</div>
          <button className={styles.play} onClick={() => { setPaused(!stopped); if (reducedMotion) setReducedMotion(false); }} aria-label={stopped ? 'Play slideshow' : 'Pause slideshow'}>{stopped ? <FiPlay /> : <FiPause />}</button>
        </div>}
      </div>
      <dl className={styles.stats}>
        <div><dt>Years of Experience</dt><dd><FiShield aria-hidden="true" />13<span>+</span></dd></div>
        <div><dt>Happy Clients</dt><dd><FiUsers aria-hidden="true" />500<span>+</span></dd></div>
        <div><dt>Client Satisfaction</dt><dd><FiBarChart aria-hidden="true" />98<span>%</span></dd></div>
      </dl>
    </section>
  );
}
