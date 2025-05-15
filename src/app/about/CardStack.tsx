'use client';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Card {
  title: string;
  content: string;
  showProfilePic?: boolean; // Make this optional
}

const cards: Card[] = [
  {
    title: "About Me",
    content: "Hi, I'm Jordan. Tap this card (and the next few) to learn more about me.",
    showProfilePic: true  // Add this flag for the first card
  },
  {
    title: "The Gist",
    content: "If I can't convince someone to do something, it can't be done. My goal is to leverage my gift of gab in the tech space, combining my growing technical knowledge with the natural ability to communicate and lead.",
  },
  {
    title: "Education",
    content: "BSCS... WIP"
  }
];

export default function CardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const playClickSound = useCallback(() => {
    const audio = new Audio('/click.wav');
    audio.volume = 0.2; // Adjust volume as needed
    audio.play().catch(error => console.log('Audio playback failed:', error));
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    playClickSound();
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + cards.length) % cards.length);
  };

  return (
    <div className="card-stack">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="card"
          onClick={() => paginate(1)}
        >
          {cards[currentIndex].showProfilePic && (
            <div className="profile-picture-container">
              <Image
                src="/pfp.png"
                alt="Profile Picture"
                width={100}
                height={100}
                className="profile-picture"
              />
            </div>
          )}
          <h2>{cards[currentIndex].title}</h2>
          <p>{cards[currentIndex].content}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}