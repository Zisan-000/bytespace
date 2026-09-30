import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative w-full bg-[#003BE2] bg-grid-pattern h-250 py-24 lg:py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/3d-ornament.png"
          alt="3D Ornaments"
          fill
          className=" w-full h-full opacity-90"
        />
      </div>

      {/* Content Layer */}
      <div className="mx-auto max-w-4xl px-6 relative z-10 flex flex-col items-center text-center">
        <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Unlock Your Potential as a <br className="hidden md:block" />
          Creator with ByteSpace
        </h2>

        <p className="mb-10 max-w-3xl text-[15px] md:text-base leading-relaxed text-white/90 font-light">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button className="rounded-full bg-[#CBFC01] px-8 py-4 text-[15px] font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-xl">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
