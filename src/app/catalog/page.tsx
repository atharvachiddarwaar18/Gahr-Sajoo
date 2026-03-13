"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

const products = [
  { id: 1, title: "Halo Crystal Ring Lamp", price: "₹4,500", image: "/Halo Crystal Ring Lamp.png", tag: "Best Seller", vendor: "Crystal Aura" },
  { id: 2, title: "Floral Glow Table Lamp", price: "₹2,850", image: "/Floral Glow Table Lamp.png", vendor: "Lumina" },
  { id: 3, title: "Zen Buddha Aura Lamp", price: "₹1,200", image: "/Zen Aura Lamp.png", tag: "New", vendor: "Zenith" },
  { id: 4, title: "Royal Crystal Tassel Pendant Lamp", price: "₹4,950", image: "/Royal Crystal Tassel Pendant Lamp.png", vendor: "Royal Lighting" },
  { id: 5, title: "Turquoise Crown Crystal Pendant", price: "₹3,850", image: "/Turquoise Crown Crystal Pendant Lamp.png", vendor: "Crown Decor" },
  { id: 6, title: "Ruby Crystal Fringe Pendant Lamp", price: "₹2,750", image: "/Ruby Crystal Fringe Pendant Lamp.png", vendor: "Ruby Lights" },
  { id: 7, title: "Vintage Gear Wall Clock", price: "₹8,900", image: "/Vintage Gear Wall Clock.png", tag: "Sale", vendor: "Timeless" },
  { id: 8, title: "Stone Mosaic Designer Vase", price: "₹1,150", image: "/Stone Mosaic Designer Vase.png", vendor: "Mosaic Craft" },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Catalog() {
  return (
    <div className={`container ${styles.catalogWrapper}`}>
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link> <span className={styles.separator}>/</span> <span>Shop</span>
      </div>

      <header className={styles.header}>
        <motion.h1 
          className="serif-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ARTISANAL LIVING
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Discover handcrafted excellence. Each piece tells a story of heritage, skill, and timeless beauty.
        </motion.p>
      </header>

      <div className={styles.filtersBar}>
        <div className={styles.filtersWrapper}>
          <span className={styles.filterLabel}>FILTERS:</span>
          {['Category', 'Material', 'Price Range', 'Craft Type'].map((filter) => (
            <button key={filter} className={styles.filterBtn}>
              {filter} <ChevronDown size={14} />
            </button>
          ))}
        </div>
        <div className={styles.resultsCount}>Showing 18 items</div>
      </div>

      <motion.div 
        className={`grid-cols-4 ${styles.productGrid}`}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {products.map((p) => (
          <motion.div key={p.id} className={styles.productCard} variants={fadeUp}>
            <div className={styles.imageWrapper}>
              {p.tag && <span className={`${styles.tag} ${p.tag === 'Sale' ? styles.tagSale : ''}`}>{p.tag}</span>}
              <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
              <div className={styles.quickAdd}>
                <button className="btn-primary" style={{ width: '100%' }}>Add to Cart</button>
              </div>
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{p.title}</h3>
              <div className={styles.productMeta}>
                <span className={styles.vendor}>{p.vendor}</span>
                <span className={styles.price}>{p.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.pagination}>
        <button className={styles.pageBtn}><ChevronLeft size={16} /></button>
        <button className={`${styles.pageBtn} ${styles.pageActive}`}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <span className={styles.pageDots}>...</span>
        <button className={styles.pageBtn}>12</button>
        <button className={styles.pageBtn}><ChevronRight size={16} /></button>
      </div>
    </div>
  );
}
