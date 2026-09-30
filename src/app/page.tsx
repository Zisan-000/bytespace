import Image from "next/image";
import { FaSearch, FaStar } from "react-icons/fa";
import ornament from "../../public/3d-ornament.png";
import DiscoverCourses from "@/components/DiscoverCourses";
import LearningPaths from "@/components/LearningPaths";
import FeatureSection from "@/components/FeatureSection";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function HomeHero() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-white">
      <div className="bg-[#003BE2] bg-grid-pattern relative overflow-hidden w-full pt-20">
        <div className="animate-float absolute inset-0 z-0 pointer-events-none">
          <Image
            src={ornament}
            alt="3D Ornament"
            fill
            className="opacity-90 w-full h-full"
          />
        </div>
        <section className="mx-auto max-w-360 px-6 py-20 lg:px-12 relative z-10 flex flex-col items-center">
          <div className="animate-fade-in-up opacity-0 text-center flex flex-col items-center z-20">
            <h1 className=" text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight max-w-300">
              Get Access to Hundreds <br /> Courses Available
            </h1>
            <p className="text-white/80 mt-6 text-lg md:text-xl max-w-300">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>

            <div className="mt-10 w-full max-w-150 flex items-center gap-2 right-14 bg-white rounded-full shadow-2xl relative">
              <div className="pl-4 text-gray-400">
                <FaSearch size={18} />
              </div>
              <input
                type="search"
                placeholder="Course, topic, creator"
                className="grow bg-transparent px-2 py-3 text-[15px] text-black outline-none placeholder:text-gray-400"
              />
              <button className="bg-[#CBFC01] text-black font-bold text-[15px] px-8 h-14 rounded-full transition-transform hover:scale-105 relative left-32 active:scale-95">
                Search
              </button>
            </div>
          </div>

          <div className="animate-fade-in-up opacity-0 relative mt-16 w-full max-w-200 flex justify-center z-20 min-h-112.5">
            <div
              className="absolute bottom-0 w-162.5 h-162.5 bg-[#CBFC01] rounded-full z-10 transform translate-y-[10%]
          translate-x-[-5%] top-10"
            />

            <Image
              src="/home-profile.png"
              alt="Hero profile"
              width={2000}
              height={2000}
              className="relative z-20  max-w-150 object-contain object-bottom"
            />

            <div className="absolute top-[35%] left-[-5%] lg:left-[5%] z-30 w-auto bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-1">
              <h3 className="font-extrabold text-[15px] text-black m-0">
                UI/UX Design
              </h3>
              <div className="flex gap-3 text-gray-500 text-[11px] font-medium">
                <span>200 Courses</span>
                <span>•</span>
                <span>1000+ Students</span>
              </div>
            </div>

            <div className="absolute bottom-[15%] left-[-15%] lg:left-[-5%] z-30 w-auto bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-3">
              <div className="flex flex-row justify-between items-center w-full gap-6">
                <h3 className="font-bold text-[14px] text-black m-0">
                  Happy Students
                </h3>
                <div className="flex items-center gap-1 font-bold text-[13px] text-black">
                  4.5 <FaStar className="text-yellow-400 h-3 w-3" /> (240)
                </div>
              </div>

              <div className="flex items-center justify-start">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white -ml-2 first:ml-0 shadow-sm relative overflow-hidden"
                  >
                    <Image
                      src={`/avatar-${i}.png`}
                      alt="student"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 -ml-3 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center font-bold text-black text-[10px] z-10 shadow-sm">
                  2K+
                </div>
              </div>
            </div>

            <div className="absolute top-[40%] right-[-10%] lg:right-[5%] z-30 w-45 bg-white rounded-2xl shadow-xl p-4 flex flex-col">
              <span className="font-medium text-[11px] text-gray-500 mb-1">
                Learning Progress
              </span>
              <span className="font-extrabold text-3xl text-black leading-none mb-3">
                55%
              </span>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#CBFC01] rounded-full"
                  style={{ width: "55%" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full bg-[#F5F5F6] py-12 bottom-20 border-b border-gray-100 z-30 relative">
        <div className="mx-auto flex w-full max-w-360 items-center justify-center px-6 lg:px-12">
          <Image
            src="/Logo_Partner.png"
            alt="Our Partners"
            width={1200}
            height={100}
            className="h-auto w-full max-w-5xl object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </div>
      </section>

      <section className="w-full  bottom-35  z-30 ">
        <DiscoverCourses />
      </section>

      <section className="w-full  bottom-70  z-30 ">
        <LearningPaths />
      </section>

      <section className="w-full  bottom-100  z-30 ">
        <FeatureSection />
      </section>
      <section className="animate-float w-full h-full bottom-130  z-30 ">
        <CallToAction />
      </section>
      <section className="w-full h-full bottom-150  z-30 ">
        <Testimonials />
      </section>
    </main>
  );
}
