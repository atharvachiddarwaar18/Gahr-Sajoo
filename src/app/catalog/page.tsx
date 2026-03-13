"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

const products = [
  { id: 1, title: "Jute Hand-Woven Rug", price: "₹4,500", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=600", tag: "Best Seller", vendor: "Varanasi Weavers" },
  { id: 2, title: "Antique Brass Lamp", price: "₹2,850", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?auto=format&fit=crop&q=80&w=600", vendor: "Moradabad Artisans" },
  { id: 3, title: "Zardosi Cushion", price: "₹1,200", image: "https://images.unsplash.com/photo-1629838048995-2ac1b24bf29c?auto=format&fit=crop&q=80&w=600", tag: "New", vendor: "Silk Route" },
  { id: 4, title: "Blue Pottery Vase", price: "₹950", image: "https://images.unsplash.com/photo-1596541334960-b96fd4543d23?auto=format&fit=crop&q=80&w=600", vendor: "Jaipur Ceramics" },
  { id: 5, title: "Block-Print Throw", price: "₹1,850", image: "https://images.unsplash.com/photo-1578500494191-c276be869b35?auto=format&fit=crop&q=80&w=600", vendor: "Kutch Co-op" },
  { id: 6, title: "Terracotta Wall Art", price: "₹750", image: "https://images.unsplash.com/photo-1620067644919-482f3efcfbc8?auto=format&fit=crop&q=80&w=600", vendor: "Kolkata Clay" },
  { id: 7, title: "Teak Wood Side Table", price: "₹8,900", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=600", tag: "Sale", vendor: "Saharanpur Wood" },
  { id: 8, title: "Cane Fruit Bowl", price: "₹1,150", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=600", vendor: "Goa Weaves" },
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
