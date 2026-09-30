import Image from "next/image";
import { FaStar, FaSignal } from "react-icons/fa";
import {
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineChatAlt2,
} from "react-icons/hi";

const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
];

const categories = [
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function DiscoverCourses() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-300 px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Discover Your Passion, <br className="hidden md:block" />
            Build Your Skills
          </h2>
          <p className="mx-auto max-w-3xl text-[15px] leading-relaxed text-gray-500">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-4 mb-16">
          <button className="rounded-full bg-[#CBFC01] px-5 py-2.5 text-[13px] font-bold text-black transition-transform hover:scale-105">
            Featured
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full bg-[#f4f4f5] px-5 py-2.5 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              {category}
            </button>
          ))}
          <button className="px-3 py-2 text-[13px] font-bold text-[#003BE2] hover:underline">
            + More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-2 transition-shadow hover:shadow-md"
            >
              <div className="relative h-55 w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  unoptimized={true}
                  className="object-cover"
                />

                {/* Floating Badges */}
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

              {/* Card Body */}
              <div className="px-2 pb-2 flex flex-col grow">
                {/* Title & Rating */}
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold text-[17px] text-gray-900 leading-snug line-clamp-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[13px] font-bold text-gray-400 mt-0.5">
                    {course.rating}{" "}
                    <FaStar className="text-gray-300" size={12} />
                  </div>
                </div>

                {/* Author */}
                <span className="text-[12px] text-gray-400 mb-4">
                  by <span className="text-blue-600">{course.author}</span>
                </span>

                {/* Level & Avatars */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-gray-500 font-medium text-[13px]">
                    <FaSignal size={12} /> Beginner
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

                {/* Price */}
                <div className="mt-auto">
                  <span className="text-xl font-bold text-[#003BE2]">
                    ${course.price}
                  </span>
                  <span className="text-[12px] font-medium text-gray-400">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
