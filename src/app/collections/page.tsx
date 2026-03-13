"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const collections = [
  {
    id: 1,
    title: "The Regal Rajasthan",
    description: "Inspired by the palaces of Jaipur, featuring intricate mirror work and vibrant textiles.",
    image: "/Ruby Crystal Fringe Pendant Lamp.png",
    itemCount: 24,
  },
  {
    id: 2,
    title: "Earthy Terracottas",
    description: "Raw, unglazed clay pieces that bring the warmth of rural Indian soil to your urban sanctuary.",
    image: "/Stone Mosaic Designer Vase.png",
    itemCount: 18,
  },
  {
    id: 3,
    title: "Sacred Woods",
    description: "Hand-carved teak and rosewood furniture pieces echoing ancient temple architecture.",
    image: "/Vintage Gear Wall Clock.png",
    itemCount: 12,
  },
  {
    id: 4,
    title: "Monsoon Weaves",
    description: "Lightweight cottons and linens dyed in the indigo and earthy greens of the Indian monsoon.",
    image: "/Metropolitan Street Canvas Painting.png",
    itemCount: 36,
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Collections() {
  return (
    <div className={styles.collectionsWrapper}>
      <header className={styles.header}>
        <div className="container">
          <motion.h1 
            className="serif-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Curated Collections
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our thematic selections, each telling a unique story of Indian craftsmanship.
          </motion.p>
        </div>
      </header>

      <section className={`section-padding ${styles.gridSection}`}>
        <div className="container">
          <motion.div 
            className={styles.collectionsGrid}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {collections.map((collection, index) => (
              <motion.div 
                key={collection.id} 
                className={`${styles.collectionCard} ${index % 2 === 0 ? styles.cardLarge : styles.cardSmall}`}
                variants={fadeUp}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={collection.image} 
                    alt={collection.title} 
                    fill 
                    style={{ objectFit: "cover" }} 
                  />
                  <div className={styles.overlay}></div>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.cardInfo}>
                    <p className={styles.itemCount}>{collection.itemCount} Items</p>
                    <h2 className={`${styles.cardTitle} serif-text`}>{collection.title}</h2>
                    <p className={styles.cardDesc}>{collection.description}</p>
                  </div>
                  
                  <Link href={`/catalog?collection=${collection.id}`} className={styles.exploreLink}>
                    Explore Collection <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
