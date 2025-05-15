import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function MobileView() {
  return (
    <div className="xl:hidden min-h-screen">
      {/* Portrait Mobile View */}
      <div className="flex landscape:hidden flex-col min-h-screen"
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
        <div className="px-4 py-6 flex-1"
        style={{ background: "#000000" }}>
          <h1 className="text-xl font-bold mb-4 text-center">Project Showcase</h1>
          <div className="flex flex-col gap-4 max-w-[50%] mx-auto">
            <ProjectCard
              href="https://github.com/sm4j/marveldreamteams/"
              image="/mdt.png"
              alt="Marvel Dream Teams"
              title="Marvel Dream Teams"
              tech="SwiftUI | ParseSwift | Back4app"
              description="A complete bottom-up iOS app using Marvel API."
            />
            <ProjectCard
              href="https://github.com/sm4j/cpu_scheduler/"
              image="/cpu.png"
              alt="CPU Scheduler"
              title="CPU Scheduler"
              tech="C++"
              description="Interactive driver to simulate main scheduling algorithms."
            />
            <ProjectCard
              href="https://github.com/c-hristofer/FlightPath"
              image="/fp.png"
              alt="FlightPath"
              title="FlightPath"
              tech="React & Node.js | Firebase"
              description="One of five creators of FAU's Career Networking Platform."
            />
          </div>
        </div>
      </div>

      {/* Landscape Mobile View */}
      <div className="hidden landscape:flex min-h-screen"
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
        <div className="w-1/2 p-4 overflow-y-auto flex flex-col justify-center"
        style={{ background: "#000000" }}>
          <h1 className="text-2xl font-bold mb-4 text-center">Project Showcase</h1>
          <div className="grid grid-cols-3 gap-3 w-[100%] mx-auto">
            <ProjectCard
              href="https://github.com/sm4j/marveldreamteams/"
              image="/mdt.png"
              alt="Marvel Dream Teams"
              title="Marvel Dream Teams"
              tech="SwiftUI | ParseSwift | Back4app"
              description="A complete bottom-up iOS app using Marvel API."
            />
            <ProjectCard
              href="https://github.com/sm4j/spotlightos"
              image="/cpu.png"
              alt="CPU Scheduler"
              title="CPU Scheduler"
              tech="C++"
              description="Interactive driver to simulate main scheduling algorithms."
            />
            <ProjectCard
              href="https://github.com/c-hristofer/FlightPath"
              image="/fp.png"
              alt="FlightPath"
              title="FlightPath"
              tech="React & Node.js | Firebase"
              description="One of five creators of FAU's Career Networking Platform."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Add interface for ProjectCard props
interface ProjectCardProps {
  href: string;
  image: string;
  alt: string;
  title: string;
  tech: string;
  description: string;
}

// Helper component for project cards with typed props
const ProjectCard = ({ href, image, alt, title, tech, description }: ProjectCardProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 transition-all"
  >
    <Image
      src={image}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-200"
    />
    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/70 text-white transition-all duration-300 transform group-hover:translate-y-full">
      <h3 className="text-sm font-semibold leading-tight">{title}</h3>
      <p className="text-xs italic text-gray-400 leading-tight">{tech}</p>
      <p className="text-xs text-gray-300 leading-tight line-clamp-2">{description}</p>
    </div>
  </a>
);