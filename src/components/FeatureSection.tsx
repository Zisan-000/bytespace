import Image from "next/image";
import { FaCheckCircle, FaStar } from "react-icons/fa";

export default function FeatureSection() {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        <div className="absolute top-0 left-0 w-90 h-90 bg-[#CBFC01]/30 rounded-full blur-[180px] " />
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#003BE2]/30 rounded-full blur-[180px] " />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CBFC01]/30 rounded-full blur-[140px] " />
        <div className="absolute bottom-0 right-10 w-90 h-90 bg-[#003BE2]/30 rounded-full blur-[140px] " />

        <div className="mx-auto max-w-360 px-6 lg:px-12 flex flex-col gap-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="flex flex-col max-w-lg">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-10">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>

              {/* Stats Row */}
              <div className="flex gap-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#003BE2] mb-1">
                    12K
                  </span>
                  <span className="text-[13px] text-gray-500 font-medium">
                    Students
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#003BE2] mb-1">
                    70+
                  </span>
                  <span className="text-[13px] text-gray-500 font-medium">
                    Courses
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#003BE2] mb-1">
                    16
                  </span>
                  <span className="text-[13px] text-gray-500 font-medium">
                    Creators
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Composite */}
            <div className="relative w-full max-w-125 mx-auto aspect-square flex justify-center items-end mt-10 lg:mt-0">
              {/* Green Ring Frame */}
              <div className="absolute inset-0 top-10 left-70 z-40 flex items-center justify-center">
                <Image
                  src="/Frame.png"
                  alt="Green ring"
                  width={120}
                  height={100}
                  className="object-contain scale-110"
                />
              </div>

              {/* Boy Profile */}
              <Image
                src="/home-profile.png"
                alt="Student"
                width={600}
                height={600}
                className="relative z-10 object-contain object-bottom h-[90%]"
              />

              <div className="absolute top-[25%] left-[-2%] z-0 bg-white rounded-2xl shadow-xl p-3 flex flex-col gap-2  ">
                <div className="w-full bg-gray-200 rounded-lg overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80"
                    alt="Course"
                    height={220}
                    width={240}
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[13px] text-black leading-tight">
                    Learn Figma from Basic
                  </h4>
                  <p className="text-[9px] text-gray-400">
                    by purepearl studio
                  </p>
                </div>
                <div className="font-bold text-[#003BE2] text-[15px]">
                  $25
                  <span className="text-[10px] text-gray-400">/lifetime</span>
                </div>
              </div>

              {/* Floating Card: Learning Progress (Right) */}
              <div className="absolute top-[55%] right-[16%] z-20 w-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col">
                <span className="font-medium text-[10px] text-gray-500 mb-1">
                  Learning Progress
                </span>
                <span className="font-extrabold text-2xl text-black mb-2">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Composite */}
            <div className="relative w-full max-w-125 mx-auto aspect-square flex justify-center items-end order-2 lg:order-1 mt-10 lg:mt-0">
              {/* Green Ring Frame */}
              <div className="absolute inset-0 left-45 bottom-20 scale-x-[-1] z-20 flex items-center justify-center">
                <Image
                  src="/Frame.png"
                  alt="Green ring"
                  width={170}
                  height={170}
                  className="object-contain scale-110"
                />
              </div>

              {/* Girl Profile */}
              <Image
                src="/girls.png"
                alt="Creator"
                width={400}
                height={500}
                className="relative z-10 object-contain object-bottom h-[90%]"
              />

              {/* Floating Card: Total Revenue (Top Left) */}
              <div className="absolute top-[20%] left-[-5%] z-0 w-70 bg-[#003BE2] rounded-xl shadow-xl p-3 text-white">
                <div className="text-[10px] opacity-80 leading-tight mb-1">
                  Total Revenue
                  <br />
                  July 1-28
                </div>
                <div className="font-bold text-xl mb-2">$120.29</div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#CBFC01]"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>

              {/* Floating Card: YTD Revenue (Mid Left) */}
              <div className="absolute top-[45%] left-[-5%] z-0 w-35 bg-[#003BE2] rounded-xl shadow-xl p-3 text-white">
                <div className="text-[10px] opacity-80 leading-tight mb-1">
                  Year to Date
                  <br />
                  2023
                </div>
                <div className="font-bold text-lg mb-2">$1,200.38</div>
                <div className="inline-block bg-[#CBFC01] text-black text-[9px] font-bold px-2 py-0.5 rounded-full">
                  +12%
                </div>
              </div>

              {/* Floating Card: Happy Students (Bottom Right) */}
              <div className="absolute bottom-[22%] right-[7%] z-20 w-55 bg-white rounded-2xl shadow-xl p-3 flex flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-bold text-[12px] text-black m-0">
                    Happy Students
                  </h3>
                  <div className="flex items-center gap-1 font-bold text-[10px] text-black">
                    4.5 <FaStar className="text-yellow-400 h-2.5 w-2.5" />{" "}
                    <span className="text-gray-400 font-normal">(240)</span>
                  </div>
                </div>
                <div className="flex items-center justify-start">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 -ml-2.5 first:ml-0 rounded-full bg-gray-200 border-2 border-white shadow-sm relative overflow-hidden"
                    >
                      <Image
                        src={`/avatar-${i}.png`}
                        alt="student"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-7 h-7 -ml-2.5 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center font-bold text-black text-[9px] z-10 shadow-sm">
                    2K+
                  </div>
                </div>
              </div>

              {/* Abstract ZigZag Decoration */}
              <svg
                className="absolute top-[40%] right-[10%] z-20 w-12 text-[#CBFC01]"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15L15 5L25 15L35 5L45 15"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 30L15 20L25 30L35 20L45 30"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Right Text */}
            <div className="flex flex-col max-w-lg lg:pl-10 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Create & Manage Courses Easily.
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>

              {/* Checklist */}
              <ul className="flex flex-col gap-4">
                {[
                  "Share Your Expertise",
                  "Monetize Your Passion",
                  "Flexibility and Autonomy",
                  "Build a Community",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[15px] font-medium text-gray-900"
                  >
                    <FaCheckCircle className="text-[#003BE2] bg-white rounded-full h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
