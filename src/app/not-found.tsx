import Image from 'next/image';
import Link from 'next/link';
import './styles/not-found.css';

export const metadata = {
    title: "404",
    description: "Oops",
};

export default function NotFound() {
  return (
    <div className="error-container">
      <div className="question-marks">
        <span className="question">?</span>
        <span className="question">?</span>
        <span className="question">?</span>
        <span className="question">?</span>
        <span className="question">?</span>
        <span className="question">?</span>
        <span className="question">?</span>
        <span className="question">?</span>
        <div className="rotating-image">
          <Image
            src="/pfp.png"
            alt="Profile Picture"
            width={180}
            height={180}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145]"
            priority
          />
        </div>
      </div>
      <p className="error-message">Sorry, I'm lost</p>
      <Link 
        href="/" 
        className="text-white hover:text-gray-300 underline transition-colors"
      >
        Take me home
      </Link>
    </div>
  );
}