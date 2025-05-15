'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Raindrop {
  id: number;
  x: number;
  initialY: number;
  width: number;
  height: number;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);

  useEffect(() => {
    // Generate raindrops only on client side
    const drops: Raindrop[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      initialY: Math.random() * 100,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 1.5,
      width: Math.random() * 3 + 1,
      height: Math.random() * 30 + 15,
    }));
    setRaindrops(drops);
  }, []);

  return (
    <div className="animated-background">
      {raindrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="raindrop"
          style={{
            left: `${drop.x}%`,
            top: `${drop.initialY}%`,
            width: `${drop.width}px`,
            height: `${drop.height}px`,
          }}
          animate={{
            y: ['0%', '200%'],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}