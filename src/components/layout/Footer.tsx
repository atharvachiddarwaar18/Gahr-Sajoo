"use client";

import Link from "next/link";
import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}></div>
            <span className="serif-text">Ghar Sajaao</span>
          </Link>
          <p className={styles.desc}>
            Bringing the soul of Indian craftsmanship through meticulously designed home decor for the modern sanctuary.
          </p>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialLink}><Instagram size={18} /></Link>
            <Link href="#" className={styles.socialLink}><Twitter size={18} /></Link>
            <Link href="#" className={styles.socialLink}><Facebook size={18} /></Link>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <Link href="/catalog" className={styles.link}>New Arrivals</Link>
          <Link href="#" className={styles.link}>Sustainable Wood</Link>
          <Link href="#" className={styles.link}>Artisan Stories</Link>
          <Link href="#" className={styles.link}>Custom Orders</Link>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Support</h4>
          <Link href="#" className={styles.link}>Shipping Policy</Link>
          <Link href="#" className={styles.link}>Returns & Exchanges</Link>
          <Link href="#" className={styles.link}>Care Guide</Link>
          <Link href="/contact" className={styles.link}>FAQ</Link>
        </div>

        <div className={styles.newsletterCol}>
          <h4 className={styles.colTitle}>Stay Inspired</h4>
          <p className={styles.subtext}>Subscribe for interior tips and new collections.</p>
          <form className={styles.formRow} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className={styles.input} />
            <button type="submit" className={styles.submitBtn}>
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <p>© {new Date().getFullYear()} Ghar Sajaao Prints Limited. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
