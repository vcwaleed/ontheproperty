"use client";
import Image from "next/image";
import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
};

const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  const spring = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    spring.set(to);
  }, [to, spring]);

  const display = useTransform(spring, (value) => Math.floor(value));

  return <motion.span>{display}</motion.span>;
};

export default function HomeCard() {
  return (
    <section className="w-full py-8 md:py-0">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 md:gap-12 xl:gap-24">
        <div className="w-full max-w-[500px] lg:flex-1 relative aspect-video md:aspect-square">
          <Image
            src='/images/Homeimage.png'
            alt="Dream house illustration"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 50vw"
            priority
          />
        </div>
        <div className="lg:flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-btn_color mb-4 md:mb-6 font-mono">
            We Help You To Find Your Dream House
          </h2>
          <p className="text-base md:text-lg text-btn_color mb-8 md:mb-12 max-w-[600px] lg:max-w-none font-mono">
            From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality
          </p>

          <motion.div 
            className="w-full flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-3xl md:text-4xl font-bold text-btn_color font-mono">
                <Counter from={0} to={800} />K+
              </span>
              <span className="text-sm md:text-base font-mono">Houses Available</span>
            </motion.div>
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-3xl md:text-4xl font-bold text-btn_color font-mono">
                <Counter from={0} to={600} />K+
              </span>
              <span className="text-sm md:text-base font-mono">Houses Sold</span>
            </motion.div>
            <motion.div className="flex flex-col items-center p-4" variants={itemVariants}>
              <span className="text-3xl md:text-4xl font-bold text-btn_color font-mono">
                <Counter from={0} to={200} />K+
              </span>
              <span className="text-sm md:text-base font-mono">Trusted Agents</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
