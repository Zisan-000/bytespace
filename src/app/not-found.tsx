import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className=" bg-[#003BE2] bg-grid-pattern flex flex-col items-center justify-center  relative overflow-hidden">
      <div className="flex flex-col items-center min-h-screen justify-center relative z-10 text-center mt-[-10vh]">
        <h1
          className="text-[180px] sm:text-[250px] md:text-[480px] font-bold tracking-wide leading-none bg-clip-text text-transparent select-none"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          404
        </h1>

        {/* Overlapping White Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight -mt-12.5 sm:-mt-20 md:-mt-27.5 relative z-20">
          The page you are looking <br className="hidden sm:block" /> for
          doesn&apos;t exist
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 mt-6 text-[15px] sm:text-base font-light">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="mt-10 bg-[#CBFC01] text-black font-bold text-[15px] px-8 py-3.5 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg inline-block"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
