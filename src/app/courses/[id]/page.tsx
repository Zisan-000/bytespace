import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaStar,
  FaSignal,
  FaUserFriends,
  FaShareAlt,
  FaPlay,
} from "react-icons/fa";
import { FiFolder, FiVideo, FiAward, FiTool } from "react-icons/fi";
import coursesData from "@/lib/data/data.json";
import CourseTabs from "@/components/CourseTabs";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailsPage({ params }: Props) {
  const { id } = await params;

  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <main className="w-full flex flex-col bg-white min-h-screen">
      <section className="w-full bg-[#003BE2] bg-grid-pattern pt-16 pb-125 px-6 relative z-0">
        <div className="mx-auto max-w-300">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              {course.title}: A Comprehensive Guide
            </h1>
            <button className="flex items-center gap-2 bg-[#CBFC01] text-black font-bold text-[14px] px-5 py-2.5 rounded-full hover:scale-105 transition-transform shrink-0">
              <FaShareAlt size={14} /> Share
            </button>
          </div>

          <p className="text-white font-medium text-lg mb-6">
            Unlock the Power of Digital Creation with Expert Guidance
          </p>

          <p className="text-white/80 text-[15px] mb-6">
            by{" "}
            <span className="text-[#CBFC01] font-medium">
              {course.author.replace("by ", "")}
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white text-black font-medium text-[13px] px-4 py-2 rounded-full">
              <FaSignal className="text-[#003BE2]" size={14} /> {course.level}
            </div>
            <div className="flex items-center gap-2 bg-white text-black font-medium text-[13px] px-4 py-2 rounded-full">
              <FaStar className="text-[#003BE2]" size={14} /> {course.rating}{" "}
              (172 reviews)
            </div>
            <div className="flex items-center gap-2 bg-white text-black font-medium text-[13px] px-4 py-2 rounded-full">
              <FaUserFriends className="text-[#003BE2]" size={16} /> 199
              Students
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-300 w-full pr-6 -mt-114 relative z-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-gray-900 mb-8">
              <Image
                src={course.image}
                alt={course.title}
                fill
                unoptimized
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-[#003BE2] rounded-full w-20 h-20 flex items-center justify-center pl-1 transition-transform hover:scale-110 shadow-lg">
                  <FaPlay size={28} />
                </button>
              </div>
            </div>

            <div className="mt-5">
              <CourseTabs course={course} />
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 sticky top-8 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                112 Lessons (24 hours)
              </h3>

              <ul className="flex flex-col gap-5 mb-4">
                <li className="flex justify-between items-start gap-4">
                  <span className="text-gray-400 font-medium text-[14px]">
                    01
                  </span>
                  <span className="text-[14px] font-medium text-gray-900 grow">
                    Introduction to Digital Assets
                  </span>
                  <span className="text-[#003BE2] text-[13px] font-medium">
                    12 mins
                  </span>
                </li>
                <li className="flex justify-between items-start gap-4">
                  <span className="text-gray-400 font-medium text-[14px]">
                    02
                  </span>
                  <span className="text-[14px] font-medium text-gray-900 grow">
                    Design Principles for Impacts
                  </span>
                  <span className="text-[#003BE2] text-[13px] font-medium">
                    21 mins
                  </span>
                </li>
                <li className="flex justify-between items-start gap-4">
                  <span className="text-gray-400 font-medium text-[14px]">
                    03
                  </span>
                  <span className="text-[14px] font-medium text-gray-900 grow">
                    Advanced Techniques in Digital Creation
                  </span>
                  <span className="text-[#003BE2] text-[13px] font-medium">
                    16 mins
                  </span>
                </li>
              </ul>

              <p className="text-[13px] text-gray-500 mb-8 border-b border-gray-100 pb-6">
                99 more videos
              </p>

              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>

              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-[#003BE2] leading-none">
                  ${course.price}
                </span>
                <span className="text-[13px] text-gray-500 font-medium mb-1">
                  /lifetime
                </span>
              </div>

              <button className="w-full bg-[#CBFC01] text-black font-bold text-[15px] py-4 rounded-full transition-transform hover:scale-105 active:scale-95 mb-8">
                Enroll Now
              </button>

              <h4 className="font-bold text-gray-900 mb-5 text-[15px]">
                This course include
              </h4>
              <ul className="flex flex-col gap-4 mb-8 pb-8 border-b border-gray-100">
                <li className="flex items-center gap-3 text-[14px] text-gray-600">
                  <FiFolder className="text-[#003BE2]" size={18} /> Learning
                  Resources
                </li>
                <li className="flex items-center gap-3 text-[14px] text-gray-600">
                  <FiVideo className="text-[#003BE2]" size={18} /> Quality
                  Lesson Videos
                </li>
                <li className="flex items-center gap-3 text-[14px] text-gray-600">
                  <FiAward className="text-[#003BE2]" size={18} /> Certificate
                  of Completion
                </li>
                <li className="flex items-center gap-3 text-[14px] text-gray-600">
                  <FiTool className="text-[#003BE2]" size={18} /> Private
                  Consultation
                </li>
              </ul>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative">
                  <Image
                    src="/home-profile.png"
                    alt="Creator"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[15px]">
                    {course.author.replace("by ", "")}
                  </h4>
                  <p className="text-[13px] text-gray-500">
                    Professional Creator
                  </p>
                </div>
              </div>

              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>
              <Link
                href={`/creators/${course.author.replace("by ", "").trim().replace(/\s+/g, "-").toLowerCase()}`}
              >
                <button className="w-max px-6 py-2.5 border border-gray-200 rounded-full text-[13px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                  See Full Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
