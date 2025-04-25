import Image from "next/image";

export const metadata = {
  title: "WIP", // Change this to your desired tab title
  description: "Working on it.",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <Image
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145]"
          src="/pfp.png"
          alt="Profile Picture"
          width={180}
          height={180}
          priority
          style={{ color: "transparent" }} // Explicitly set style to avoid external interference
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Work in Progress
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400">
          This page is under construction. Check back soon!
        </p>
      </main>
    </div>
  );
}
