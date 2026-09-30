"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaStar, FaSignal } from "react-icons/fa";
import {
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineChatAlt2,
  HiOutlineFilter,
} from "react-icons/hi";
import { MdOutlineCategory, MdSort } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import coursesData from "@/lib/data/data.json";
import { IoIosArrowDown } from "react-icons/io";

const ITEMS_PER_PAGE = 18;

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
  ];

  const filteredCourses = useMemo(() => {
    let filtered = coursesData;

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.author.toLowerCase().includes(query),
      );
    }

    if (activeCategory !== "Featured") {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
          course.level === "Beginner",
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="w-full flex flex-col bg-white min-h-screen">
      <section className="w-full bg-[#003BE2] bg-grid-pattern py-20 px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
          Find Your Next Course
        </h1>

        <div className="w-full max-w-3xl flex items-center bg-white rounded-full p-2 shadow-xl">
          <div className="pl-4 text-gray-400">
            <FaSearch size={18} />
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search courses, topics, creators..."
            className="grow bg-transparent px-4 py-3 text-[15px] text-black outline-none placeholder:text-gray-400"
          />
          <button className="bg-[#CBFC01] text-black  text-[15px] px-6 h-12 rounded-full flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
            Courses <IoIosArrowDown />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-6 lg:px-12 w-full py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
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

        <div className="flex flex-wrap items-center gap-x-3 gap-y-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`rounded-full px-5 py-2.5 text-[13px] transition-transform active:scale-95 ${
                activeCategory === category
                  ? "bg-[#CBFC01] font-bold text-black hover:scale-105"
                  : "bg-[#f4f4f5] font-medium text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {currentCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {currentCourses.map((course) => (
              <Link
                href={`/courses/${course.id}`}
                key={course.id}
                className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden  p-2 transition-all hover:shadow-lg hover:border-gray-300"
              >
                <div className="relative h-72 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    unoptimized={true}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
                    <div className="flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-medium text-gray-700 shadow-sm">
                      <HiOutlineDocumentText size={12} /> {course.lessons}{" "}
                      Lessons
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

                  <span className="text-[12px] text-blue-600 mb-4">
                    {course.author}
                  </span>

                  <div className="flex items-center gap-2 mb-4 mt-auto">
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
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("Featured");
              }}
              className="mt-6 text-[#003BE2] font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-16">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-4 px-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`text-[15px] transition-colors ${
                      currentPage === page
                        ? "font-bold text-black"
                        : "font-medium text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
