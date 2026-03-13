"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

// Dummy data
const textiles = [
  { id: 1, title: "Ram Mandir Illuminated Wall Frame", price: "₹2,499", image: "/Illuminated Wall Frame.png" },
  { id: 2, title: "Om Mandala LED Wall Art", price: "₹3,850", image: "/LED Wall Art.png" },
  { id: 3, title: "Metropolitan Street Canvas Painting", price: "₹12,500", image: "/Metropolitan Street Canvas Painting.png" },
  { id: 4, title: "Emerald Falls Nature Canvas", price: "₹4,200", image: "/Emerald Falls Nature Canvas.png" },
];

const pottery = [
  { id: 1, title: "Ivory Marble Twist Vase", image: "/Ivory Marble Twist Vase.png" },
  { id: 2, title: "Stone Mosaic Designer Vase", image: "/Stone Mosaic Designer Vase.png" },
  { id: 3, title: "Amber Swirl Glass Vase", image: "/Amber Swirl Glass Vase.png" },
];

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroBg}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image 
            src="/background.png"
            alt="Beautiful Indian interior"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.heroOverlay}></div>
        </motion.div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            className={`${styles.heroTitle} serif-text`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Modern Elegance,<br/>
            <span className="italic">Indian Soul</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Transform your home with authentic artisanal pieces inspired by centuries of<br/>
            heritage and the warmth of terracotta landscapes.
          </motion.p>
          
          <motion.div 
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/catalog" className="btn-primary">Shop Collection</Link>
            <Link href="/about" className="btn-outline">Explore Heritage</Link>
          </motion.div>
        </div>
      </section>

      {/* Traditional Textiles Section */}
      <section className={`section-padding ${styles.textilesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Wall Decor & Art</h2>
              <p className={styles.sectionSubtitle}>Elevate your spaces with illuminated stories and canvases</p>
            </div>
            <Link href="/catalog?category=textiles" className={styles.viewAll}>
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div 
            className="grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {textiles.map((item) => (
              <motion.div key={item.id} className={styles.productCard} variants={fadeInUp}>
                <div className={styles.productImgWrapper}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <h3 className={styles.productTitle}>{item.title}</h3>
                <p className={styles.productPrice}>{item.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className={`section-padding ${styles.heritageSection}`}>
        <div className={`container ${styles.heritageGrid}`}>
          <motion.div 
            className={styles.heritageImage}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=1000"
              alt="Artisan crafting"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          
          <motion.div 
            className={styles.heritageContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles.badge} variants={fadeInUp}>OUR HERITAGE</motion.div>
            <motion.h2 className={`${styles.heritageTitle} serif-text`} variants={fadeInUp}>
              Preserving the Soul of Indian Craftsmanship
            </motion.h2>
            <motion.p className={styles.heritageDesc} variants={fadeInUp}>
              For generations, our artisans have mastered the dance of thread and clay. Ghar Sajaao was born from a passion to bring these timeless traditions into the modern home, ensuring that every piece tells a story of heritage, culture, and unparelleled skill.
            </motion.p>
            
            <motion.div className={styles.stats} variants={fadeInUp}>
              <div className={styles.stat}>
                <h4 className={styles.statNum}>500+</h4>
                <p className={styles.statLabel}>Local Artisans Supported</p>
              </div>
              <div className={styles.stat}>
                <h4 className={styles.statNum}>24</h4>
                <p className={styles.statLabel}>Regional Craft Forms</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Link href="/about" className="btn-primary">Read Our Story</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Artisanal Pottery Section */}
      <section className={`section-padding ${styles.potterySection}`}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${styles.largeSectionTitle} serif-text`}>Designer Vases</h2>
            <p className={styles.potterySubtitle}>
              Elegant marble, glass, and stone vases crafted to bring<br/>natural beauty to your space.
            </p>
          </motion.div>

          <motion.div 
            className={styles.potteryGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {pottery.map((item, index) => (
              <motion.div 
                key={item.id} 
                className={`${styles.potteryCard} ${index === 1 ? styles.potteryCardFeatured : ''}`}
                variants={fadeInUp}
              >
                <div className={styles.potteryImgWrapper}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
