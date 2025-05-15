import "./styles.css";
import CardStack from "./CardStack";
import AnimatedBackground from "./AnimatedBackground";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: "Learn more about me",
};

export default function About() {
  return (
    <div className="about-container">
      <AnimatedBackground />
      <div className="flex flex-col items-center">
        <CardStack />
        <Link href="/" className="back-button">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}