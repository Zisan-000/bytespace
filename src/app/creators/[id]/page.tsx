import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaStar, FaSignal } from "react-icons/fa";
import {
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineChatAlt2,
  HiOutlineFilter,
} from "react-icons/hi";
import { MdOutlineCategory, MdSort } from "react-icons/md";
import coursesData from "@/lib/data/data.json";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CreatorProfilePage({ params }: Props) {
  const { id } = await params;

  const searchName = id.replace(/-/g, " ").toLowerCase();

  const creatorCourses = coursesData.filter((course) =>
    course.author.toLowerCase().includes(searchName),
  );

  if (creatorCourses.length === 0) {
    notFound();
  }

  const displayName = searchName.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="w-full flex flex-col bg-white min-h-screen">
      <section className="w-full bg-[#003BE2] bg-grid-pattern pt-20 pb-16 px-6">
        <div className="mx-auto max-w-360 lg:px-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 relative shrink-0 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                alt={displayName}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {displayName}
                </h1>
                <span className="bg-[#CBFC01] text-black text-[12px] font-bold px-3 py-1 rounded-full">
                  Creator
                </span>
              </div>
              <p className="text-white/80 text-[15px]">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          <div className="max-w-4xl mb-12">
            <p className="text-white/90 text-[15px] leading-relaxed mb-4 font-light">
              Welcome to the creative world of {displayName}. Here, you&apos;ll
              discover the passion, expertise, and inspiration that drive my
              creative journey. Let&apos;s explore and learn together!
            </p>
            <p className="text-white/90 text-[15px] leading-relaxed font-light">
              Dive into my creative portfolio, showcasing a glimpse of my
              artistic endeavors. From digital designs to multimedia projects,
              each piece tells a unique story. Explore the world of creativity
              with me.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="bg-white text-black items-center font-semibold text-[14px] px-6 py-2.5 rounded-full shadow-sm">
                <span className="text-blue-400 text-xl font-bold">
                  {creatorCourses.length}
                </span>{" "}
                Products
              </div>
              <div className="bg-white text-black font-semibold text-[14px] px-6 py-2.5 rounded-full shadow-sm">
                <span className="text-blue-400 text-xl font-bold">12</span>{" "}
                Followers
              </div>
            </div>

            <button className="bg-[#CBFC01] text-black font-bold text-[15px] px-10 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-md">
              Follow
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-6 lg:px-12 w-full py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <HiOutlineFilter size={18} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <FaSignal size={16} className="text-gray-400" /> Level
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <MdOutlineCategory size={18} className="text-gray-400" /> Category
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <MdSort size={18} /> Most relevant
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {creatorCourses.map((course) => (
            <Link
              href={`/courses/${course.id}`}
              key={course.id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-2 transition-all hover:shadow-lg hover:border-gray-300"
            >
              <div className="relative h-55 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
                  <div className="flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-medium text-gray-700 shadow-sm">
                    <HiOutlineDocumentText size={12} /> {course.lessons} Lessons
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-medium text-gray-700 shadow-sm">
                    <HiOutlineClock size={12} /> {course.duration}
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-medium text-gray-700 shadow-sm">
                    <HiOutlineChatAlt2 size={12} /> {course.comments} Comments
                  </div>
                </div>
              </div>

              <div className="px-2 pb-2 flex flex-col grow">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold text-[17px] text-gray-900 leading-snug line-clamp-1 group-hover:text-[#003BE2] transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[13px] font-bold text-gray-400 mt-0.5">
                    {course.rating}{" "}
                    <FaStar className="text-gray-300" size={12} />
                  </div>
                </div>

                <span className="text-[12px] text-gray-400 mb-4">
                  {course.author}
                </span>

                <div className="flex items-center justify-between mb-4 mt-auto">
                  <div className="flex items-center gap-1.5 text-gray-500 font-medium text-[13px]">
                    <FaSignal size={12} /> {course.level}
                  </div>
                  <div className="flex items-center">
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
                    <div className="w-6 h-6 rounded-full bg-[#CBFC01] border-2 border-white -ml-2 flex items-center justify-center text-[8px] font-bold text-black z-10 shadow-sm">
                      26+
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xl font-bold text-[#003BE2]">
                    ${course.price}
                  </span>
                  <span className="text-[12px] font-medium text-gray-400">
                    /lifetime
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
