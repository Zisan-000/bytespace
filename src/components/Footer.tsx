import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const column1 = [
    "Featured Courses",
    "Featured Categories",
    "Business",
    "IT",
    "Design",
  ];
  const column2 = [
    "Development",
    "Marketing",
    "Photography",
    "Finance",
    "Sport",
  ];
  const column3 = [
    "Become a Creator",
    "Affiliate Program",
    "Contact",
    "Help",
    "About",
  ];

  return (
    <footer className="w-full bg-white pt-20 pb-8 border-t border-gray-100">
      <div className="mx-auto max-w-[1640px] px-6 lg:px-12">
        {/* Top Section: Newsletter & Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Left Side: Brand & Newsletter (Spans 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/logo.png"
                alt="ByteSpace Logo"
                width={30}
                height={30}
              />
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                ByteSpace
              </span>
            </div>

            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[400px]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Input & Button */}
            <form className="flex flex-col sm:flex-row gap-3 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="grow rounded-full border border-gray-300 px-6 py-3.5 text-[15px] text-gray-900 outline-none transition-colors focus:border-gray-400"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-[#CBFC01] px-8 py-3.5 text-[15px] font-bold text-black transition-transform hover:scale-105 active:scale-95"
              >
                Search
              </button>
            </form>

            <p className="text-[12px] text-gray-500 leading-relaxed max-w-[400px] mt-2">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Side: Links Columns (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-5">
              {column1.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[15px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-5">
              {column2.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[15px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-5">
              {column3.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[15px] text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 pt-8">
          <p className="text-[13px] text-gray-500">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[13px] text-gray-500 transition-colors hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[13px] text-gray-500 transition-colors hover:text-gray-900"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-[13px] text-gray-500 transition-colors hover:text-gray-900"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
