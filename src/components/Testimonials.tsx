import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full h-250 pt-24 bg-[#fcfdfc] overflow-hidden flex items-center justify-center">
      {/* Soft Background Gradient Blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-150 h-150 bg-[#CBFC01]/30 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[25%] w-150 h-150 bg-[#CBFC01]/20 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-150 h-150 bg-[#003BE2]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="mx-auto max-w-360  px-6 lg:px-12 relative z-10 w-full">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Discover What Our <br className="hidden md:block" />
              Community Is Saying
            </h2>
          </div>
          <div>
            <p className="text-[15px] md:text-base leading-relaxed text-gray-600 font-medium max-w-xl">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col transition-transform hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="w-18 h-18 rounded-full overflow-hidden relative mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-[15px] font-medium text-[#003BE2]">
                  {testimonial.role}
                </p>
              </div>

              {/* Quote */}
              <p className="text-[15px] leading-relaxed text-gray-500">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
