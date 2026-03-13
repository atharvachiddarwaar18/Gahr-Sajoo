"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Contact() {
  return (
    <div className={styles.contactWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="/background.png" 
            alt="Artisan hands" 
            fill 
            style={{ objectFit: "cover" }} 
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="serif-text" variants={fadeUp}>Connect With Our Artisans</motion.h1>
          <motion.p variants={fadeUp}>
            Whether it's a bespoke request or a simple inquiry, we're here to bring the soul of Indian craft to your home.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className={`container ${styles.contactGrid}`}>
          {/* Left Column (Info) */}
          <motion.div 
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${styles.sectionTitle} serif-text`}>Get in Touch</h2>
            <p className={styles.infoDesc}>
              Our customer concierge is available Monday to Saturday, 9:00 AM to 7:00 PM IST to assist you with order status, product details, or interior styling advice.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}><Mail size={18} /></div>
                <div>
                  <h4 className={styles.infoItemTitle}>Email Us</h4>
                  <p className={styles.infoItemText}>concierge@gharsajaao.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}><Phone size={18} /></div>
                <div>
                  <h4 className={styles.infoItemTitle}>Call Us</h4>
                  <p className={styles.infoItemText}>+91 (11) 4567 8900</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}><MapPin size={18} /></div>
                <div>
                  <h4 className={styles.infoItemTitle}>Headquarters</h4>
                  <p className={styles.infoItemText}>12th Floor, Artisan Tower, Mehrauli-Gurgaon Rd,<br/>New Delhi, Delhi 110030</p>
                </div>
              </div>
            </div>

            <div className={styles.tradeSection}>
              <h3 className={styles.tradeTitle}>Trade & Wholesale</h3>
              <p className={styles.tradeDesc}>Are you an interior designer or architect? Join our trade program for exclusive pricing and custom production options.</p>
              <Link href="#" className={styles.tradeLink}>Apply for Trade Account <ArrowRight size={16} /></Link>
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div 
            className={styles.formCol}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
              <div className="grid-cols-2">
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Arjun" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Singh" className={styles.input} />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="arjun@example.com" className={styles.input} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject" className={styles.input}>
                  <option>Bespoke Furniture Inquiry</option>
                  <option>Order Status</option>
                  <option>Trade Account</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can we help you create your dream space?" className={styles.textarea}></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>SEND MESSAGE</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Experience Centers Section */}
      <section className={`section-padding ${styles.centersSection}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "60px" }}>
            <h2 className={`${styles.sectionTitleCenter} serif-text`}>Our Experience Centers</h2>
            <p className={styles.centersSubtitle}>Experience the textures of our fabrics and the grain of our hand-carved woods at our signature galleries.</p>
          </div>

          <motion.div 
            className={`grid-cols-3 ${styles.centersGrid}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { city: "New Delhi Flagship", tag: "The original atelier in the heart of the capital", address: "MG Road, Sultanpur, New Delhi", hours: "10:00 AM - 8:00 PM" },
              { city: "Mumbai Gallery", tag: "A coastal haven for contemporary ethnic designs", address: "Colaba Causeway, South Mumbai", hours: "11:00 AM - 9:00 PM" },
              { city: "Bangalore Studio", tag: "Where heritage meets the silicon valley lifestyle", address: "Indiranagar 100 Feet Rd, Bangalore", hours: "10:30 AM - 8:30 PM" }
            ].map((center, i) => (
              <motion.div key={i} className={styles.centerCard} variants={fadeUp}>
                <div className={styles.mapImgWrapper}>
                  <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt={`${center.city} Map`} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.centerInfo}>
                  <h3 className={styles.centerTitle}>{center.city}</h3>
                  <p className={styles.centerTag}>{center.tag}</p>
                  <div className={styles.centerDetail}>
                    <MapPin size={14} className={styles.detailIcon} />
                    <span>{center.address}</span>
                  </div>
                  <div className={styles.centerDetail}>
                    <span className={styles.detailIcon}>🕒</span>
                    <span>{center.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full Width Map Banner */}
      <section className={styles.mapBanner}>
        <Image src="https://images.unsplash.com/photo-1588725838575-cf56abddc7ba?auto=format&fit=crop&q=80&w=2000" alt="Map Background" fill style={{ objectFit: 'cover', opacity: 0.3 }} />
        <div className={styles.mapBannerContent}>
          <button className="btn-primary">
            <MapPin size={18} style={{ marginRight: '8px' }} />
            FIND YOUR NEAREST ATELIER
          </button>
        </div>
      </section>
    </div>
  );
}
