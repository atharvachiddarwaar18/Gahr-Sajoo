"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// Ancient Indian Home Decor placeholders
const ancientImages = [
  { img: "https://images.unsplash.com/photo-1510260405230-0ebaaed422e6?auto=format&fit=crop&q=80&w=800", alt: "Ancient Indian Carved Door" },
  { img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800", alt: "Vintage Indian Architecture" },
  { img: "https://images.unsplash.com/photo-1605814578144-d8b368f54b61?auto=format&fit=crop&q=80&w=800", alt: "Palatial Decor Elements" },
];

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful Indian Heritage Architecture" 
            fill 
            style={{ objectFit: "cover" }} 
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h4 className={styles.subtitle} variants={fadeUp}>
              OUR STORY
            </motion.h4>
            <motion.h1 
              className={`${styles.title} serif-text`}
              variants={fadeUp}
            >
              Building Homes<br/>With Character
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className={`section-padding ${styles.storySection}`}>
        <div className={`container ${styles.storyGrid}`}>
          <motion.div 
            className={styles.storyTextCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 className={`${styles.sectionTitle} serif-text`} variants={fadeUp}>
              Every home has a story, and every space deserves to feel special.
            </motion.h2>
            
            <motion.div className={styles.paragraphs} variants={fadeUp}>
              <p>
                <strong>Ghar Sajaao</strong> was born from a simple passion — the joy of turning a house into a place that truly feels like home. We always believed that even the smallest décor element can change the mood of a room and bring warmth, comfort, and personality to a space.
              </p>
              <p>
                While exploring different décor options, we realized that finding pieces that are beautiful, thoughtfully designed, and reasonably priced wasn’t always easy. That’s when the idea of Ghar Sajaao began to take shape.
              </p>
              <p>
                What started as a vision slowly turned into countless hours of searching, selecting, and carefully curating products that could genuinely enhance a home. Every item you see here is chosen with attention and care, keeping in mind how it can bring life and character to your living space.
              </p>
              <p>
                Behind Ghar Sajaao is dedication, hard work, and a deep love for creating beautiful homes. Our goal is simple — to help you decorate your space in a way that reflects your style and makes every corner feel welcoming.
              </p>
            </motion.div>
            
            <motion.div className={styles.quoteBlock} variants={fadeUp}>
              <h3 className="serif-text">
                "Because a well-decorated home isn’t just about aesthetics — it’s about creating a space where memories are made."
              </h3>
            </motion.div>
            
            <motion.div variants={fadeUp} style={{ marginTop: "40px" }}>
              <Link href="/catalog" className="btn-primary">
                Shop Our Curations <ArrowRight size={18} style={{ marginLeft: "8px" }} />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.imageGridCol}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className={styles.collageWrapper}>
              {ancientImages.map((img, index) => (
                <div key={index} className={`${styles.collageImg} ${styles[`img${index + 1}`]}`}>
                  <Image src={img.img} alt={img.alt} fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Banner */}
      <section className={styles.valuesBanner}>
        <div className={`container ${styles.valuesContainer}`}>
          {[
            { title: "Thoughtfully Designed", desc: "Every piece tells a story of careful artistry." },
            { title: "Reasonably Priced", desc: "Making premium home decor accessible to all." },
            { title: "Welcoming Spaces", desc: "Décor that adds warmth and character." }
          ].map((value, i) => (
            <div key={i} className={styles.valueItem}>
              <div className={styles.valueNumber}>0{i + 1}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDesc}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
