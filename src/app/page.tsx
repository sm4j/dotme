import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import social media icons

export const metadata = {
  title: "dotme",
  description: "Still a work in progress", 
};

export default function Home() {
  return (
    <div className="flex min-h-screen relative">
      {/* Left Section: Semicircle */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{
          clipPath: "circle(100% at 0% 50%)", // Creates a semicircle
          background: "linear-gradient(to bottom, #6e1602, black)", // Gradient from #6e1602 to black
        }}
      >
        {/* Background Circle */}
        <div
          className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            backgroundImage: "url('/pathway.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "300px", // Adjust size of the circle
            height: "300px", // Adjust size of the circle
          }}
        ></div>

        {/* Profile Image */}
        <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145]"
            src="/pfp.png"
            alt="Profile Picture"
            width={180} // Adjust size of the profile image
            height={180}
            priority
          />
        </div>

        {/* Social Media Toolbar */}
        <div className="absolute left-[52%] top-1/2 transform -translate-y-1/2 flex gap-4 bg-black text-white p-4 rounded-lg shadow-lg">
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
      </div>

      {/* Right Section */}
      <div className="ml-auto w-1/2 flex flex-col justify-center items-start p-8 sm:p-16">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Lorem Ipsum
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}