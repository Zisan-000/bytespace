import {
  HiOutlinePencil,
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineOfficeBuilding,
  HiOutlineSpeakerphone,
  HiOutlineCamera,
} from "react-icons/hi";

export default function LearningPaths() {
  const paths = [
    { id: 1, name: "Design", icon: HiOutlinePencil },
    { id: 2, name: "Development", icon: HiOutlineCode },
    { id: 3, name: "IT & Software", icon: HiOutlineDesktopComputer },
    { id: 4, name: "Business", icon: HiOutlineOfficeBuilding },
    { id: 5, name: "Marketing", icon: HiOutlineSpeakerphone },
    { id: 6, name: "Photography", icon: HiOutlineCamera },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-300 px-6 lg:px-12 text-center">
        {/* Header Content */}
        <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p className="mx-auto mb-16 max-w-4xl text-[15px] leading-relaxed text-gray-500">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {paths.map((path) => (
            <div
              key={path.id}
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white py-10 px-4 transition-all hover:border-[#CBFC01] hover:shadow-lg"
            >
              {/* Icon Circle */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#CBFC01]">
                <path.icon
                  className="text-gray-900"
                  size={24}
                  strokeWidth={2}
                />
              </div>

              {/* Category Name */}
              <span className="text-[15px] font-semibold text-gray-900">
                {path.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
