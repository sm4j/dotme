import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import MobileView from "./MobileView";
import "./styles.css";

export const metadata = {
  title: "dotme",
  description: "Still a work in progress",
};

export default function Home() {
  return (
    <>
      {/* Desktop View - Only show on large screens */}
      <div className="hidden xl:flex min-h-screen relative">
        {/* Left Section: Semicircle */}
        <div className="profile-section absolute top-0 left-0 w-1/2 h-full">
          {/* Background Circle */}
          <div className="background-circle absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

          {/* Profile Image */}
          <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145]"
              src="/pfp.png"
              alt="Profile Picture"
              width={180}
              height={180}
              priority
            />
          </div>

          {/* Social Media Toolbar */}
          <div className="absolute left-[52%] top-1/2 transform -translate-y-1/2">
            <div className="flex gap-4 bg-black text-white p-4 rounded-lg shadow-lg mb-4">
              <a
                href="https://github.com/sm4j"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/sm4j"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:sm4j@icloud.com"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <FaEnvelope size={24} />
                <span>Email</span>
              </a>
            </div>
            
            {/* Navigation Menu */}
            <div className="flex justify-center gap-4 text-white text-sm">
              <a href="/about" className="hover:text-gray-400">About Me</a>
              <span className="text-gray-500">•</span>
              <a href="/resume" className="hover:text-gray-400">Resume</a>
              <span className="text-gray-500">•</span>
              <a href="/games" className="hover:text-gray-400">Games</a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="ml-auto w-1/2 flex flex-col justify-center items-start p-8 sm:p-16">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8">Project Showcase</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Project 1 */}
            <a 
              href="https://github.com/sm4j/marveldreamteams/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 transition-all"
            >
              <Image
                src="/mdt.png"
                alt="Marvel Dream Teams"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/70 text-white transition-all duration-300 transform group-hover:translate-y-full">
                <h3 className="text-sm font-semibold leading-tight">Marvel Dream Teams</h3>
                <p className="text-xs italic text-gray-400 leading-tight">SwiftUI | ParseSwift | Back4app</p>
                <p className="text-xs text-gray-300 leading-tight line-clamp-2">A complete bottom-up iOS app using Marvel API.</p>
              </div>
            </a>

            {/* Project 2 */}
            <a 
              href="https://github.com/sm4j/cpu_scheduler/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 transition-all"
            >
              <Image
                src="/cpu.png"
                alt="CPU Scheduler"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/70 text-white transition-all duration-300 transform group-hover:translate-y-full">
                <h3 className="text-sm font-semibold leading-tight">CPU Scheduler</h3>
                <p className="text-xs italic text-gray-400 leading-tight">C++</p>
                <p className="text-xs text-gray-300 leading-tight line-clamp-2">Interactive driver to simulate main scheduling algorithms.</p>
              </div>
            </a>

            {/* Project 3 */}
            <a 
              href="https://github.com/c-hristofer/FlightPath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 transition-all"
            >
              <Image
                src="/fp.png"
                alt="Flight Path"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/70 text-white transition-all duration-300 transform group-hover:translate-y-full">
                <h3 className="text-sm font-semibold leading-tight">FlightPath</h3>
                <p className="text-xs italic text-gray-400 leading-tight">React & Node.js | Firebase</p>
                <p className="text-xs text-gray-300 leading-tight line-clamp-2">One of five creators of FAU's Career Networking Platform.</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <MobileView />
    </>
  );
}