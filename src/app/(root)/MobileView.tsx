import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function MobileView() {
  return (
    <div className="flex xl:hidden flex-col min-h-screen">
      {/* Portrait Mobile View */}
      <div className="flex landscape:hidden flex-col min-h-screen">
        <div className="mobile-semicircle w-full h-[40vh] relative overflow-hidden">
          {/* Background Circle */}
          <div className="mobile-background-circle absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

          {/* Profile Image */}
          <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145]"
              src="/pfp.png"
              alt="Profile Picture"
              width={150}
              height={150}
              priority
            />
          </div>

          {/* Social Media Toolbar */}
          <div className="absolute left-1/2 top-[75%] transform -translate-x-1/2 flex gap-4 bg-black text-white p-3 rounded-lg shadow-lg">
            <a
              href="https://github.com/sm4j"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sm4j"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:sm4j@icloud.com"
              className="hover:text-gray-400"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center h-[25vh] px-4">
          <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Landscape Mobile View */}
      <div className="hidden landscape:flex portrait:hidden min-h-screen relative">
        <div className="profile-section absolute top-0 left-0 w-1/2 h-full">
          {/* Background Circle */}
          <div className="background-circle absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

          {/* Profile Image */}
          <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145]"
              src="/pfp.png"
              alt="Profile Picture"
              width={150}
              height={150}
              priority
            />
          </div>

          {/* Compact Social Media Toolbar */}
          <div className="absolute left-[52%] landscape:left-[65%] top-1/2 transform -translate-y-1/2 flex gap-4 bg-black text-white p-3 rounded-lg shadow-lg">
            <a
              href="https://github.com/sm4j"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sm4j"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:sm4j@icloud.com"
              className="hover:text-gray-400"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="ml-auto w-1/2 flex flex-col justify-center items-start p-4">
          <h1 className="text-xl font-bold">Lorem Ipsum</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}