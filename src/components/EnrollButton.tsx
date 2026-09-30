"use client";

import { useState, useEffect } from "react";

export default function EnrollButton({ courseId }: { courseId: string }) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]",
    );
    if (storedCourses.includes(courseId)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsEnrolled(true);
    }
    setIsLoaded(true);
  }, [courseId]);

  const handleEnroll = () => {
    const storedCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]",
    );

    if (!storedCourses.includes(courseId)) {
      storedCourses.push(courseId);
      localStorage.setItem("enrolledCourses", JSON.stringify(storedCourses));

      window.dispatchEvent(new Event("cartUpdated"));
    }

    setIsEnrolled(true);
  };

  if (!isLoaded) {
    return (
      <button className="w-full bg-gray-200 text-gray-400 font-bold text-[16px] py-4 rounded-full mb-8 cursor-wait">
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={handleEnroll}
      disabled={isEnrolled}
      className={`w-full font-bold text-[16px] py-4 rounded-full mb-8 transition-transform ${
        isEnrolled
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-[#CBFC01] text-black hover:scale-105 active:scale-95 shadow-md"
      }`}
    >
      {isEnrolled ? "Enrolled ✓" : "Enroll Now"}
    </button>
  );
}
