import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MobileView() {
  // Move state initialization to useEffect
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side only code
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = [
    {
      href: "https://github.com/sm4j/marveldreamteams/",
      image: "/mdt.png",
      alt: "Marvel Dream Teams",
      title: "Marvel Dream Teams",
      tech: "SwiftUI | ParseSwift | Back4app",
      description: "A complete bottom-up iOS app using Marvel API."
    },
    {
      href: "https://github.com/sm4j/cpu_scheduler/",
      image: "/cpu.png",
      alt: "CPU Scheduler",
      title: "CPU Scheduler",
      tech: "C++",
      description: "Interactive driver to simulate main scheduling algorithms."
    },
    {
      href: "https://github.com/c-hristofer/FlightPath",
      image: "/fp.png",
      alt: "FlightPath",
      title: "FlightPath",
      tech: "React & Node.js | Firebase",
      description: "One of five creators of FAU's Career Networking Platform."
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500, // Reduced from 1000 to 500
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500, // Reduced from 1000 to 500
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
  };

  // Update the main container styles
  return (
    <div className="xl:hidden min-h-screen min-w-screen bg-black">
      {/* Only render content when mounted */}
      {isMounted && (
        <>
          {/* Portrait Mobile View */}
          <div className="flex landscape:hidden flex-col min-h-screen w-full"
          style={{ background: "#000000" }}>
            <div className="mobile-semicircle w-full h-[40vh] relative overflow-hidden">
              {/* Background Circle */}
              <div className="mobile-background-circle absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

              {/* Profile Image */}
              <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <Image
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145]"
                    src="/pfp.png"
                    alt="Profile Picture"
                    width={120}
                    height={120}
                    priority
                  />
                </div>
              </div>

              {/* Social Media Toolbar */}
              <div className="absolute left-1/2 top-[63%] transform -translate-x-1/2 flex gap-4 bg-black text-white p-3 rounded-lg shadow-lg">
                <a href="https://github.com/sm4j" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/sm4j" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:sm4j@icloud.com" className="hover:text-gray-400">
                  <FaEnvelope size={20} />
                </a>
              </div>

              {/* Navigation Menu */}
              <div className="absolute left-1/2 top-[78%] transform -translate-x-1/2 flex gap-3 text-white text-sm">
                <a href="/about" className="hover:text-gray-400">About Me</a>
                <span className="text-gray-500">•</span>
                <a href="/resume" className="hover:text-gray-400">Resume</a>
                <span className="text-gray-500">•</span>
                <a href="/games" className="hover:text-gray-400">Games</a>
              </div>
            </div>

            {/* Project Showcase - Portrait */}
            <div className="px-4 py-0 flex-1 flex flex-col overflow-hidden"
            style={{ background: "#000000" }}>
              <h1 className="text-xl font-bold mb-8 text-center text-white">Project Showcase</h1>
              
              {/* Project Card Container */}
              <div className="relative flex-1 flex flex-col items-center justify-center -mt-30">
                <div className="relative w-full">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 }, // Increased stiffness, reduced damping
                        opacity: { duration: 0.2 }  // Reduced opacity duration
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
                      className="absolute inset-x-4 touch-pan-y"
                    >
                      <ProjectCard
                        href={projects[currentIndex].href}
                        image={projects[currentIndex].image}
                        alt={projects[currentIndex].alt}
                        title={projects[currentIndex].title}
                        tech={projects[currentIndex].tech}
                        description={projects[currentIndex].description}
                        onNavigate={paginate}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Pagination Dots - Completely separated from the motion components */}
                <div className="relative w-full mt-[300px]">
                  <div className="flex justify-center gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const newDirection = index > currentIndex ? 1 : -1;
                          setDirection(newDirection);
                          setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-white' : 'bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Landscape Mobile View */}
          <div className="hidden landscape:flex min-h-screen w-full"
          style={{ background: "#000000" }}>
            {/* Left Section */}
            <div className="w-1/2 mobile-semicircle relative overflow-hidden">
              {/* Background Circle */}
              <div className="mobile-background-circle absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden w-[500px] h-[500px]">
                <Image
                  src="/pathway.gif"
                  alt="Pathway Background"
                  fill
                  className="object-cover opacity-50 mix-blend-overlay"
                  priority
                />
              </div>

              {/* Profile Image */}
              <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Image
                  className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145]"
                  src="/pfp.png"
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  priority
                />
              </div>

              {/* Social Media + Nav for landscape */}
              <div className="absolute left-[52%] top-1/2 transform -translate-y-1/2">
                <div className="flex justify-center items-center gap-4 bg-black text-white p-2 rounded-lg shadow-lg mb-2">
                  <a href="https://github.com/sm4j" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-gray-400">
                    <FaGithub size={27} />
                  </a>
                  <a href="https://linkedin.com/in/sm4j" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-gray-400">
                    <FaLinkedin size={27} />
                  </a>
                  <a href="mailto:sm4j@icloud.com" className="flex items-center justify-center gap-2 hover:text-gray-400">
                    <FaEnvelope size={27} />
                  </a>
                </div>
                <div className="flex items-center whitespace-nowrap text-white text-xs">
                  <a href="/about" className="hover:text-gray-400">About Me</a>
                  <span className="text-gray-500 mx-1">•</span>
                  <a href="/resume" className="hover:text-gray-400">Resume</a>
                  <span className="text-gray-500 mx-1">•</span>
                  <a href="/games" className="hover:text-gray-400">Games</a>
                </div>
              </div>
            </div>

            {/* Right Section - Landscape */}
            <div className="w-1/2 p-4 overflow-hidden flex flex-col justify-start h-screen"
            style={{ background: "#000000" }}>
              <div className="flex flex-col h-full pt-8">
                <h1 className="text-2xl font-bold mb-4 text-center text-white">Project Showcase</h1>
                
                {/* Project Card Container - Landscape */}
                <div className="relative flex flex-col items-center flex-1">
                  <div className="relative w-full h-[160px]"> {/* Further reduced height */}
                    <AnimatePresence initial={false} custom={direction} mode="wait">
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
                        className="absolute inset-x-4 touch-pan-y"
                      >
                        <ProjectCard
                          href={projects[currentIndex].href}
                          image={projects[currentIndex].image}
                          alt={projects[currentIndex].alt}
                          title={projects[currentIndex].title}
                          tech={projects[currentIndex].tech}
                          description={projects[currentIndex].description}
                          onNavigate={paginate}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Pagination Dots - Landscape */}
                  <div className="absolute bottom-8 w-full"> {/* Position dots absolutely */}
                    <div className="flex justify-center gap-2">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            const newDirection = index > currentIndex ? 1 : -1;
                            setDirection(newDirection);
                            setCurrentIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex ? 'bg-white' : 'bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Update the interface
interface ProjectCardProps {
  href: string;
  image: string;
  alt: string;
  title: string;
  tech: string;
  description: string;
  onNavigate?: (direction: number) => void;  // Made optional with ?
}

// Update the ProjectCard component to handle optional onNavigate
const ProjectCard = ({ href, image, alt, title, tech, description, onNavigate }: ProjectCardProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full cursor-pointer max-w-[400px] mx-auto" // Added max width
  >
    <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden"> {/* Changed aspect ratio */}
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
      />
      
      {/* Navigation Arrows */}
      {onNavigate && (
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button 
            onClick={(e) => {
              e.preventDefault(); // Prevent link navigation
              e.stopPropagation();
              onNavigate(-1);
            }}
            className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/70 z-10"
          >
            <FaChevronLeft className="text-white/70" />
          </button>
          
          <button 
            onClick={(e) => {
              e.preventDefault(); // Prevent link navigation
              e.stopPropagation();
              onNavigate(1);
            }}
            className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/70 z-10"
          >
            <FaChevronRight className="text-white/70" />
          </button>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-sm text-gray-300 mb-2">{tech}</p>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  </a>
);