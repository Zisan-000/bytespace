"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaStar, FaVideo } from "react-icons/fa";

type Course = {
  id: string;
  title: string;
  author: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  image: string;
  level: string;
};

export default function CourseTabs({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-10">
        {["About", "Lesson", "Reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-medium text-[14px] px-6 py-2.5 rounded-full transition-all ${
              activeTab === tab
                ? "bg-[#CBFC01] text-black font-bold"
                : "bg-gray-50 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "About" && (
        <div className="flex flex-col w-162.5 animate-in fade-in duration-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
          <div className="text-[15px] text-gray-500 leading-relaxed flex flex-col gap-2 mb-10">
            <p>
              Embark on an enlightening exploration into the world of digital
              creation with our comprehensive course, &quot;{course.title}
              .&quot; This transformative learning experience invites you to
              delve deep into the intricacies of crafting impactful digital
              content. From laying the groundwork with foundational concepts to
              mastering advanced techniques, this guide is meticulously curated
              to empower you with the skills essential for navigating the
              dynamic landscape of digital asset creation.
            </p>{" "}
            <br />
            <p>
              In the initial modules, you&apos;ll establish a solid foundation
              by immersing yourself in the foundational concepts that form the
              backbone of digital asset creation. Understand the fundamental
              elements that constitute compelling digital content and gain
              proficiency in leveraging these elements to communicate
              effectively in the digital realm.
            </p>{" "}
            <br />
            <p>
              As you progress through the course, you&apos;ll ascend to higher
              levels of expertise, delving into the nuances of design principles
              that drive impactful creations. Uncover the secrets behind
              effective visual communication, exploring color theory,
              typography, and layout strategies that elevate your digital assets
              to new heights. Engage in hands-on exercises that reinforce your
              understanding, allowing you to apply these principles in practical
              scenarios.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Sneak Peak</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=300&q=80",
              "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&q=80",
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80",
              "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=300&q=80",
            ].map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-video rounded-xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={src}
                  alt="Sneak peak"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Points</h3>
          <ul className="flex flex-col gap-3">
            {[
              "Foundational Concepts",
              "Design Principles Mastery",
              "Advanced Techniques in Digital Creation",
              "Project Showcase and Critique",
              "Optimizing for Various Platforms",
              "Digital Asset Management Best Practices",
              "Monetization Strategies",
              "Capstone Project: Building Your Portfolio",
            ].map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-[14px] text-gray-600"
              >
                <FaCheckCircle className="text-[#003BE2] shrink-0" size={16} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "Lesson" && (
        <div className="flex flex-col w-162.5  animate-in fade-in duration-300">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Explore the Modules
          </h3>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
            Immerse yourself in the course content as we break down each module
            into comprehensive lessons, providing practical insights and
            hands-on experiences.
          </p>

          <h3 className="text-[17px] font-bold text-gray-900 mb-6">
            Lesson List
          </h3>
          <div className="flex flex-col gap-8 mb-10">
            {[
              {
                title: "Module 1: Introduction to Digital Assets",
                desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
              },
              {
                title: "Module 2: Design Principles for Impact",
                desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
              },
              {
                title: "Module 4: User-Centric Design Strategies",
                desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
              },
              {
                title: "Module 5: Interactive Media and Engagement",
                desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
              },
              {
                title: "Module 6: Project Showcase and Critique",
                desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
              },
              {
                title:
                  "Module 7: Optimizing Digital Assets for Various Platforms",
                desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
              },
            ].map((mod, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="w-13 h-13 bg-[#CBFC01] rounded-full flex items-center justify-center shrink-0 text-black mt-1">
                  <FaVideo size={18} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-[15px] text-gray-900">
                    {mod.title}
                  </h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-[17px] font-bold text-gray-900 mb-3">
            Lesson Content
          </h3>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-10">
            Engage with each lesson through captivating video content, detailed
            textual explanations, and interactive elements. Download resources,
            complete assignments, and test your understanding with quizzes.
          </p>

          <h3 className="text-[17px] font-bold text-gray-900 mb-3">
            Lesson Progress Tracking
          </h3>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
            Witness your growth as you complete lessons, with an intuitive
            progress tracking feature guiding you through your learning journey.
          </p>

          <div className="border border-gray-200 rounded-2xl p-6">
            <span className="text-[13px] text-gray-700 font-medium block mb-1">
              Learning Progress
            </span>
            <div className="text-[40px] font-extrabold text-black leading-none mb-4">
              55%
            </div>
            <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#CBFC01] w-[55%] rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Reviews" && (
        <div className="flex flex-col w-162.5  animate-in fade-in duration-300">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            What Learners Are Saying
          </h3>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
            Discover what our learners have to say about their experience with
            &apos;{course.title}.&apos; Read reviews and ratings from
            individuals who have embarked on the transformative journey of
            mastering digital asset creation.
          </p>

          <div className="border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="bg-[#CBFC01] rounded-2xl flex flex-col items-center justify-center w-full md:w-35 h-35 shrink-0">
              <span className="text-[13px] font-medium text-black mb-1">
                Ratings
              </span>
              <span className="text-5xl font-extrabold text-black">4.7</span>
            </div>

            <div className="grow flex flex-col gap-2.5 w-full">
              {[
                { stars: 5, count: 720, width: "70%" },
                { stars: 4, count: 120, width: "30%" },
                { stars: 3, count: 21, width: "8%" },
                { stars: 2, count: 12, width: "3%" },
                { stars: 1, count: 16, width: "4%" },
              ].map((row) => (
                <div
                  key={row.stars}
                  className="flex items-center gap-4 text-[13px] text-gray-500"
                >
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden grow max-w-60">
                    <div
                      className="h-full bg-[#CBFC01]"
                      style={{ width: row.width }}
                    ></div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < row.stars ? "text-gray-700" : "text-gray-200"
                        }
                        size={14}
                      />
                    ))}
                  </div>
                  <span className="w-8 text-right font-medium">
                    {row.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-[17px] font-bold text-gray-900 mb-4">
            Individual Reviews:
          </h3>

          <div className="flex flex-wrap gap-3 mb-8">
            <button className="bg-[#CBFC01] text-black font-bold text-[13px] px-5 py-2 rounded-full">
              All rating
            </button>
            {[5, 4, 3, 2, 1].map((star) => (
              <button
                key={star}
                className="bg-gray-50 text-gray-600 font-medium text-[13px] px-5 py-2 rounded-full flex items-center gap-1.5 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all"
              >
                <FaStar className="text-gray-400" size={12} /> {star}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                name: "PurePearl Studio",
                text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
              },
              {
                name: "Albert Flores",
                text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
              },
              {
                name: "Cody Fisher",
                text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
              },
              {
                name: "Brooklyn Simmons",
                text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-3xl p-6 md:p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative">
                      <Image
                        src={`/avatar-${(idx % 4) + 1}.png`}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-[15px] text-gray-900 leading-tight">
                        {review.name}
                      </h5>
                      <span className="text-[13px] text-gray-500">
                        UI/UX Designer
                      </span>
                    </div>
                  </div>
                  <span className="text-[13px] text-gray-400">a year ago</span>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gray-700" size={14} />
                  ))}
                </div>

                <p className="text-[14.5px] text-gray-600 leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
